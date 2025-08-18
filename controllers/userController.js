import userModel from '../model/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const createUser = async(req,res)=>{
    const {username,password} = req.body
    
    if(!username || !password){
        return res.json({message :'some fields are required'})
    }

    const userExist = await userModel.findOne({username})
    if(userExist){
        return res.json({message : 'username alredy exist'})
    }

const hashPass = await bcrypt.hash(password,10)
    const newUser = await userModel.create({username,password:hashPass})
   
    res.json({message:"created new user", newUser})
}

export const loginUser = async (req,res)=>{
    const {username , password} = req.body
    const user = await userModel.findOne({username})
    if(!user){
        return res.json({message : "You are not registered"})
    }

    const verifyed = await bcrypt.compare(password, user.password )
    if(!verifyed){
       return res.json({message : 'password not match'})
    }

    const token = jwt.sign({userId: user._id, role:user.role},'secret')
    res.json({message: "Logged Successfully", token})


}

export const getUsers = async (req,res)=>{
    const users = await userModel.find({})
    res.json(users)
}