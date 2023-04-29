const User = require('../models/user.model');

const jwt = require('jsonwebtoken')


const createToken = (id) => {
    return jwt.sign({id },process.env.SECRET, {expiresIn:'3d'} );
}

const signupUser = async (req, res) => {
    const {firstName,lastName,social,email , password } = req.body

    try {
        const user = await User.signup(firstName,lastName,social,email,password)
        
        // create token here
        const token = createToken(user._id)


        res.status(200).json({firstName,lastName,social,email,token})
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}
const loginUser = async (req, res) => {

    const {email, password} = req.body
    try {
        
        const user = await User.login(email,password)
        
        // create token here
        const token =createToken(user._id)


        res.status(200).json({email,token})
    } catch (error) {
        res.status(400).json({error : error.message})
    }


}


module.exports = {
    signupUser,
    loginUser
}