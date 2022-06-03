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
        id: 8,
        recipe: "Spice Sausage Pizza",
        filename: "08-spicy-pizza.jpg",
        description: "House made dough topped with marinara sauce, spicy sausage, onion, sweet peppers, mozzarella cheese, chili oil and crushed red pepper",
    },
    {
        id: 9, 
        recipe: 'Baked Ziti',
        filename: "09-baked-ziti.jpg",
        description: "Ziti mixed with onions, pancetta, garlic, tomato sauce and a creamy Parmesan bechamel sauce.",
    },
    {
        id: 10, 
        recipe: "Spicy Crab Pasta",
        filename: "10-spicy-pasta.jpg",
        description: "Spaghetti topped with onions, Fresno chile peppers, garlic, crabmeat, and parsley topped with a white wine sauce with mint, dill and lemon zest.",
    },
    {
       id: 11,
       recipe: "Cacio e Pepe",
       filename: "11-cacio-pepe.jpg",
       description: "Spaghetti tossed with butter, olive oil and Parmesan cheese.", 
    },
    {
        id: 12,
        recipe: "Dutch Apple Pie",
        filename: "12-dutch-apple-pie.jpg",
        description: "A mix of granny smith, golden delicious and mcintosh apples baked in out homemade pie crust and topped with butter crumb topping.",
    },
    {
        id: 13, 
        recipe: "Lemon Chiffon Pie",
        filename: "13-lemon-chiffon.jpg",
        description: "Creamy pie with a soft lemon flavor in our homemade pie crust topped with whipped cream.",
    },
    {
     id: 14, 
     recipe: "Chocolate Cream Pie",
     filename: "14-chocolate-cream-pie.jpg",
     description: "A rich chocolate pie in an oreo crust topped with whipped cream and chocolate curls."   
    }


];
const seedRecipe= () =>Recipe.bulkCreate(recipeData);

module.exports = seedRecipe