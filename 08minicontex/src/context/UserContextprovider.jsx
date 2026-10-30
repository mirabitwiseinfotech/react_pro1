import { useState } from 'react'
import UserContext from './Usercontext'

function UserContextProvider({ children }) {
    const [registeredUsers, setRegisteredUsers] = useState([])
    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider
            value={{
                registeredUsers,
                setRegisteredUsers,
                user,
                setUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider