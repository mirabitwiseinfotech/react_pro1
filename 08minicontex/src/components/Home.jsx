
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/Usercontext'

function Home() {
    const { user, setUser } = useContext(UserContext)

    const navigate = useNavigate()

    // Protect dashboard
    useEffect(() => {
        if (!user) {
            navigate('/login', { replace: true })
        }
    }, [user, navigate])

    // Logout functionality
    const handleLogout = () => {
        setUser(null)

        alert('Logout successful!')

        navigate('/login', { replace: true })
    }

    if (!user) return null

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 px-4 py-10">

            <div className="mx-auto max-w-4xl">

                {/* Header */}
                <div className="mb-8 flex flex-col justify-between gap-5 rounded-3xl bg-white p-6 shadow-xl sm:flex-row sm:items-center">

                    <div>
                        <h1 className="text-3xl font-extrabold text-indigo-700">
                            My Dashboard
                        </h1>

                        <p className="mt-2 text-sm text-gray-500">
                            Welcome to your personal dashboard!
                        </p>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="rounded-xl bg-red-500 px-6 py-3 font-bold text-white shadow-lg shadow-red-100 transition hover:-translate-y-0.5 hover:bg-red-600 active:translate-y-0"
                    >
                        Logout →
                    </button>

                </div>

                {/* Profile Card */}
                <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">

                    {/* Profile Header */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-10 text-center">

                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-white text-4xl font-extrabold text-indigo-600 shadow-xl">
                            {user.firstName.charAt(0).toUpperCase()}
                        </div>

                        <h2 className="mt-5 text-3xl font-bold text-white">
                            Hello, {user.firstName} {user.lastName}!
                        </h2>

                        <p className="mt-2 text-indigo-100">
                            You have successfully logged in.
                        </p>

                        <span className="mt-4 inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
                            ✓ Active User
                        </span>

                    </div>

                    {/* User Information */}
                    <div className="p-6 sm:p-10">

                        <h3 className="mb-6 text-xl font-bold text-gray-800">
                            Personal Information
                        </h3>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
                                <p className="text-sm font-medium text-gray-500">
                                    First Name
                                </p>

                                <p className="mt-2 break-words text-lg font-bold text-gray-800">
                                    {user.firstName}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-purple-100 bg-purple-50 p-5">
                                <p className="text-sm font-medium text-gray-500">
                                    Last Name
                                </p>

                                <p className="mt-2 break-words text-lg font-bold text-gray-800">
                                    {user.lastName}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-pink-100 bg-pink-50 p-5">
                                <p className="text-sm font-medium text-gray-500">
                                    Email Address
                                </p>

                                <p className="mt-2 break-all text-lg font-bold text-gray-800">
                                    {user.email}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                                <p className="text-sm font-medium text-gray-500">
                                    Mobile Number
                                </p>

                                <p className="mt-2 break-words text-lg font-bold text-gray-800">
                                    {user.mobile}
                                </p>
                            </div>

                        </div>

                        <div className="mt-8 rounded-2xl bg-green-50 p-5 text-center">
                            <p className="font-semibold text-green-700">
                                ✓ Your account is successfully logged in!
                            </p>
                        </div>

                    </div>
                </div>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Thank you for visiting. Have a great day!
                </p>

            </div>
        </div>
    )
}

export default Home
