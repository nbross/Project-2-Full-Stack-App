async function recipeFormHandler(event) {
    event.preventDefault();

    const recipe_text = document.querySelector('textarea[name="recipe-body"]').value.trim();

    const recipe_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    if (recipe_text) {
        const response = await fetch('/api/recipe', {
            method: 'POST',
            body: JSON.stringify({
                recipe_id,
                recipe_text,
                filename
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

//document.querySelector('.recipe-form').addEventListener('submit', recipeFormHandler);