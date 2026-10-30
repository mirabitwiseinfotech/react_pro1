
import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import UserContext from '../context/Usercontext'

function Signup() {
    const navigate = useNavigate()

    const { registeredUsers, setRegisteredUsers } =
        useContext(UserContext)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const {
            firstName,
            lastName,
            mobile,
            email,
            password,
            confirmPassword
        } = formData

        // Check all fields
        if (Object.values(formData).some(value => !value.trim())) {
            alert('Please fill in all fields!')
            return
        }

        // Validate mobile
        if (!/^\d{10}$/.test(mobile)) {
            alert('Mobile number must contain exactly 10 digits!')
            return
        }

        // Validate email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address!')
            return
        }

        // Validate password
        if (!/^(?=.*\d).{8,}$/.test(password)) {
            alert('Password must be at least 8 characters long and contain a number!')
            return
        }

        // Confirm password
        if (password !== confirmPassword) {
            alert('Password and confirm password do not match!')
            return
        }

        const normalizedEmail = email.trim().toLowerCase()

        // Check duplicate email
        const emailExists = registeredUsers.some(
            (registeredUser) =>
                registeredUser.email === normalizedEmail
        )

        if (emailExists) {
            alert('This email is already registered! Please login.')
            navigate('/login')
            return
        }

        // Register new user
        const newUser = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            mobile,
            email: normalizedEmail,
            password
        }

        setRegisteredUsers((prev) => [
            ...prev,
            newUser
        ])

        alert('Signup successful! Please login.')

        navigate('/login')
    }

    const inputClass =
        "w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition duration-200 placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"

    const labelClass =
        "mb-2 block text-sm font-semibold text-gray-700"

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 px-4 py-10">

            <div className="w-full max-w-xl rounded-3xl border border-white bg-white/90 p-6 shadow-2xl shadow-indigo-200/50 backdrop-blur sm:p-10">

                <div className="mb-8 text-center">

                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-3xl text-white shadow-lg shadow-indigo-200">
                        ✨
                    </div>

                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl">
                        Create Account
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Enter your details to get started
                    </p>

                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                        <div>
                            <label className={labelClass}>
                                First Name
                            </label>

                            <input
                                name="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First name"
                                autoComplete="given-name"
                                required
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label className={labelClass}>
                                Last Name
                            </label>

                            <input
                                name="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last name"
                                autoComplete="family-name"
                                required
                                className={inputClass}
                            />
                        </div>

                    </div>

                    <div>
                        <label className={labelClass}>
                            Mobile Number
                        </label>

                        <input
                            name="mobile"
                            type="tel"
                            inputMode="numeric"
                            maxLength={10}
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Enter 10-digit mobile number"
                            autoComplete="tel-national"
                            required
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label className={labelClass}>
                            Email Address
                        </label>

                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
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
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Minimum 8 characters"
                            autoComplete="new-password"
                            minLength={8}
                            required
                            className={inputClass}
                        />

                        <p className="mt-2 text-xs text-gray-500">
                            At least 8 characters and 1 number.
                        </p>
                    </div>

                    <div>
                        <label className={labelClass}>
                            Confirm Password
                        </label>

                        <input
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Re-enter your password"
                            autoComplete="new-password"
                            required
                            className={inputClass}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-indigo-600 py-3.5 font-bold text-white shadow-lg shadow-indigo-200 transition duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl active:translate-y-0"
                    >
                        Create Account →
                    </button>

                </form>

                <p className="mt-7 text-center text-sm text-gray-600">
                    Already have an account?{' '}

                    <Link
                        to="/login"
                        className="font-bold text-indigo-600 transition hover:text-indigo-800 hover:underline"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default Signup
