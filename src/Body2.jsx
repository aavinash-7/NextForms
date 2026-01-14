function Body2() {

    return <div id="about"
    style={{color:"black",
        margin:"8rem 0px 0px 0px",backgroundColor:"#F9F9F9",padding:"2rem"}}>
            
            <h5 style={{color:"#AF47C2",fontSize:"1.5rem",fontFamily:"Montserrat"}}>About</h5>
            <h2 style={{fontFamily:"Montserrat"}}>"Why Choose Us"</h2>

             <div className="wcu"
                      style={{display:"flex",
                      flexWrap:"wrap",
                      justifyContent:"center"}}>
                <div className="wc wc3" style={{ }}>
                   <h3 style={{borderBottom:"1px solid grey",color:"#0066FF"}}>
                    <i class="fa-solid fa-circle-check"></i>Zero-Error Gaurantee</h3> 
                   <p className="p" style={{color:"#677085"}}>Local shops just type; we verify. We cross-check your
                     data against official notification rules to ensure 0% 
                     rejection.</p>
                </div>


                 <div className="wc wc2" style={{}}>
                   <h3 style={{borderBottom:"1px solid grey",color:"#0066FF"}}>
                    <i class="fa-solid fa-lock"></i> Privacy First Policy</h3> 
                   <p className="p" style={{color:"#677085"}}>Your documents are your identity. We use encrypted transfers
                     and delete all personal files immediately after submission.</p>
                </div>



                 <div className="wc wc1" style={{}}>
                   <h3 style={{borderBottom:"1px solid grey",color:"#0066FF"}}>
                    <i class="fa-solid fa-person"></i> Digital Concierge</h3> 
                   <p className="p" style={{color:"#677085"}}>No more scanning or resizing photos yourself.
                     Send us raw images; we optimize them to portal specs for you.</p>
                </div>
             </div>

            <p className="p" style={{color:"#677085"}}>We are a student-support and online service assistance platform dedicated 
                to helping users apply for competitive exams, entrance tests, scholarships,
                 and various online government services. Our team guides you through every 
                 step of the application process — from document preparation to final submission.
                 We started this platform to make digital services accessible to everyone, especially 
                 students who may find online applications confusing or time-consuming. With our verified 
                 guidance and reliable support, you can apply confidently and without errors.</p>
            </div>;
}

export default Body2;