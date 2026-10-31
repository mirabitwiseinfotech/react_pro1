import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(0)

  return (
    <>
     <div>
      <h1>Welcome  mira</h1>
      <button
      onClick={()=>setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>
      <div>
        <h3>&& operator</h3>
        {!!isLoggedIn && <p>welcome  Mira</p>}
      </div>
      <div>
        <h3>Ternary operator</h3>
        {isLoggedIn ? <p>welcome  Mira</p>:"please login "}
      </div>
     </div>
    </>
  )
}

export default App
