const router = require('express').Router();
const sequelize = require('../config/connection');
const { Menu, User, Recipe } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
Recipe.findAll({
    where: {
        user_id: req.session.user_id 
    },
    attributes: [
        'id', 
        'recipe',
        'menu_id', 
        'user_id', 
        'filename', 
        'description',
        'created_at'
    ],
    include: [
        {
        model: Menu,
        attributes: [
            'id',
            'menu',
            'starting_date',
            'ending_date',
        ],
        },
        {
        model: User,
        attributes: ['username']
        } 
    ]
})
.then(dbRecipeData => {
    const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }));
    res.render('dashboard', { recipes, loggedIn: true });
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

router.get('/edit/:id', withAuth, (req, res) => {
    Recipe.findByPk(req.params.id, {
        attributes: [
            'id', 
        'recipe',
        'menu_id', 
        'user_id', 
        'filename', 
        'description',
        'created_at'
    ],
    include: [
        {
        model: Menu,
        attributes: [
            'id',
            'menu',
            'starting_date',
            'ending_date',
        ],
        },
        {
        model: User,
        attributes: ['username']
        } 
    ]
})
.then(dbRecipeData => {
    if(dbRecipeData) {
        const recipe = dbRecipeData.get({ plain: true });

        res.render('edit-recipe', {
            recipe,
            loggedIn: true
        });
    } else {
        res.status(404).end();
    }
})
.catch(err => {
    res.status(500).json(err);
});
});

module.exports = router;
    