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
        .then(dbMenuData => {
            const menus = dbMenuData.map(menu => menu.get({ plain: true }));

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

router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at',
        ],
        include: [
            {
                model: Recipe,
                attributes: ['id', 'recipe', 'filename', 'description'],
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
                res.status(404).json({ message: 'No Menu Post found with this id' });
                return;
            }
            // serialize the data
            const post = dbMenuData.get({ plain: true })

            // pass data to template
            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn,
                username: req.session.username
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;