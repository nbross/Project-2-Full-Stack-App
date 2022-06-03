const { Menu } = require('../models');

const menudata = [
    {
        menu: 'menu',
        user_id: 1
    },

];

const seedMenu = () => Menu.bulkCreate(menudata);

module.exports = seedMenu;