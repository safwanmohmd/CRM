import customerModel from "../model/customerModel.js"


export const getAllCustomers = async (req,res) =>{
 const customers = await customerModel.find({})
 if(customers.length == 0){
    return res.json({error: "no customers found"})
 }
 res.json(customers)
 
}

export const createCustomer = async (req, res)=>{
    const {name,contactInfo,status} = req.body
    if(!name || !contactInfo || !status){
        return res.json({error: "fill all the fields"})
    }

    const newcustomer = await customerModel.create({name, contactInfo, status})
    res.status(201).json({message: "customer created", newcustomer})
}