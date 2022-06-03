const User = require('./User');
const Menu = require('./Menu');
const Recipe = require('./Recipe');

Menu.hasMany(Recipe, {
  foreignKey: 'menu_id',
});

Recipe.belongsTo(Menu, {
  foreignKey: 'menu_id',
});

Recipe.hasOne(User, {
  foreignKey: 'user_id',
});

Menu.hasOne(User, {
  foreignKey: 'user_id',
});

User.hasMany(Recipe, {
  foreignKey: 'user_id'
});

module.exports = { User, Menu, Recipe };