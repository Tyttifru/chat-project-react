import { useEffect, useRef } from 'react';
import MessageItem from './MessageItem';

function MessageList({ messages }) {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="message">
            {messages.map((msg, index) => (
                <MessageItem key={index} {...msg} />
            ))}
            <div ref={bottomRef} />
        </div>
    );
}
export default MessageList;