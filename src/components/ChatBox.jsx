import React, { useEffect, useRef, useState } from 'react';
import Message from './Message';
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from '../firebase';

export default function ChatBox() {
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef();

    function scrollToBottom(){
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    };


    useEffect(scrollToBottom, [messages])

    useEffect(() => {
        const que = query(
            collection(db, "messages"),
            orderBy('createdAt'),
            limit(50)
        );
        const unsubscribe = onSnapshot(que, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id:doc.id });
            });
            setMessages(messages)
        });
        return () => unsubscribe;
    }, []);

    return (
        <div className='pb-44 pt-20 containerWrap'>
            {messages.map(message => (
                <Message message={message} key={message.id} />
            ))}
            <div ref={messagesEndRef} ></div>
        </div>
    )
}
