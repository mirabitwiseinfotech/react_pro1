import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import './App.css'

import AuthServices from './appwrite/auth'
import { login, logout } from './store/authSlice'

import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        AuthServices.getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }))
                } else {
                    dispatch(logout())
                }
            })
            .catch((error) => {
                console.log('Authentication check error:', error)
                dispatch(logout())
            })
            .finally(() => {
                setLoading(false)
            })
    }, [dispatch])

    return !loading ? (
        <div className="min-h-screen flex flex-wrap content-between ">
            <div className="w-full block">
                <Header />

                <main>
                    <Outlet />
                </main>

                <Footer />
            </div>
        </div>
    ) : null
}

export default App