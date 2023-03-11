const User = require('../model/user')
const {createToken} = require('../middleware/createToken')

//login user
const loginUser = async (req,res) =>{
    try{
        const user = await User.login(req.body)

        //create a token
        const token = createToken (user._id)

        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//signup user
const signupUser = async (req,res) =>{
    console.log(req.body)
    try{
        const user = await User.signup(req.body)

        //create a token
        const token = createToken (user._id)

        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {loginUser,signupUser}