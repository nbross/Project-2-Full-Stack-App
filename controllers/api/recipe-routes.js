const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Recipe, Menu, User } = require('../../models');
const withAuth = require('../../utils/auth');
const multer = require('multer');
const path = require('path');
//const upload = require('../../utils/upload');
const express = require('express');

//router.post('/', )

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname))
    }
});
var upload = multer
({ storage: storage,
   limit: {fileSize: '1000000'},
   fileFilter: (req, file, cb) => {
       const fileTypes = /jpeg|jpg|png|gif/
       const mimeType = fileTypes.test(file.mimetype)
       const extname = fileTypes.test(path.extname(file.originalname))
    if(mimeType && extname) {
        return cb(null, true)
    }
    cb('please use a jpeg, jpg, png, or gif filetype')
    }
 });

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
                attributes: ['id', 'menu', 'starting_date', 'ending_date'],
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
                attributes: ['id', 'menu', 'starting_date', 'ending_date'],
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

router.post('/', withAuth, upload.single('filename'), (req, res) => {
        console.log(req.file);
       console.log(req.file.path);
        console.log(req);
    
        Recipe.create({
            recipe: req.body.recipe_title,
            description: req.body.recipe_text,
            user_id: req.session.user_id,
            menu_id: 1,
            filename: req.file.path
        })
            .then(dbRecipeData => res.render('menu', {dbRecipeData}))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    });

router.put('/:id', withAuth, (req, res) => {
        Recipe.update(
            {
               recipe: req.body.recipe
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