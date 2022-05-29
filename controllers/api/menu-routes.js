const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Menu, User, Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Menu.findAll()
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
        attributes: [ 'id', 'menu', 'starting_date', 'ending_date' ],
        include: [
            {
                model: Recipe, 
                attributes: ['recipe']
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

router.put('/:id', (req, res) => {
    Menu.update(
        {
            menu_text: req.body.menu_text,
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
    })
})

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