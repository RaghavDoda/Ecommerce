import Filters from '../components/filters';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react';

const Cart = () => {

  const [products,setProducts] = useState(null)
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
        <div className="row">
                <div className="col-2 " style={{borderRight:"ridge",padding:"0.5%",top:"50"}}>
                    <Filters/>
                </div>
                <div className='col-9 m-2'>
                  {products && products.map((product)=>(
                   <ProductCard props={{title:product.title,price:product.price,details:product.details}}/> 
                    ))}  
                </div>

            </div>
    </>
  )
}

export default Cart