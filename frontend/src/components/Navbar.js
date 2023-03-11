import {CgProfile} from "react-icons/cg";
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"
import Profile from "./Profile";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/js/dist/offcanvas'
import { Link } from "react-router-dom";

const  Navbar = () =>{
    return(
        <header>
            <div className="container">
            <div className="containertitle">
                <a href="/" style={{color: "white"}}><span id="profile"><a href="/"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" className="icon" style={{fontSize:"180%" , color:"#fff"}}><CgProfile/></a></span>  SAI Electronics</a>
                <Profile/>
            </div>
            <div className="search">
                <input  className="searchbar" placeholder="Search here...."/>
                <button className="searchicon">
                    <AiOutlineSearch />
                </button>
            </div>
                <nav>
                        <div className="navend" style={{fontSize:"115%"}}>
                            <Link to={'/companies'} style={{color: "white"}}>Companies</Link>
                            <Link to={'/services'} style={{color: "white"}}>Services</Link>
                            <Link to={'/cart'} style={{color: "white", fontSize:"120%"}}><AiOutlineShoppingCart/></Link>
                        </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
