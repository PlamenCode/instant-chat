import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export default function PrivateRoute({ children }) {
    const { currentUser } = UserAuth();


    return !currentUser ? <Navigate to='/' replace={true} /> : children
}
