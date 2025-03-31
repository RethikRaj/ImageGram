import { s3uploader } from "../config/multerConfig.js"; 

const imageUploader = (req,res,next)=>{
    const singleUpload = s3uploader.single("image");
    singleUpload(req,res,(err)=>{
        if(err){
            return res.status(500).json({ error: "Error uploading image" });
        }
        next();
    }) // "image" is the name of the field in the form
}

export default imageUploader;