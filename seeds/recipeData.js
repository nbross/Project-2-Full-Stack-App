const { Recipe } = require('../models');

const recipeData = [
    {
        id: 1,
        recipe: "Bruschetta",
        filename: "01-bruschetta.jpg",
        description: "Toasted bread topped with tomatoes, Parmesan cheese, garlic and fresh basil drizzled with balsamic vinegar",
    }, 
    {
        id: 2,
        recipe: "Spinach Artichoke Dip", 
        filename: "02-spinach-artichoke.jpg",
        description: "Creamy spinach and artichoke dip topped with melted Parmesan cheese.  Served with freshly made tortilla chips.",
    },
    {
        id: 3,
        recipe: "Fried Mac and Cheese Bites",
        filename: "03-mac-and-cheese-bites.jpg",
        description: "Tender macaroni blended with 100% real American cheese, coated in a cripsy batter and deep-fried to a golden finish",
    },
    {
        id: 4,
        recipe: "Napa Chicken Chopped Salad",
        filename: "04-napa-chicken-chopped-salad.jpg",
        description: "Lucious salad with apple, goat cheese, dried chery, corn, avocado, toasted marcona almonds, and tomaato topped with a honey mustard vinagrette.",
    },
    {
        id: 5, 
        recipe: "Supergood Salmon Salad",
        filename:"05-salmon-salad.jpg",
        description: "Fresh spring greens topped with avocado, sweet potato croutons, pepitas, pickled red onions, feta, and wild caught salmon topeed with a lemon vinagrette, avocado oil, salt and pepper.",
    }, 
    {
        id: 6,
        recipe: "Pizza Bianca",
        filename: "06-pizza-bianca.jpg",
        description: "House made dough topped with extra virgin olive oil, fresh mozzarella cheese, ricotta cheese, fresh basil pesto, and dried oregano",
    }, 
    {
        id: 7,
        recipe: "BBQ Chicken Pizza",
        filename: "07-bbq-chicken-pizza.jpg",
        description: "House made dough topped with bbq sauce, mozzarella, chicken, red onions and cilantro",
    },
    {
        
    }


];
const seedRecipe= () =>Recipe.bulkCreate(recipeData);

module.exports = seedRecipe