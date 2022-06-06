const router = require('express').Router();

const { route } = require('./user-routes');
const userRoutes = require('./user-routes');
const recipeRoutes = require('./recipe-routes');
const menuRoutes = require('./menu-routes')


router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/menus', menuRoutes)


module.exports = router;