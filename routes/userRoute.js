import express from 'express'
import { getUsers, loginUser, createUser } from '../controllers/userController.js'
import { checkAdmin, isLogged } from '../middlewares/auth.js'
const router = express.Router()

router.post('/create',isLogged,checkAdmin, createUser)
router.post('/login',loginUser)
router.get('/', getUsers)

export default router