//servers entrypoint

//common js syntax would be 'const express require express' but we put 'type:module' in json file so we can use import syntax
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import PostRoutes from './routes/PostRoutes.js'

//configured PORT as 5000 in env 
//frontend on 3000, choosing backup port for 5000 (|| 8000)
const port = process.env.PORT;

//connect to mongodb
connectDB()

//initialize express
const app = express();

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/Postings', PostRoutes)

//start up the server
app.listen(port, () => console.log(`server running on ${port}`))