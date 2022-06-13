import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = (props) => {
    const [token, setToken] = useState(window.localStorage.getItem('token'))
    const [isAuthenticated, setIsAuthenticated] = useState(!!token)
    const [user, setUser] = useState({})
    
    const login = (response) => {
        setToken(response.token)
        setUser(response.data)
        window.localStorage.setItem('token', response.token)
        setIsAuthenticated(true)
    }
    const logout = () => {
        setToken(null)
        window.localStorage.removeItem('token')
        setIsAuthenticated(false)
    }
    return <AuthContext.Provider value={{
        isAuthenticated,
        token,
        login,
        logout,
        user
    }}>
        {props.children}
    </AuthContext.Provider>
}
