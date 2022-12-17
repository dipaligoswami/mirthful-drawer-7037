import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const isAuth = useSelector((state) => state.auth.isAuth)
    const location = useLocation()
    
    console.log(isAuth)

    if (isAuth) return children
    return <Navigate to="/login" state={{from: location}} replace/>
}

export default PrivateRoute