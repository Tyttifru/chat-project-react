import '../../styles/chat.css';

import { useState, useRef, useEffect } from 'react';
import { getMessages, saveMessages, clearMessagesStorage, getCurrentUser } from '../../services/storage';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

function ChatScreen() {
    const [messages, setMessages] = useState(getMessages());
    const chatContainerRef = useRef(null);

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }

    useEffect(() => {
        scrollToBottom()
    }, [])

    /* чисто для проверки, что не скроллит на смс от собеседника
    useEffect(() => {
    window.__testAddMessage = (text, author = 'Вася') => {
        setMessages(prev => [...prev, {
            text,
            author,
            time: new Date().toISOString()
        }]);
    };
    return () => { delete window.__testAddMessage; };
    }, []);
    */

    const handleSend = (text) => {
        const newMessage = {
            text: text,
            author: getCurrentUser(),
            time: new Date().toISOString()
        };
        const updatedMessages = [...messages, newMessage];
        
        setMessages(updatedMessages);
        saveMessages(updatedMessages);

        requestAnimationFrame(scrollToBottom);
    };

    const handleClear = () => {
        if (window.confirm("Вы уверены, что хотите очистить чат?")) {
            clearMessagesStorage();
            setMessages([]);
        }
    };

    return (
        <div className="screen chat active" id="chat-screen">
            <form className="form" onSubmit={(e) => e.preventDefault()}>
                <ChatHeader onClear={handleClear} />
                <MessageList containerRef={chatContainerRef} messages={messages} />
                <MessageInput onSend={handleSend} />
            </form>
        </div>
    );
}
export default ChatScreen;