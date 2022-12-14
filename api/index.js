import express from "express";
import cors from "cors"
import postRoutes from './routes/posts.js'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'

const app = express()

app.use(cors())

app.use(express.json())
app.use('/api/posts/', postRoutes)
app.use('/api/auth/', authRoutes)
app.use('/api/user/', userRoutes)



app.listen(8800,() => {
    console.log("Connected");
})