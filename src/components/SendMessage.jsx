import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export default function SendMessage() {
    const [value, setValue] = useState('');
    const { currentUser } = UserAuth();

    async function handleSendMessage(e){
        e.preventDefault();
        if(value.trim() === ''){
            alert('Enter Valid Message :)');
            setValue('');
            return; 
        }
        try {
            const { uid, displayName, photoURL } = currentUser; 
            await addDoc(collection(db, 'messages'), {
                text: value,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid
            })
        } catch (err) {
            console.log(err.message);
        }

        setValue('');
    };

  return (
    <div className='bg-gray-300 fixed bottom-0 w-full py-10 shadow-lg'>
        <form onSubmit={handleSendMessage} className='containerWrap flex px-2'>
            <input 
                value={value} 
                type="text"
                onChange={e => setValue(e.target.value)} 
                className='input w-full focus:outline-none bg-gray-100 rounded-r-none' /> 
            <button 
                type='submit'
                className='w-auto bg-gray-600 text-white rounded-r-lg px-5 text-sm'
            >Send</button>
        </form>
    </div>
  )
}
