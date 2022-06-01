async function editRecipeHandler(event) {
    event.preventDefault();

    const recipe_title = document.querySelector('input[name="recipe-title"]').value.trim();
    const recipe_id = window.location.toString.split('/')[
        window.location.toString().split('/').length -1
    ];

    const response = await fetch(`/api/recipes/${recipe_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            recipe_title
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-recipe-form').addEventListener('submit', editRecipeHandler);