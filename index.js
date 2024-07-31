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
app.use('/api/users', route);
app.use(errorHandler());
app.listen(PORT, function(){
    console.log("Server listening on port "+ PORT);
});
