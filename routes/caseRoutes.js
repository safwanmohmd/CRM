import express from 'express'
import {  checkAdmin, checkStaff, isLogged } from '../middlewares/auth.js'
import { createCase, editCase, getAllCases } from '../controllers/caseController.js'
const caseRouter = express.Router()

caseRouter.post('/create',isLogged, checkStaff, createCase)
caseRouter.get('/', getAllCases)
caseRouter.patch('/edit/:id',checkStaff, editCase)
export default caseRouter