const multer = require('multer');

const storage = multer.diskStorage({
    distination: (req, file, cb) => {
        cb(null, '../../images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))

    }
})

const upload = multer({
    storage: storage,
    limit: {fileSize: '1000000'},
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Please use a jpeg, jpg, png, or gif filetype')
    }
}).single('filename')

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