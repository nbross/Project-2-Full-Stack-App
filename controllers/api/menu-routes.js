const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Menu, User, Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Menu.findAll({  
        attributes: [
            'id',
            'menu',
            'starting_date',
            'ending_date',
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Recipe,
                attributes: ['id', 'recipe', 'description', 'filename', 'created_at']
            }
        ]
    })
    .then(dbMenuData => res.json(dbMenuData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Menu.findOne({
        where: {
            id: req.params.id
        }, 
        attributes: [ 'id', 'menu', 'starting_date', 'ending_date'],
        include: [
            {
                model: Recipe, 
                attributes: ['id', 'recipe', 'filename', 'description', 'created_at', 'user_id'],
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
    .then(dbMenuData => {
        if (!dbMenuData) {
            res.status(404).json({ message: 'No menu found with this id'});
            return;
        }
        res.json(dbMenuData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Menu.create({
            menu_text: req.body.menu_text,
            recipe_id: req.session.recipe_id,
        })
        .then(dbMenuData => {res.json(dbMenuData)})
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }
});

router.put('/:id', withAuth,  (req, res) => {
    Menu.update(
        {
            menu: req.body.menu,
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbMenuData => {
        if(dbMenuData) {
            res.status(404).json({ message: 'No menu found with this id'});
            return;
        }
        res.json(dbMenuData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
   }
);


router.delete('/:id', withAuth, (req, res) => {
    Menu.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbMenuData => {
        if(!dbMenuData) {
            res.status(404).json({ message: 'No menu found with this id' });
            return;
        }
        res.json(dbMenuData);
    })
    .catch(err => {
        coneol.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;