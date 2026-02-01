import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headerr from './Headerr'
import Display1 from './Display1'
import Body2 from './Body2'
import Body3 from './Body3'
import Body4 from './Body4'
import Body5 from './Body5'
import Body6 from './Body6'
import Footer from './Footer'
import LiveUps from './LiveUps'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Headerr />
     <Display1  />
     <LiveUps />
     <Body3 />
     <Body5 />
     <Body2 />
     <Body4 />
     
     <Body6 />
     
     <Footer />
     
    </>
  )
}

export default App
