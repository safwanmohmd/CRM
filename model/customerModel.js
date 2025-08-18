import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    contactInfo: {
        type: String
    },
    status:{
        type:String,
        enum:['active', 'inactive'],
        default:'active'
    },
    
})

const customerModel = mongoose.model('customers',customerSchema)

export default customerModel