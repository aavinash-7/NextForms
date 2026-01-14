import bg from './assets/onimg.png';  
function Display1(){
return(

    <div className='body' id='home'
     
    style={{color:"black",
    padding:"8rem 0rem 0rem 0rem",
    display:"flex",
    
    justifyContent:"space-between"}}>
      
      <div  className='blue' style={{}}> 
        <div style={{}}>
        <h1 className='h1'>Stop the Queue. Start the Career.</h1>
        <h3 className='h3'>Error-Free Govt & College Applications from Home</h3>
      <p className='para'
    style={{
    lineHeight:"1.5",
    marginTop:"1rem",
    maxWidth:"600px",
    }}>
      The professional, remote alternative to local internet centers. Secure, fast, and 100% verified</p>
    <button className='but' style={{ }}>  
            <a href="https://wa.me/919502147922?text=Hello%20I%20want%20to%20start%20my%20application"
   target="_blank"
   class="cta-btn">
    👉 Start on
    <i class="fa-brands fa-whatsapp"></i> 
</a>
</button>

      </div>

             <div >
               { <img src={bg} alt="" /> }
                  </div>

    </div>

    
    </div>
);
}

export default Display1;