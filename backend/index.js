//servers entrypoint

//common js syntax would be 'const express require express' but we put 'type:module' in json file so we can use import syntax
import express from 'express'
import postings from './data/PostingDetails.js'
import dotenv from 'dotenv'
dotenv.config()
import connectDb from './config/db.js'
import postings from './data/PostingDetails.js'

//configured PORT as 5000 in env 
//frontend on 3000, choosing backup port for 8000 (|| 8000)
const port = process.env.PORT;

//connect to mongodb
connectDB()

//initialize express
const app = express();

app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/api/postings', (req, res) => {
    res.json(postings)
})

app.get('/api/postings/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
})

//start up the server
app.listen(port, () => console.log(`server running on ${port}`))