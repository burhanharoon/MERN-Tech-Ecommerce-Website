import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc    Auth user
// @route   GET /api/users/login
// @access  PUBLIC

const authUser = asyncHandler(async (req, res) => {
    // In order to use res.body data we would have to add 
    const { email, password } = req.body

    res.json({
        email: email,
        password: password
    })
    // const user = await User.findOne(email)

    // // Have created a method of match passwords in User model so that we can access it
    // if (user && (await user.matchPasswords(password))) {
    //     res.json({
    //         _id: user._id,
    //         name: user.name,
    //         email: user.email,
    //         isAdmin: user.isAdmin,
    //         token: generateToken(user._id)
    //     })
    // } else {
    //     res.status(401)
    //     throw new Error('Invalid email or password')
    // }

})

export {
    authUser
}