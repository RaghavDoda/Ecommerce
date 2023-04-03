// components
import Navbar from '../components/Navbar';
import Order from '../components/Order';

// Bootstrap
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

//context 
import {useGlobalContext} from '../context/appContext';

const Cart =  () => {
  const {isLoading,products} = useGlobalContext();
  console.log(products)
  
  if(isLoading){ 
    return (
      <>
        <Navbar/>
        <>
          <div style={{marginRight:"7%",marginLeft:"7%" , marginTop:"5%"}}>
            <h3>Shoping Cart</h3>
            <a href="/">deselect all items</a>
          </div>
          <div style={{marginRight:"7%",marginLeft:"7%" , marginTop:"2%"}}>
            <hr className="solid" />  
            <h1>Loading....</h1>
          </div>
        </>
      </>
    )
  }
  else if(products.length===0) {
    return (
      <>
        <Navbar/>
        <>
          <div style={{marginRight:"7%",marginLeft:"7%" , marginTop:"5%"}}>
            <h3>Shoping Cart</h3>
            <a href="/">deselect all items</a>
          </div>
          <div style={{marginRight:"7%",marginLeft:"7%" , marginTop:"2%"}}>
            <hr className="solid" />  
            <h1>No orders...</h1>
          </div>
        </>
      </>
    )
  }
  return (
    <>
      <Navbar/>
        <>
          <div style={{marginRight:"7%",marginLeft:"7%" , marginTop:"5%"}}>
            <h3>Shoping Cart</h3>
            <a href="/">deselect all items</a>
          </div>
          <div style={{marginRight:"7%",marginLeft:"7%" , marginTop:"2%"}}>
            <hr className="solid" />  
            {products.map((product)=>(
              <>
                <Order props={product}/> 
                <hr className="solid" />
              </>
            ))}   
          </div>
        </>
    </>
  )
}

export default Cart