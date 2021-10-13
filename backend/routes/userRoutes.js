import express from 'express'
import { authUser } from '../controllers/userController.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.send("Users")
})
router.post('/login', authUser)

export default router