import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const { currentUser, signInWithGoogle } = UserAuth();
    
    async function handleLogin(){
        try {
            await signInWithGoogle();
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        currentUser ? navigate('/chat') : navigate('')
    }, [currentUser])

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there 👋</h1>
                    <p className="py-6">Join the conversation, meet new people, and make connections in one shared chat room.</p>
                    <button
                        onClick={handleLogin} 
                        className="btn btn-neutral"
                    >Login With Google</button>
                </div>
            </div>
        </div>
    )
}
