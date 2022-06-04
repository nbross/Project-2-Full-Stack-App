async function newRecipeHandler(event) {
    event.preventDefault();

    const recipe_title = document.querySelector('input[name="recipe-title"]').valuex.trim();
    const recipe_text = document.querySelector('input[name="recipe-text"]').value.trim();

    const response = await fetch(`/api/recipes`, {
        method: 'POST',
        body: JSON.stringify({
            recipe_title,
            recipe_text
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