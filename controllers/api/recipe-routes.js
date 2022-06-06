const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Recipe, Menu, User } = require('../../models');
const withAuth = require('../../utils/auth');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    distination: (req, file, cb) => {
        cb(null, '../../images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))

    }
})

const upload = multer({
    storage: storage,
    limit: {fileSize: '1000000'},
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Please use a jpeg, jpg, png, or gif filetype')
    }
}).single('filename')

//router.post('/', )

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

router.post('/add', withAuth, upload, (req, res) => {
        Recipe.create({
            recipe_text: req.body.recipe_text,
            user_id: req.session.user_id,
            menu_id: req.body.menu_id,
            filename: upload(req.body.filename)
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
module.exports = upload;