import mongoose from "mongoose";
import dotenv from "dotenv"
import postings from "./data/PostingDetails.js"
import users from "./models/userModel.js";
import posting from "./models/postModel.js";
import connectDB from "./config/db";

dotenv.config()
connectDB()

//delete everything them import data
const importData = async () => {
    try {
        await Posting.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id
    } catch (error) {
        
    }
}