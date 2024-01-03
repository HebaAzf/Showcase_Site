import mongoose from "mongoose";
import dotenv from "dotenv"
import postings from "./data/PostingDetails.js"
import User from "./models/userModel.js";
import Posting from "./models/postModel.js";
import connectDB from "./config/db.js";
import users from "./data/user.js";

dotenv.config()
connectDB()

//delete everything them import data
const importData = async () => {
    try {
        await Posting.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users) //returns created users and stores it in 'createdUsers' vb
        const adminUser = createdUsers[0]._id //extracts ID of admin users (who is first in the array)

        //for each post in the postings array, create a new post variable with all the info and associate it with the admin user
        const samplePostings = postings.map((posting) => {
            return {...posting, user:adminUser}
        })

        await Posting.insertMany(samplePostings)
        console.log('Data Imported')
        process.exit()
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)

    }
}

const destroyData = async () => {
    try {
        await Posting.deleteMany()
        await User.deleteMany()

        await Posting.insertMany(samplePostings)
        console.log('Data destroyed!')
        process.exit()
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)

    }
}

if (process.argv[2] === '-d') {destroyData()}
else {importData()}