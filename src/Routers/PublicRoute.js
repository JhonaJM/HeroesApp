import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext'

export const PublicRoute = ({children}) => {
    
    const {user} = useContext(AuthContext);

    return user.logged 
            ? <Navigate to ="/marvel"/>
            : children;
}