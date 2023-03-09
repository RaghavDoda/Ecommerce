import Navbar from '../components/Navbar'
import Order from '../components/Order'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Cart = () => {
    return (
        <>
            <Navbar/>
            <div className="cart" style={{margin:"2% 7% 2% 7%"}}>
                <h1>Shoping Cart</h1>
                <div style={{display:"flex"}}>
                    <a href="/cart">Diselect all items</a>
                    <div style={{justifyContent:"flex-end" , display:"flex", width:"85%"}}>
                    <span style={{marginLeft:"2%"}}>Price</span>
                    </div>
                </div>
                <hr className="solid" />
                <Order props = {{product:"Refrigeraator", company:"Samsung", description:"Hello", price:"50"}}/>
                <hr className="solid" />
                <Order props = {{product:"Refrigeraator", company:"Samsung", description:"Hello", price:"30"}}/>
                <hr className="solid" />
                <div >
                    <span style={{justifyContent:"flex-end", display:"flex", marginRight:"5%", fontSize:"140%"}}>{`Subtotal(2 items): $80`}</span>
                </div>
            </div>
        </>
    )
}

export default Cart;