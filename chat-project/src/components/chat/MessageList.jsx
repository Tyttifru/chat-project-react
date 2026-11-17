import MessageItem from './MessageItem';

function MessageList({ messages, containerRef }) {

    return (
        <div className="message" ref={containerRef}>
            {messages.map((msg, index) => (
                <MessageItem key={index} {...msg} />
            ))}
        </div>
    );
}

export default MessageList;