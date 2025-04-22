const cloudinary = require('cloudinary').v2;
require('dotenv').config()


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});

const fileUpload = async (req, res) => {
    console.log(req.file);

    
    // const url = 'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg'
    try {
        const uploadResult = await cloudinary.uploader
            .upload(req.file.path , {public_id: req.file.originalname.split('.')[0],})
            .catch((error) => {
                console.log(error);
                res.status(401).json({message: 'File upload failed'})
            });
    
        console.log(uploadResult);
        if(uploadResult) {
            res.status(201).json({message: 'file upload successful'})
        }
    } catch(err) {
        res.status(501).send({error: err})
    }
}

module.exports = fileUpload