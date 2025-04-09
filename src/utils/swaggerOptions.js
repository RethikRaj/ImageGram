
const swaggerOptions = {
    definition : {
        openapi : "3.0.0",
        info : {
            title : "Image gram API Documentation",
            version : "1.0.0",
            description : "API documentation for the project"
        },
        servers: [
            {
                url: 'http://localhost:3000/api/v1',
            },
        ]
    },
    apis : ['./src/routers/v1/*.js'], // Make sure this path is relative to the file where you're initializing Swagger (e.g., wherever you’re using swaggerJSDoc(swaggerOptions))
}

export default swaggerOptions;