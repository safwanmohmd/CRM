import express from 'express'
import { getUsers, loginUser, createUser } from '../controllers/userController.js'
import { checkAdmin, checkStaff, isLogged } from '../middlewares/auth.js'
const router = express.Router()

router.post('/create',isLogged,checkAdmin, createUser)
router.post('/login',loginUser)
router.get('/',isLogged,checkStaff, getUsers)

export default router