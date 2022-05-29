const router = require('express').Router();

const userRoutes = require('./user-routes');
const menuRoutes = require('./menu-routes');
const recipeRoutes = require('./recipe-routes');

router.use('/users', userRoutes);
router.use('/menus', menuRoutes);
router.use('/recipes', recipeRoutes);

module.exports = router;
