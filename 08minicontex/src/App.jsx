
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContexProvider from './context/UserContextprovider'

function App() {
  

  return (
    <UserContexProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContexProvider>
  )
}

export default App