const Cart = require('../model/Cart')
const jwt = require('jsonwebtoken')

// Get all products 
const getProducts = async (req,res) =>{
    const { authorization } = req.headers
    const token = authorization.split(' ')[1]
    const { _id } = jwt.verify(token, process.env.SECRET)
    const cart = await Cart.findOne({user_id:_id})
    if(cart)
    {
        res.status(200).json(cart)
    }
    else 
    {
        res.status(200).json({mssg:"No orders"})
    }
}

 
// add a new product
const addProduct = async (req,res) => {
    
    const id = req.params.id;

    // add doc to db
    try{
        if(req.user)
        {
            const cart = await Cart.findOne({user_id:req.user._id})
            if(cart)
            {
                cart.orderlist.push({product_id:id})
                await cart.save()
                res.json(cart)
            }
            else
            {
                const order = new Cart({user_id:req.user._id , orderlist: [{product_id:id}]})
                order.save()
                res.json(order)
            }
        }
        else
        {
            res.json({err:"User not correct"})
        }
    }catch(err){
        res.status(400).json({error:err.message})
    }
}


// remove a product 
const removeProduct = async (req,res) => {
    
    const id = req.params.id;

    // add doc to db
    try{
        if(req.user)
        {
            const cart = await Cart.findOne({user_id:req.user._id})
            if(cart)
            {
                console.log(cart)
                cart.orderlist.splice(id,1);
                cart.save()
                res.json(cart)
            }
            else
            {S
                res.json({Mssg:"Cart doesn't exist"})
            }
        }
        else
        {
            res.json({err:"User not correct"})
        }
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = {
    addProduct,
    removeProduct,
    getProducts
}   