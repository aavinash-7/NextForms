import img1 from './assets/chat.png'; 
import img2 from './assets/verify.png'; 
import img3 from './assets/success.png'; 
function Body5() {
    return(
    
    <div className="picp" style={{}}>
    <h2 style={{color:"black",margin:"6rem auto"}}>How It Works</h2>
    
        <div className='hiw' style={{display:"flex",justifyContent:"center",alignItems:"center"}} >

            <div className="pic imh1" style={{}}>
                <img className='imgs' src={img1} alt="" />
                <div> <h4 className='con' style={{color:"black"}}>1. Connect</h4>
                <p className='pcon' style={{color:"black"}}>Send your details on Whatsapp</p></div>
               
            </div>

            <div className='line' ></div>

            <div className="pic imh2" style={{}}>
                <img className='imgs' src={img2} alt="" />
                <div><h4 className='con' style={{color:"black"}}>2. Verify</h4>
                <p className='pcon' style={{color:"black"}}>Review your draft for accuracy</p></div>
                
            </div>

            <div className='line'></div>

            <div className="pic imh3" style={{}}>
                <img className='imgs' src={img3} alt="" />
                <div> <h4 className='con' style={{color:"black"}}>3. Success</h4>
                <p className='pcon' style={{color:"black"}}>Get your official soft receipt</p></div>
                
            </div>
        </div>
    </div>);
}

export default Body5;