
async function newRecipeHandler(event) {
    event.preventDefault();

    const recipe_title = document.querySelector('input[name="recipe-title"]').value;
    const recipe_text = document.querySelector('input[name="recipe-text"]').value;
    const filename = document.querySelector(`input[name="filename"]`).value;


    const response = await fetch(`/api/recipes`, {
        method: 'POST',
        body: JSON.stringify({
            recipe_title,
            recipe_text,
            filename
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-recipe-form').addEventListener('submit', newRecipeHandler);