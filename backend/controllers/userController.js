const User = require('../model/user')
const {createToken} = require('../middleware/createToken')

//login user
const loginUser = async (req,res) =>{
    const {email,password} = req.body
    try{
        const user = await User.login(email,password)

        //create a token
        const token = createToken (user._id)

        res.status(200).json({email,password,token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//signup user
const signupUser = async (req,res) =>{
    
    const {email,password} = req.body
    try{
        const user = await User.signup(email,password)

        //create a token
        const token = createToken (user._id)

        res.status(200).json({email,password,token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {loginUser,signupUser}