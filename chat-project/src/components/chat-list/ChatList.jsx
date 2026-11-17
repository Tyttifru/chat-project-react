import ChatListItem from './ChatListItem';

function ChatList({ chats }) {
    return (
        <div className="chat-list-container">
            {chats.map(chat => (
                <ChatListItem 
                    key={chat.id} 
                    chat={chat} 
                />
            ))}
        </div>
    );
}
export default ChatList;