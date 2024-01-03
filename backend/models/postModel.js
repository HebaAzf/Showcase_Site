import mongoose from "mongoose";

//Mongoose schema with the necessary fields
const postSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    title: {type: String, required: true},
    name: {type: String, required: true}, //making it an object then defining stuff so it's clear what's what
    image: {type: String, required: true},
    description: 'String',
    theme: 'String',
}, {timestamps: true})

const Posting = mongoose.model("Posting", postSchema)

export default Posting