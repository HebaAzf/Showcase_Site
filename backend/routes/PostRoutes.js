import express from 'express'
import { getPosts, getPostsById } from '../controllers/PostController.js'

const router = express.Router()

router.route('/').get(getPosts)
router.route('/:id').get(getPostsById)

export default router