import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc    Auth user
// @route   POST /api/users/login
// @access  PUBLIC

const authUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    // Have created a method of match passwords in User model so that we can access it
    if (user && (await user.matchPasswords(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }

})


// @desc    GET User Profile
// @route   GET /api/users/profile
// @access  PRIVATE

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(404)
        throw new Error("User not found")

    }

})

export {
    authUser,
    getUserProfile
}