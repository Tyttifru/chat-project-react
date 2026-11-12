function ChatListItem({ chat, onClick }) {
    return (
        <div className="chat-item" onClick={() => onClick(chat)}>
            <div className="chat-avatar" style={{ background: '#FFC107' }}>
                {chat.avatar}
            </div>
            <div className="chat-info">
                <div className="chat-top">
                    <span className="chat-name">{chat.name}</span>
                    <span className="chat-time">{chat.time}</span>
                </div>
                <div className="chat-bottom">
                    <span className="chat-last-message">{chat.lastMessage}</span>
                    {chat.status === 'unread' 
                        ? <span className="chat-badge">{chat.unreadCount || 1}</span>
                        : <span className="chat-status" style={{ color: '#05b30d' }}>✓✓</span>
                    }
                </div>
            </div>
        </div>
    );
}
export default ChatListItem;