import express from 'express';
import connectToDB from './config/dbConfig.js';
import apiRouter from './routers/apiRouter.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.text());

app.use('/api',apiRouter); // Any request starting with /api will be handled by apiRouter.

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
    // Connecting to DB
    connectToDB();
})