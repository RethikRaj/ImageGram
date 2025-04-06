import { s3uploader } from "../config/multerConfig.js"; 

const imageUploader = (req,res,next)=>{
    const singleUpload = s3uploader.single("image");
    singleUpload(req,res,(err)=>{
        if(err){
            // If it's a Multer error from fileFilter
            if (err.message === "Invalid file type, only JPEG and PNG are allowed") {
                return res.status(400).json({ error: err.message });
            }

            // If it's a Multer file size or other upload error
            return res.status(500).json({ error: "Error uploading image" });
        }
        next(); 
    }) // "image" is the name of the field in the form
}

export default imageUploader;