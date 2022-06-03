const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Menu } = require('../models');


router.get('/', (req, res) => {
     Menu.findAll({
        attributes: [
            'id',
            'menu',
            'starting_date',
            'ending_date',
            [sequelize.literal('(SELECT COUNT(*) FROM recipe WHERE menu.id = recipe.menu_id)'), 'recipe_count']
        ],
        include: [
            {
                model: Recipe,
                attributes: ['id', 'recipe', 'menu_id', 'user_id', 'filename', 'description'],
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
        const menus = dbMenuData.map((menu) => menu.get({ plain: true }));

            res.render('homepage', { 
                menus, 
                loggedIn: req.session.loggedIn, });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });
router.get('/recipes/:id', (req, res) => {
    Recipe.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'recipe',
            'filename',
            'description'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Menu,
                attributes: ['id', 'menu', 'starting_date', 'ending_date']
            }
        ]
    }) 
    .then(dbMenuData => {
        if(!dbMenuData) {
            res.status(404).json({ message: 'No recipe found with this id' });
            return;
        }
        const menu = dbMenuData.get({ plain: true });

        res.render('recipes', {
            menu, 
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});;

module.exports = router;