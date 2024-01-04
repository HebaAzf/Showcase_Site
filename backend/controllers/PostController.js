import asyncHandler from '../middleware/asyncHandler.js'
import Posting from '../models/postModel.js'

//Fetch all posts
const getPosts = asyncHandler(async (req, res) => {
    const postings = await Posting.find({}) //empty so we get all
    res.json(postings)
})

//Fetch a specific posting based on the ID
const getPostsById = asyncHandler(async (req, res) => {
    const posting = Posting.findById(req.params.id)

    if (posting) {
    res.json(posting)
    }

    res.status(404)
    throw new Error ("Sorry! That couldn't be found")
})

export {getPosts, getPostsById}