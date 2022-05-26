const { Recipe } = require('../models/');

const recipeData = [

];
const seedRecipe= () =>Recipe.bulkCreate(recipeData);

module.exports = seedRecipe