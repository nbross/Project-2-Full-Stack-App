const User = require('./User');
const Menu = require('./Menu');
const Recipe = require('./Recipe');

Menu.hasMany(Recipe, {
  foreignKey: 'menu_id',
});

Recipe.belongsTo(Menu, {
  foreignKey: 'menu_id',
});

module.exports = { User, Menu, Recipe };