import React from 'react'
import { UserAuth } from '../context/AuthContext'

export default function Message({ message }) {
    const { currentUser } = UserAuth();
    let chatSide = '';
    message.uid === currentUser.uid 
        ? chatSide = 'chat-end'
        : chatSide = 'chat-start'
    
    return (
        <div>
            <div className={`chat ${chatSide}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={message.avatar} alt="Img" />
                    </div>
                </div>
                <div className="chat-header">{message.name}</div>
                <div className="chat-bubble">{message.text}</div>
            </div>
        </div>
    )
}
