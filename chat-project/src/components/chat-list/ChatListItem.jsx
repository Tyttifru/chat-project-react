import { Link } from 'react-router-dom'

function ChatListItem({ chat }) {
    return (
        <Link to={`/chat/${chat.id}`} className="chat-item">
            <div className="chat-avatar">
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
                        : <span className="chat-status">✓✓</span>
                    }
                </div>
            </div>
        </Link>
    );
}
export default ChatListItem;