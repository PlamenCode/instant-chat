import React, { useState } from 'react'

export default function SendMessage() {
    const [value, setValue] = useState('');

    function handleSendMessage(e){
        e.preventDefault();
        console.log(value);
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
