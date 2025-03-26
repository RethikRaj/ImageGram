import express from 'express';
import connectToDB from './config/dbConfig.js';

const app = express();
const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
    // Connecting to DB
    connectToDB();
})