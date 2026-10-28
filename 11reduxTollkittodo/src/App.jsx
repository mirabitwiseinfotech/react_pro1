

import Todos from './components/Todos'

import AddTodo from './components/AddTodo'
import './App.css'

function App() {
  

  return (
    <><div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-lg p-2">
      <h1> learn about redux </h1>
      <AddTodo />
      <Todos />
      </div>
    </div>
    </>
  )
}

export default App
