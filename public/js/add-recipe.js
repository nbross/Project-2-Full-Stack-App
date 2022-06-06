async function newRecipeHandler(event) {
    event.preventDefault();

    const recipe_title = document.querySelector('input[name="recipe-title"]').value;
    const recipe_text = document.querySelector('input[name="recipe-text"]').value;
    const filename = document.querySelector(`input[name="filename"]`).value;
    const menu_id = 1;
    const user_id = 1;

    const response = await fetch(`/api/recipes`, {
        method: 'POST',
        body: JSON.stringify({
            recipe_title,
            recipe_text,
            menu_id,
            filename, 
            user_id,  
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
        console.log(filename)
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-recipe-form').addEventListener('submit', newRecipeHandler);