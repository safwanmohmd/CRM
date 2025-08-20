import express from 'express'
import { createCustomer, deleteCustomer, editCustomer, getAllCustomers } from '../controllers/customerController.js'
import { checkAdmin,checkStaff, isLogged } from '../middlewares/auth.js'
const router = express.Router()

router.get('/',isLogged, checkAdmin,getAllCustomers)
router.post('/create' ,isLogged, checkStaff, createCustomer)
router.patch('/edit/:id' ,isLogged, checkStaff, editCustomer)
router.delete('/delete/:id' ,isLogged, checkStaff, deleteCustomer)

export default router