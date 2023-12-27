import { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ChatRoom from './pages/ChatRoom';

function App() {
  return (
    <div>
        <Navbar />
        {/* <Login /> */}
        <ChatRoom />
    </div>
  )
}

export default App
