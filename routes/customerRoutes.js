import express from 'express'
import { createCustomer, getAllCustomers } from '../controllers/customerController.js'

const router = express.Router()

router.get('/',getAllCustomers)
router.post('/create' , createCustomer)

export default router