import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './auth_context'

const ProtectedRoute = ({
    component: Component,
    ...props
}) => {
    const {authenticated} = useAuth();
    const location = useLocation();

    console.log('Location: ' + location)

    if(authenticated) {
        return <Navigate 
        to='/' 
        replace state = {{from: location}}
        />
    } else {
        return <Component {...props}/>
    }
}

export default ProtectedRoute