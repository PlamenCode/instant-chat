import React from 'react'

export default function Navbar() {
    return (
        <div className='navbar bg-neutral text-neutral-content'>
            <div className="containerWrap flex justify-between">
                <a className="btn btn-ghost text-xl">ChatRoom</a>
                <button>Logout</button>
            </div>
        </div>
    )
}
