import caseModel from "../model/caseModel.js";
import customerModel from "../model/customerModel.js";
import userModel from "../model/userModel.js";
export const createCase = async (req, res) => {
    const { customer, assignedTo } = req.body

    if (!customer || !assignedTo) {
        return res.status(400).json({
            success: false,
            message: "Customer and assignedTo (user) cannot be empty"
        });
    }
    const customerExist = await customerModel.findById(customer)
    if (!customerExist) {
        return res.status(404).json({
            success: false,
            message: `No customer found with id ${customer}`
        });
    }
    const userExist = await userModel.findById(assignedTo)
    if (!userExist) {
        return res.status(404).json({
            success: false,
            message: `No user found with id ${assignedTo}`
        });
    }


    const newCase = await caseModel.create({ customer, assignedTo })
    res.status(201).json({
        success: true,
        message: "Case created successfully",
        data: newCase
    });
}

export const editCase = async (req, res) => {

    const { id } = req.params
    const findCase = await caseModel.findById(id)
    if (!req.body) {
        return res.status(400).json({
            success: false,
            message: "The body cannot be empty"
        });
    }

    if (!findCase) {
        return res.status(404).json({
            success: false,
            message: `No case found with id ${id}`
        });

    }
    try {
        const updatedCase = await caseModel.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({
            success: true,
            message: "Case updated successfully",
            data: updatedCase
        });
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "something went wrong",
            error: error.message
        });
    }

}


export const getAllCases = async (req, res) => {
    try {
        const cases = await caseModel.find({})
        res.status(200).json({
            success: true,
            message: "cases fetched successfully",
            data: cases
        });
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "something went wrong",
            error: error.message
        });
    }

}