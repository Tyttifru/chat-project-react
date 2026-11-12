import { useState } from 'react';
import { getCurrentUser, getCurrentScreen, saveCurrentScreen } from './services/storage';

import './styles/base.css';
import './styles/header.css';
import './styles/login.css';
import './styles/chat-list.css';
import './styles/chat.css';

import Header from './components/ui/Header';
import LoginScreen from './components/auth/LoginScreen';
import ChatListScreen from './components/chat-list/ChatListScreen';
import ChatScreen from './components/chat/ChatScreen';

function App() {
    
    const [currentScreen, setCurrentScreen] = useState(() => {
        if (getCurrentUser()) {
            return getCurrentScreen() === 'chat' ? 'chat' : 'list';
        }
        return 'login';
    });

    const handleLogin = () => {
        saveCurrentScreen('list');
        setCurrentScreen('list');
    };

    const handleLogout = () => {
        setCurrentScreen('login');
    };

    const handleSelectChat = () => {
        saveCurrentScreen('chat');
        setCurrentScreen('chat');
    };

    const handleBackToList = () => {
        saveCurrentScreen('list');
        setCurrentScreen('list');
    };

    return (
        <>
            <Header currentScreen={currentScreen} onLogout={handleLogout} />

            {currentScreen === 'login' && (
                <LoginScreen onLogin={handleLogin} />
            )}

            {currentScreen === 'list' && (
                <ChatListScreen onSelectChat={handleSelectChat} />
            )}

            {currentScreen === 'chat' && (
                <ChatScreen 
                    onBack={handleBackToList} 
                />
            )}
        </>
    );
}

export default App;