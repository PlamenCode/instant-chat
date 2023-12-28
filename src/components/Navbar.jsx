import React from 'react'
import { UserAuth } from '../context/AuthContext'

export default function Navbar() {
    const { currentUser, logOut } = UserAuth();

    async function handleLogOut(){
        try {
            await logOut()
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className='navbar bg-neutral text-neutral-content'>
            <div className="containerWrap flex justify-between">
                <a className="btn btn-ghost text-xl">ChatRoom</a>
                { currentUser ?  <button onClick={handleLogOut} >Logout</button> : ''}
            </div>
        </div>
    )
}
