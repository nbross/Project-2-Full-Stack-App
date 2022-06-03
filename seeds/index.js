const sequelize = require('../config/connection');
const seedMenu = require('./menuData');
const seedRecipe = require('./recipeData');
<<<<<<< HEAD
=======
const seedUser = require('./userData');
>>>>>>> seeds

const seedAll = async () =>{
    await sequelize.sync({force: true});

    await seedUser();

    await seedMenu();

    await seedRecipe();

    process.exit(0);
};

seedAll();