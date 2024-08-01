import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import errorHandler from 'errorhandler';
import route from './routes/userRoute.js';
const app = express();

app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL).then(function() {
    console.log("DB connection");
})
app.all("*", (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl} on this server`);
    err.statusCode = 404;
    err.message = "Page not found";
    next(err);
})
app.use('/api/users', route);
//global error handling middleware
app.use((error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.message = error.message || "Internal server error";
    res.status(error.statusCode).json({statusCode: error.statusCode, message: error.message});
})
// app.use(errorHandler());
app.listen(PORT, function(){
    console.log("Server listening on port "+ PORT);
});
