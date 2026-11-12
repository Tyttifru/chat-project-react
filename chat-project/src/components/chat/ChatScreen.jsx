import { useState } from 'react';
import { getMessages, saveMessages, clearMessagesStorage, getCurrentUser } from '../../services/storage';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

function ChatScreen({ onBack }) {
    const [messages, setMessages] = useState(getMessages());

    const handleSend = (text) => {
        const newMessage = {
            text: text,
            author: getCurrentUser(),
            time: new Date().toISOString()
        };
        const updatedMessages = [...messages, newMessage];
        
        setMessages(updatedMessages);
        saveMessages(updatedMessages);
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
                <ChatHeader onBack={onBack} onClear={handleClear} />
                <MessageList messages={messages} />
                <MessageInput onSend={handleSend} />
            </form>
        </div>
    );
}
export default ChatScreen;