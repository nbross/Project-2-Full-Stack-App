const sequelize = require('../config/connection');
const seedMenu = require('./menuData');
const seedRecipe = require('./recipeData');
const seedUser = require('./userData');

const seedAll = async () =>{
    await sequelize.sync({force: true});

    await seedUser();

    await seedMenu();

    await seedRecipe();

    process.exit(0);
};

seedAll();