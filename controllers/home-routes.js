const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Menu } = require('../models');

router.get('/', (req, res) => {
    console.log('====================');
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
        .then(dbPostData => {
            const menus = dbPostData.map(post => post.get({ plain: true }));

            res.render('homepage', { menus });
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