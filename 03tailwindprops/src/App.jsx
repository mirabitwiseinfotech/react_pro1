import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  //const [count, setCount] = useState(0)
  let myobj = {name:'mira', age: 20}
  let myarr = [1,2,3,4,5]

  return (
    <>
     <h1 className='bg-blue-500 text-white p-4  rounded-xl'> tailwind test </h1>
       
     <Card username="tech" btntext="click me" someobj={myobj} somearr={myarr}/>
     <Card username="coding" btntext="Read more"/>
    
    
    
    </>
  )
}

export default App
