import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/userRoute.js'
import customerRouter from './routes/customerRoutes.js'
import caseRouter from './routes/caseRoutes.js'
import dotenv from'dotenv'
dotenv.config()
const app = express()

mongoose.connect(process.env.MONGO_URI).then(
    console.log('connected to mongodb')
).then(
    app.listen(process.env.PORT,()=>{
        console.log('server started');
    })
)

app.use(express.json())
app.use('/users',userRouter)
app.use('/customers', customerRouter)
app.use('/cases', caseRouter)