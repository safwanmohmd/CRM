import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/userRoute.js'
import customerRouter from './routes/customerRoutes.js'
import caseRouter from './routes/caseRoutes.js'
const app = express()

mongoose.connect('mongodb+srv://safwankilinakkode53:hBJVohhwV2ovqVOC@cluster0.r0g00uq.mongodb.net/notesapp?retryWrites=true&w=majority&appName=Cluster0').then(
    console.log('connected to mongodb')
).then(
    app.listen(3000,()=>{
        console.log('server started');
    })
)

app.use(express.json())
app.use('/users',userRouter)
app.use('/customers', customerRouter)
app.use('/cases', caseRouter)