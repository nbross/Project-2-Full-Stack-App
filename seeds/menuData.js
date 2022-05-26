const { Menu } = require('../models');

const menudata = [

];

const seedMenu = () => Menu.bulkCreate(menudata);

module.exports = seedMenu;