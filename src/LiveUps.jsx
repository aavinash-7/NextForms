import { useState ,useEffect} from "react";
function LiveUps() {


   const [showPopup, setShowPopup] = useState(false);
   
  

  return (

    <div className="parentpop">
          <div className="live-ups">
             <h1 onMouseEnter={() => setShowPopup(true)}
                  onMouseLeave = {() => setShowPopup(false)}>
                    TELANGANA HIGH COURT & INDIA POST (POSTAL) JOB APPLICATIONS ARE LIVE NOW</h1>
              </div>

              {showPopup && (
                 <div className="popUp"> 
                     <p><b>Telangana High Court and India Post (Postal Department) have released
                    their latest recruitment notifications.</b> <br /> <br />
                    
                    📌 <b>Telangana High Court Recruitment: </b>
                    Applications are open for multiple posts such as
                    Copyist, Record Assistant, Junior Assistant,
                    Process Server, Office Subordinate, and other notified posts.  <br /> <br />
                    
                    📌 <b>India Post Recruitment (GDS): </b>
                    India Post has released the GDS Recruitment notification
                    for Gramin Dak Sevak (GDS), BPM, and ABPM posts
                    across various postal circles.   <br /> <br />
                    
                    
                    <b>Eligibility :</b> 10th/ Inter/ Degree ( as per post and official notification )   <br /> <br />
                    
                    ⚠️ Online applications are LIVE now and closing soon.</p>
         </div>
              ) }
             
    </div>
  );
}

export default LiveUps;