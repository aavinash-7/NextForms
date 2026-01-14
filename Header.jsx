
import { useState } from "react";
function Header() {

  const [open, setOpen] = useState(false);

  return (
    <header 
       style={{backgroundColor: "white",
                  height: "6rem",
                  width: "100%",
                  display: "flex",
                 
                  alignItems: "center",
                  fontSize:"10px",
                  position: "fixed",
                   left: 0,
                  top: 0,
                  color:"#333333",
                  fontFamily:"Montserrat",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  zIndex: 1000,}}>


                    <div className="nfds"> <h1> <span style={{color:"#0066FF",fontSize:"32px"}}>NextForms</span> digitalServices</h1></div>
     
          <div>
             <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>

           <nav className={`nav ${open ? "open" : ""}`}>


                 <ul className="ul">
             <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
             <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
             <li><a href="mailto:aajava20@gmail.com?subject=application%20support&body=hello%20i%20need%20help">mail Us</a></li>
             <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
</ul>

      </nav>

          </div>
         


    </header>
  );
}

export default Header;