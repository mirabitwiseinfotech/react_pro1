
import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import UserContext from '../context/Usercontext'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { registeredUsers, setUser } = useContext(UserContext)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        // Check empty fields
        if (!email.trim() || !password) {
            alert('Please enter your email and password!')
            return
        }

        // Check registered users
        if (registeredUsers.length === 0) {
            alert('Please create an account first!')
            navigate('/signup')
            return
        }

        // Find matching user
        const matchedUser = registeredUsers.find(
            (registeredUser) =>
                registeredUser.email === email.trim().toLowerCase() &&
                registeredUser.password === password
        )

        // Invalid credentials
        if (!matchedUser) {
            alert('Invalid email or password!')
            return
        }

        // Set logged-in user
        setUser({
            firstName: matchedUser.firstName,
            lastName: matchedUser.lastName,
            email: matchedUser.email,
            mobile: matchedUser.mobile
        })

        alert('Login successful!')

        navigate('/home')
    }

    const inputClass =
        "w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition duration-200 placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"

    const labelClass =
        "mb-2 block text-sm font-semibold text-gray-700"

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 px-4 py-10">

            <div className="w-full max-w-md rounded-3xl border border-white bg-white/90 p-7 shadow-2xl shadow-indigo-200/50 backdrop-blur sm:p-10">

                <div className="mb-8 text-center">

                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-3xl text-white shadow-lg shadow-indigo-200">
                        👋
                    </div>

                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-800">
                        Welcome Back!
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Login using your registered email
                    </p>

                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    <div>
                        <label className={labelClass}>
                            Email Address
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            autoComplete="email"
                            required
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label className={labelClass}>
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            autoComplete="current-password"
                            required
                            className={inputClass}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-indigo-600 py-3.5 font-bold text-white shadow-lg shadow-indigo-200 transition duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl active:translate-y-0"
                    >
                        Sign In →
                    </button>

                </form>

                <div className="my-7 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gray-200"></div>

                    <span className="text-xs text-gray-400">
                        OR
                    </span>

                    <div className="h-px flex-1 bg-gray-200"></div>
                </div>

                <p className="text-center text-sm text-gray-600">
                    Don't have an account?{' '}

                    <Link
                        to="/signup"
                        className="font-bold text-indigo-600 transition hover:text-indigo-800 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default Login
