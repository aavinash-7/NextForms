function Footer(){
    return(
  
        <footer id="contact" style={{
           
            
            
            }}>
                <h2 className="ls" style={{}}> <b>Latest Success:</b> 31 Applications submitted today </h2>
                  <div className="sslp" style={{}}>

                    <h3 className="ssl"><i class="fa-solid fa-lock"></i>SSL Secure</h3>
                    <h3 className="ssl"><i class="fa-solid fa-user-shield"></i> Data Encrypted</h3>
                    <h3 className="ssl"><i class="fa-solid fa-circle-check"></i>100% Verified</h3>
                  </div>

                  <p className="nf" style={{color:"#213160",}}> <b>NexGen never stores your Aadhaar or OTP. We are a processing service, not a data company.</b> </p>
            <p className="ai" style={{color:"#213160"}}>© 2026 Nexgen Digital Services. All rights reserved.
Nexgen Digital Services provides online application assistance only.</p>


              {/* <div style={{color:"#213160",display:"flex",alignItems:"center",justifyContent:"center"}}> <h4>Follow us   </h4>
                   <a href="https://www.instagram.com/" target="_blank"><i style={{color:"#FF0069",margin:"5px",fontSize:"30px"}} className="fa-brands fa-square-instagram"></i></a>  
                    <a href="https://www.facebook.com/" target="_blank"><i style={{color:" #1877F2",margin:"5px",fontSize:"30px"}} className="fa-brands fa-square-facebook"></i></a>  
                     <a href="https://twitter.com/" target="_blank"><i style={{color:"#1DA1F2",margin:"5px",fontSize:"30px"}} className="fa-brands fa-square-twitter"></i> </a> 
                     <a href="https://wa.me/9502147922?text=hello%20start%20my%20application%20" target="_blank"><i style={{color:"#075E54",margin:"5px",fontSize:"30px"}} className="fa-brands fa-square-whatsapp"></i> </a> 

                       
                </div> */}



               <p className="num" style={{ color: "" }}>
                 <a
                   href="tel:+919493398932"
                   className="hover"
                   style={{ textDecoration: "none", marginRight: "10px" }}
                 >
                   +91 94933 98932
                 </a>
                 
                </p>

                <p className="disclaimer"> <b>Disclaimer: </b>
Nexgen Digital Services provides online assistance for form filling,
document upload, application submission, and tracking services only.

We are not a government office, agent, or authority.
We do not issue certificates, approvals, or guarantees.

Final approval,verification, and processing depend entirely on the
respective government department or institution.

We do not provide biometric services, physical verification,
police verification, or in-person services.</p>
        </footer>

    );
}

export default Footer;