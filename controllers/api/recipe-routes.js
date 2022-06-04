const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Recipe, Menu, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Recipe.findAll({
        attributes: [
            'id',
            'recipe',
            'filename',
            'description',
            'created_at'
        ],
        include: [
            {
                model: Menu,
                attributes: ['id', 'menu', 'starting_date', 'ending_date', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbRecipeData => res.json(dbRecipeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Recipe.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'recipe', 'filename', 'description', 'created_at'],
        include: [
            {
                model: Menu,
                attributes: ['id', 'menu', 'starting_date', 'ending_date', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User, 
                attributes: ['username']
            }
        ]
    })
    .then(dbRecipeData => {
        if(!dbRecipeData) {
            res.status(404).json({ message: 'No recipe found with this id' });
            return;
        }
        res.json(dbRecipeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
        Recipe.create({
            recipe_text: req.body.recipe_text,
            user_id: req.session.user_id,
            menu_id: req.body.menu_id
        })
            .then(dbRecipeData => res.json(dbRecipeData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    });

router.put('/:id', withAuth, (req, res) => {
        Recipe.update(
            {
               receipe: req.body.recipe
            }, 
            {
                where: {
                    id: req.params.id
                }
            }
        )
        .then(dbRecipeData => {
            if(!dbRecipeData) {
                res.status(404).json({ message: 'No recipe found with this id' });
                return;
            }
            res.json(dbRecipeData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });

router.delete('/:id', withAuth, (req, res) => {
    Recipe.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbRecipeData => {
            if (!dbRecipeData) {
                res.status(404).json({ message: 'No Recipe found with this id!' });
                return;
            }
            res.json(dbRecipeData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;