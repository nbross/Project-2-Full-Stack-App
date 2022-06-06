const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    distination: (req, file, cb) => {
        cb(null, '../../images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))

    }
});

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

module.exports = upload