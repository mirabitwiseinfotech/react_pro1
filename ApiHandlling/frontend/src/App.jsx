import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [products,setProducts] = useState([])
  const [error,setError] =useState(false)
  const [loading,setloading] = useState(false )
  const [search,setSearch] = useState('')
  useEffect(() => {
    const controller = new AbortController()
    ;(async()=>{
      try {
        setloading(true)
        setError(false)
        const response = await axios.get('/api/products?search='+search,{
          signal:controller.signal
        })
        console.log(response.data);
        setProducts(response.data)
        setloading(false)
      } catch (error) {
        if(axios.isCancel(error)){
          log('Request canceled',error.message)
          return
        }
        setError(true)
        setloading(false)
      }
    })()
    //cleanup
    return()=>{
      controller.abort()
    }
  
  },[search])

  // if(error){
  //   return <h1>Something went Wrong</h1>
  // }

  // if(loading){
  //   return<h1>Loading.....</h1>
  // }
  return (
    <>
      <h1>mira Nena</h1>
      <input type='text' placeholder='search'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <h1>Loading...</h1>}
      {error && (<h1>Something went Wrong</h1>)}
      <h2>Number of Products are:{products.length}</h2>
    </>
  )
}

export default App

const  customReactQuery =()=>{
  
}


