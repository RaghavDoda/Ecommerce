const Cart = require('../model/Cart')
const jwt = require('jsonwebtoken')
const Product = require('../model/Product')

// Get all products  
const getProducts = async (req,res) =>{
    const { authorization } = req.headers
    const token = authorization.split(' ')[1]
    const { _id } = jwt.verify(token, process.env.SECRET)
    const cart = await Cart.findOne({user_id:_id})
    if(cart)
    {
        var ans = []
        console.log(cart.orderlist.length)
        var i=0;
        const product = await Product.findOne({_id:cart.orderlist[0].product_id})
        console.log(product);
        while( i<cart.orderlist.length)
        {
            const product = await Product.findOne({_id:cart.orderlist[0].product_id})
            ans.push(product);
            i++;
        }
        res.status(200).json(ans)
    }
    else 
    {
        res.status(200).json({mssg:"No orders"})
    }
}

 
// add a new product
const addProduct = async (req,res) => {
    
    const id = req.params.id;
    console.log(id)
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
                console.log(cart.orderlist.length)
                if(cart.orderlist.length === 1)
                {
                    Cart.deleteOne({user_id:req.user._id})
                    Cart.deleteOne({user_id:req.user._id}).then(
                        () => {
                            res.json({mssg:"cart deleted"})
                        }
                    )
                }
                else
                {
                    console.log(cart)
                    cart.orderlist.splice(id,1);
                    cart.save()
                    res.json(cart)
                }
            }
            else
            {
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