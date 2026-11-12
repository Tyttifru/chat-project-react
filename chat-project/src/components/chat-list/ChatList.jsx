import ChatListItem from './ChatListItem';

function ChatList({ chats, onSelectChat }) {
    return (
        <div className="chat-list-container">
            {chats.map(chat => (
                <ChatListItem 
                    key={chat.id} 
                    chat={chat} 
                    onClick={onSelectChat} 
                />
            ))}
        </div>
    );
}
export default ChatList;