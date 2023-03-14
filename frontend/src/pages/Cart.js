// import Filters from '../components/filters';
import Navbar from '../components/Navbar';
// import ProductCard from '../components/ProductCard';
import Order from '../components/Order';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react';

const Cart = () => {

  const [products,setProducts] = useState([])
  useEffect(() => {
    const fetchProducts= async () =>{
      const response = await fetch ('/cart/',
      {
        method:'GET',
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
        }
      })
      const json = await response.json()
      console.log("ah a reha hai")
      console.log(json)

      if(response.ok){
        setProducts(json)
      }
    }
    fetchProducts()
  }, [])
  return (
    <>
        <Navbar/>
                <div style={{marginRight:"7%",marginLeft:"7%" , marginTop:"5%"}}>
                  <h3>Shoping Cart</h3>
                  <a href="/">deselect all items</a>
                </div>
                <div style={{marginRight:"7%",marginLeft:"7%" , marginTop:"2%"}}>
                  <hr className="solid" />
                  {products.length===0 && <h1>No orders</h1>}
                  { products && products.map((product)=>(
                    <>
                   <Order props={product}/> 
                   <hr className="solid" />
                   </>
                  ))}   
                  
                </div>
    </>
  )
}

export default Cart