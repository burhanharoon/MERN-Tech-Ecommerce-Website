import express, { json } from 'express'
import dotenv from "dotenv"
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import bodyparser from 'body-parser'

dotenv.config();

connectDB();

const app = express()

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Api is running dude damn")
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))