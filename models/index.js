const User = require('./User');
const Menu = require('./Menu');
const Recipe = require('./Recipe');

User.hasMany(Recipe, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Recipe.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Menu.hasMany(Recipe, {
  foreignKey: 'menu_id',
  onDelete: 'CASCADE'
});

Recipe.belongsTo(Menu, {
  foreignKey: 'menu_id',
  onDelete: 'CASCADE'
});

Menu.hasMany(User, {
  foreignKey: 'menu_id',
  onDelete: 'CASCADE'
});

Recipe.belongsTo(Menu, {
  foreignKey: 'menu_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Menu, Recipe };