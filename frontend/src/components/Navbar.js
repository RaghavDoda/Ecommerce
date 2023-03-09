import {CgProfile} from "react-icons/cg";
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"
const  Navbar = () =>{

    return(
        <header>
            <div className="container">
            <div className="containertitle">
            <a href="/" style={{color: "white"}}><span id="profile"><a href="/" className="icon"><CgProfile/></a></span>  SAI Electronics</a>
            </div>
            <div className="search">
                <input  className="searchbar" placeholder="Search here...."/>
                <button className="searchicon">
                    <AiOutlineSearch />
                </button>
            </div>
                <nav>
                        <div className="navend" style={{fontSize:"115%"}}>
                            <a href="/companies" style={{color: "white"}}>Companies</a>
                            <a href="/services" style={{color: "white"}}>Services</a>
                            <a href="/" style={{color: "white", fontSize:"120%"}}><AiOutlineShoppingCart/></a>
                        </div>
                    
                </nav>
            </div>
        </header>
    )
}

export default Navbar
