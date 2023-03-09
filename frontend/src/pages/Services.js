import Navbar from "../components/Navbar";

const Services = () =>{
        return (
        <>
          <Navbar/>
          <div style={{display:"flex" , flexDirection:"row"}}>
          <div className="services" style={{margin:"2% 0% 2% 7%" , width:"60%"}}>
            <form className="row row-cols-lg-auto g-3 align-items-center col-12" style={{width:"100%"}}>
            
              <h4>Company</h4>
              <div className="col-12" style={{width:"100%"}}>
                <label className="visually-hidden" for="inlineFormSelectPref">Preference</label>
                <select className="form-select" id="inlineFormSelectPref">
                  <option selected>Choose...</option>
                  <option value="1">Samsung</option>
                  <option value="2">Lenovo</option>
                  <option value="3">Lloyd</option>
                  <option value="3">Heir</option>
                </select>
              </div>

              <h4>Products</h4>
              <div className="col-12" style={{width:"100%"}}>
                <label className="visually-hidden" for="inlineFormSelectPref">Preference</label>
                <select className="form-select" id="inlineFormSelectPref">
                  <option selected>Choose...</option>
                  <option value="1">AC</option>
                  <option value="2">Refrigerator</option>
                  <option value="3">Microwave/Oven</option>
                  <option value="3">Mobile phones</option>
                  <option value="3">Headphones</option>
                </select>
              </div>

              <div className="col-12" style={{width:"100%"}}>
                <h4>Phone number</h4>
                <label className="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
                <div className="input-group">
                  <div className="input-group-text">+91</div>
                  <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="phone number..."/>
                </div>
              </div>

              <div className="col-12" style={{width:"100%"}}>
                <h4>Address</h4>
                <textarea name=""  style={{width:"100%"}}></textarea>
              </div>

              <div className="col-12" style={{width:"100%"}}>
                <h4>Description</h4>
                <textarea name=""  style={{width:"100%"}}></textarea>
              </div>
              
              <div className="col-12" style={{width:"100%" , justifyContent:"center" , marginLeft:"40%"}}>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>  

            </form>
            </div>
            <div style={{marginRight:"7%" ,display:"flex", maxWidth:"30%" }}>
            <div className="col-12">

              <div className="col-12 serviceHistory">
                <h4>Refrigerator</h4>
                <p><strong>Company: </strong>Samsung</p>
                <p><strong>Description: </strong>hjvcjkdcdsmcjdshucnehucnesndwnchendndsdqwhnewhudnevwqjm1jcnehyvnyelnvyejhvbeglbnvkgtbktgysbchjsvcklscbnchjsbcjkw</p>
                {/* <p>{formatDistanceToNow(new Date(workout.createdAt),{ addSuffix:true})}</p> */}
                <p><strong>Date: </strong>9/3/23</p>
              </div>

              <div className="col-12 serviceHistory">
                <h4>Refrigerator</h4>
                <p><strong>Company: </strong>Samsung</p>
                <p style={{wordBreak:"break-all", whiteSpace: "normal"}}><strong>Description: </strong>hjvcjksbchjsvcklsfbdfvdfvdsvfvkvfvdfvdvdfvrvfvvfvervkvkkvkdvkvkkkvkvkrfkvkskvksfewerwefcbnchjsbcjkw</p>
                {/* <p>{formatDistanceToNow(new Date(workout.createdAt),{ addSuffix:true})}</p> */}
                <p><strong>Date: </strong>9/3/23</p>
              </div>

              <div className="col-12 serviceHistory">
                <h4>Refrigerator</h4>
                <p><strong>Company: </strong>Samsung</p>
                <p><strong>Description: </strong>hjvcjksbchjsvcklscbnchjsbcjkw</p>
                {/* <p>{formatDistanceToNow(new Date(workout.createdAt),{ addSuffix:true})}</p> */}
                <p><strong>Date: </strong>9/3/23</p>
              </div>

              <div className="col-12 serviceHistory">
                <h4>Refrigerator</h4>
                <p><strong>Company: </strong>Samsung</p>
                <p><strong>Description: </strong>hjvcjksbchjsvcklscbnchjsbcjkw</p>
                {/* <p>{formatDistanceToNow(new Date(workout.createdAt),{ addSuffix:true})}</p> */}
                <p><strong>Date: </strong>9/3/23</p>
              </div>

              <div className="col-12 serviceHistory">
                <h4>Refrigerator</h4>
                <p><strong>Company: </strong>Samsung</p>
                <p><strong>Description: </strong>hjvcjksbchjsvcklscbnchjsbcjkw</p>
                {/* <p>{formatDistanceToNow(new Date(workout.createdAt),{ addSuffix:true})}</p> */}
                <p><strong>Date: </strong>9/3/23</p>
              </div>

              <div className="col-12 serviceHistory">
                <h4>Refrigerator</h4>
                <p><strong>Company: </strong>Samsung</p>
                <p><strong>Description: </strong>hjvcjksbchjsvcklscbnchjsbcjkw</p>
                {/* <p>{formatDistanceToNow(new Date(workout.createdAt),{ addSuffix:true})}</p> */}
                <p><strong>Date: </strong>9/3/23</p>
              </div>

              <div className="col-12 serviceHistory">
                <h4>Refrigerator</h4>
                <p><strong>Company: </strong>Samsung</p>
                <p><strong>Description: </strong>hjvcjksbchjsvcklscbnchjsbcjkw</p>
                {/* <p>{formatDistanceToNow(new Date(workout.createdAt),{ addSuffix:true})}</p> */}
                <p><strong>Date: </strong>9/3/23</p>
              </div>
            
            </div>
            
          </div>
          </div>
          
        </>
    )
}

export default Services;


