import mongoose from "mongoose";

const usrSchema = mongoose.Schema({
    username:{
       type: String,
       required:true,
       unique:true
    },
    password: {
       type: String,
       required:true
    },
    role:{
        type:String,
        enum:['admin', 'staff'],
        default:'admin'
    }


})

const userModel = mongoose.model('users', usrSchema)

export default userModel