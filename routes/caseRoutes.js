import express from 'express'
import {  checkAdmin, checkStaff, isLogged } from '../middlewares/auth.js'
import { createCase, editCase, getAllCases } from '../controllers/caseController.js'
const caseRouter = express.Router()

caseRouter.post('/create',isLogged, checkStaff, createCase)
caseRouter.get('/',isLogged, checkStaff, getAllCases)
caseRouter.patch('/edit/:id',isLogged, checkStaff, editCase)
export default caseRouter