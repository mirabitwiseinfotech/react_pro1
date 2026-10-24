import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)




  //let counter = 5
  const addValue = () => {
    //console.log('add value',Math.random())
    setCounter(counter + 1)
    
  }


  const removeValue = () => {
    setCounter(counter - 1)

  }

  return (
    <>
      
      <h1>My App! welcome</h1>
      <h2> counter value: {counter}</h2>
      <button onClick={addValue}>Add value{counter}</button><br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
