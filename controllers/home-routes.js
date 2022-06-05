const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Menu } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
     Menu.findAll({
        include: [
            {
                model: Recipe,
                attributes: ['id', 'recipe', 'filename', 'description'],
                
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

    router.get('/menus/:id', withAuth, async (req, res) => {
        try{
            const dbMenuData = await Menu.findByPk(req.params.id, {
                include: [
                    {
                        model: Recipe,
                        attributes: [
                            'id', 
                            'recipe',
                            'filename',
                            'description',
                        ],
                    },
                ],
            });
            const menu = dbMenuData.get({ plain: true });
            res.render('menu', { menu, loggedIn: req.session.loggedIn });
        } catch (err) {
            console.log(err),
            res.status(500).json(err);
        }
    });

    router.get('/recipes/:id', withAuth, async (req, res) => {
        try {
            const dbRecipeData = await Recipe.findByPk(req.params.id);
            const recipe = dbRecipeData.get({ plain: true });

            res.render('recipe', { recipe, loggedIn: req.session.loggedIn});
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    });

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});;

module.exports = router;