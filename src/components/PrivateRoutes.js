import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '../pages/Contaxt/AuthContaxt'

export default function PrivateRoute({ Component }) {
    const { isAuth } = useAuthContext()

    if (!isAuth){
        return <Navigate to="/"  />
    }

    return (
        <Component />
    )
}
