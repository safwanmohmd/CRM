import caseModel from "../model/caseModel.js";

export const createCase = async (req,res)=>{
    const {customer, assignedTo} = req.body
    const newCase = await caseModel.create({customer,assignedTo})
    res.json(newCase)
}

export const editCase = async(req,res)=>{

    const {id} = req.params
    const findCase = await caseModel.findById(id)

    if (!findCase) {
        return res.json("'no case found'")
        
    }
    const updatedCase = await caseModel.findByIdAndUpdate(id,req.body,{new:true})
    res.json(updatedCase)
}


export const getAllCases = async (req,res)=>{

    const cases = await caseModel.find({})
    res.json(cases)
}