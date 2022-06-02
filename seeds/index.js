const sequelize = require('../config/connection');
const seedMenu = require('./menuData');
const seedRecipe = require('./recipeData');

const seedAll = async () =>{
    await sequelize.sync({force: true});

    await seedMenu();

    await seedRecipe();

    process.exit(0);
};

seedAll();