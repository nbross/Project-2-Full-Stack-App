const User = require('./User');
const Menu = require('./Menu');
const Recipe = require('./Recipe');

Menu.hasOne(User, {
  foreignKey: 'user_id',
});

Menu.hasMany(Recipe, {
  foreignKey: 'menu_id',
});

Recipe.belongsTo(Menu, {
  foreignKey: 'menu_id',
});

User.hasOne(Recipe, {
  foreignKey: 'user_id',
});


module.exports = { User, Menu, Recipe };