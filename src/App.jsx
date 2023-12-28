import React from 'react';
import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ChatRoom from './pages/ChatRoom';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
        <Navbar />
        <Routes>
            <Route path='/' element={ <Login /> } />
            <Route path='/chat' element={<PrivateRoute> <ChatRoom />  </PrivateRoute>} />
        </Routes>
    </AuthProvider>
  )
}

export default App
