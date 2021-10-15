import express from 'express'
import { addUser, authUser, getUserProfile } from '../controllers/userController.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', addUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)

export default router