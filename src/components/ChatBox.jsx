import React from 'react'
import Message from './Message'

export default function ChatBox() {
    const messages = [
        { id:1, text: 'Hello there', name: 'Plamen' },
        { id:2, text: 'Hello', name: 'Elena' }
    ]
  return (
    <div className='pb-44 pt-20 containerWrap'>
        {messages.map(message => (
            <Message message={message} key={message.id} />
        ))}
    </div>
  )
}
