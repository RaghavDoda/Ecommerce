import Filters from '../components/filters';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Filtered = () => {
  return (
    <>
        <Navbar/>
        <div className="row">
                <div className="col-2 " style={{borderRight:"ridge",padding:"0.5%",top:"50"}}>
                    <Filters/>
                </div>
                <div className='col-9 m-2'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>

            </div>
    </>
  )
}

export default Filtered