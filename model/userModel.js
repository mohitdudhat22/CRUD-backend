import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({});
export const User = mongoose.model('User', userSchema);

