const { Menu } = require('../models');

const menudata = [
    {
        id: 1,
        menu: "Fall Menu",
        starting_date: 01/01/2022,
        ending_date: 01/01/2024,
        user_id: 1
    },

];

const seedMenu = () => Menu.bulkCreate(menudata);

module.exports = seedMenu;