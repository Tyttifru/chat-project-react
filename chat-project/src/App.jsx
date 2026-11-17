import './styles/base.css';

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getCurrentUser } from './services/storage';

import Header from './components/ui/Header';
import LoginScreen from './components/auth/LoginScreen';
import ChatListScreen from './components/chat-list/ChatListScreen';
import ChatScreen from './components/chat/ChatScreen';
import ProfileScreen from './components/profile/ProfileScreen';

function App() {
    
    const [isAuth, setisAuth] = useState(!!getCurrentUser()); 

    return (
        <Router basename='/chat-project-react'>
            <Header isAuth={isAuth} onLogout={() => setisAuth(false)} />

                <Routes>
                    <Route path="/login" element={!isAuth ? <LoginScreen onLogin={() => setisAuth(true)} /> : <Navigate to='/chat-list' /> } />
                    <Route path="/" element={<Navigate to="/chat-list" replace />} />  
                    <Route path="/chat-list" element={isAuth ? <ChatListScreen /> : <Navigate to="/login" />}/>              
                    <Route path="/chat/:id" element={isAuth ? <ChatScreen /> : <Navigate to="/login" />} />
                    <Route path="/profile" element={isAuth ? <ProfileScreen /> : <Navigate to="/login" />} />
                    <Route path="*" element={<Navigate to={isAuth ? "/" : "/login"} />} />
                </Routes>
            </Router>
    );
}

export default App;