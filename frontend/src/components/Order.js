import micro from '../Images/micro.jpg' 
import {RiDeleteBin5Line} from "react-icons/ri";

const Order = ({props}) =>{
    return (
        <>
                <div class="row" style={{height:"60%"}}>
                    <div class="col-4" style={{height:"60%"}}>
                    <input type="checkbox" style={{marginRight:"10%", default:"checked"}}/>
                    <img src={micro} alt="" style={{height:"60%",width:"60%",marginBottom:"0"}}/>
                    </div>
                    <div class="col-8">
                        <div style={{display:"flex"}}>
                            <h3>{props.product}</h3>
                            <div style={{justifyContent:"flex-end" , display:"flex", width:"70%"}}>
                            <h3 style={{marginLeft:"0%"}}>${props.price}</h3>
                            </div>
                        </div>
                        <h6 style={{color:"green"}}>In stock</h6>
                        <input type="text" placeholder='Quantity' style={{outline:"none"}}/>
                        <button style={{backgroundColor:"#fff" , border:"none"}}><RiDeleteBin5Line/></button>
                    </div>
                </div>  
        </>
    )
}

export default Order