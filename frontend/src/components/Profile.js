const Profile = () =>{
    return (
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                <h4 style={{textShadow:"none",fontFamily:"sans-serif"}} >Profile</h4>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{fontSize:"60%"}}></button>
            </div>
            <div className="offcanvas-body" >
                <span style={{textShadow:"none" ,fontSize:"70%", justifyContent:"center",fontFamily:"monospace"}}><strong>Name:</strong>Raghav doda</span>
                <hr />
                <span style={{textShadow:"none",fontSize:"70%",justifyContent:"center",fontFamily:"monospace"}}><strong>Phone Number:</strong>+91-7527902363</span>
                <hr />
                <span style={{textShadow:"none",fontSize:"70%",justifyContent:"center",fontFamily:"monospace"}}><strong>email:</strong>raghav@gmail.com</span>
                <hr />
                <a class="btn btn-dark" href="/" role="button">Login</a>
                <hr />
                <a class="btn btn-dark" href="/" role="button">Logout</a>
            </div>
        </div>
    )
}

export default Profile