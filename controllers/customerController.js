import customerModel from "../model/customerModel.js"
import userModel from "../model/userModel.js";

export const getAllCustomers = async (req, res) => {
    const customers = await customerModel.find({})
    if (customers.length == 0) {
        return res.status(200).json({
            success: false,
            error: "No customers found"
        });
    }
    res.status(200).json({
        success: true,
        message: "Customers fetched successfully",
        data: customers
    });

}
export const createCustomer = async (req, res) => {
  const { name, contactInfo, status } = req.body;

  // Validation
  if (!name || !contactInfo || !status) {
    return res.status(400).json({
      success: false,
      message: "Fill all the fields"
    });
  }

  try {
    // Check if customer already exists
    const customerExist = await customerModel.findOne({ name });
    if (customerExist) {
      return res.status(409).json({
        success: false,
        message: "Customer already exists"
      });
    }

    // Create new customer
    const newCustomer = await customerModel.create({ name, contactInfo, status });

    return res.status(201).json({
      success: true,
      message: "Customer created successfully",
      data: newCustomer
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message
    });
  }
};



export const editCustomer = async (req, res) => {

    const { id } = req.params
    const findCustomer = await customerModel.findById(id)
    if (!req.body) {
        return res.status(400).json({
            success: false,
            message: "The body cannot be empty"
        });
    }

    if (!findCustomer) {
        return res.status(404).json({
            success: false,
            message: `No customer found with id ${id}`
        });

    }
    try {
        const updatedCase = await customerModel.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({
            success: true,
            message: "customer updated successfully",
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
export const deleteCustomer = async (req, res) => {

    const { id } = req.params
    const findCustomer = await customerModel.findById(id)
    

    if (!findCustomer) {
        return res.status(404).json({
            success: false,
            message: `No customer found with id ${id}`
        });

    }
    try {
        const updatedCase = await customerModel.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "customer deleted successfully",
            data: id
        });
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "something went wrong",
            error: error.message
        });
    }

}