const Profile = () =>{
    return (
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                <h4 style={{textShadow:"none"}} >Profile</h4>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{fontSize:"60%"}}></button>
            </div>
            <div className="offcanvas-body" >
                <span style={{textShadow:"none" ,fontSize:"70%", justifyContent:"center"}}><strong>Name:</strong>Raghav doda</span>
                <br />
                <span style={{textShadow:"none",fontSize:"70%",justifyContent:"center"}}><strong>Phone Number:</strong>+91-7527902363</span>
                <br />
                <span style={{textShadow:"none",fontSize:"70%",justifyContent:"center"}}><strong>email:</strong>raghav@gmail.com</span>
                <br />
                <a href="/" style={{textShadow:"none",fontSize:"70%",justifyContent:"center"}}><strong>Login</strong></a>
                <br />
                <a href="/" style={{textShadow:"none",fontSize:"70%",justifyContent:"center"}}><strong>Logout</strong></a>
            </div>
        </div>
    )
}

export default Profile