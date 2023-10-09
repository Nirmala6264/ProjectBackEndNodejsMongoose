import express from 'express'
import cors from 'cors'
import connectDB from './Database/dbconfig.js'
import studentRouter from './Routers/student.router.js'
import mentorRouter from './Routers/mentor.router.js'
import dotenv from 'dotenv'
dotenv.config()

 const port = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api/student',studentRouter)
app.use('/api/mentor',mentorRouter)
connectDB()
app.listen(port, () => {
    console.log("App is Listening",port);
    
})
