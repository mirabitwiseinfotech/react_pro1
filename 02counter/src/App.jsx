import { useState } from 'react'


function App() {
  const [counter, setCounter] = useState(10)




  //let counter = 5
  const addValue = () => {
    //if(counter < 20){
    //console.log('add value',Math.random())
    // [normal-bunch of state]setCounter(counter + 1)
    //---callback exception---//
       setCounter((prevCounter) => prevCounter + 1)
       setCounter((prevCounter) => prevCounter + 1)
       setCounter((prevCounter) => prevCounter + 1)
    //}
    
  }


  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
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
