const User = require('./User');
const Menu = require('./Menu');
const Recipe = require('./Recipe');

Menu.hasMany(Recipe, {
  foreignKey: 'Recipe_id',
});

Recipe.belongsToMany(Menu, {
  foreignKey: 'Recipe_name',
  as: 'recipe',
});

User.hasMany(Recipe, {
  foreignKey: 'recipe_id',
});

Recipe.belongsTo(User, {
    foreignKey: 'recipe_id',
});

module.exports = { User, Menu, Recipe };