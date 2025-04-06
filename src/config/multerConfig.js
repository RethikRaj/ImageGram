import multer from "multer";
import multerS3 from "multer-s3";
import s3 from "../config/awsConfig.js";
import { AWS_BUCKET_NAME } from "./serverConfig.js";

const storage = multerS3({
    s3: s3,
    bucket: AWS_BUCKET_NAME,    
    key: function(req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        const fileName = `${file.fieldname}-${uniqueSuffix}.${file.mimetype.split("/")[1]}`;
        cb(null, fileName); // null is the error, fileName is the key
    }
});

const fileFilter = (req,file,cb)=>{
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg"){
        cb(null,true); // accept the file
    }else{
        cb(new Error("Invalid file type, only JPEG and PNG are allowed"),false); // reject the file
    }
}

export const s3uploader = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: fileFilter
}); 