import express from 'express';
import connectToDB from './config/dbConfig.js';
import apiRouter from './routers/apiRouter.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerOptions from './utils/swaggerOptions.js';
import rateLimiter from './middlewares/rateLimiter.js';

const app = express();
const PORT = 3000;

// rate limiting
app.use(rateLimiter);

app.use(express.json());
app.use(express.urlencoded());
app.use(express.text());

// Swagger setup
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // Swagger UI will be available at /api-docs

app.use('/api',apiRouter); // Any request starting with /api will be handled by apiRouter.

// adding a ping request
app.get("/ping",(req,res)=>{
    return res.status(200).json({
        message : "pong"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
    // Connecting to DB
    connectToDB();
})