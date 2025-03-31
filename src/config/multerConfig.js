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

export const s3uploader = multer({
    storage: storage
}); // s3 uploader is a middleware