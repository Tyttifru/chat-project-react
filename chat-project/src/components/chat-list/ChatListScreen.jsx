import { mockChats } from '../../services/mocks';
import SearchBar from '../ui/SearchBar';
import DropdownMenu from '../ui/DropdownMenu';
import ChatList from './ChatList';

function ChatListScreen({ onSelectChat }) {
    const menuItems = (
        <>
            <button className="dropdown-item" type="button">
                <span className="material-symbols-outlined">contacts</span>
                <span>Контакты</span>
            </button>
            <button className="dropdown-item" type="button">
                <span className="material-symbols-outlined">settings</span>
                <span>Настройки</span>
            </button>
        </>
    );
    
    return (
        <div className="screen active" id="chat-list-screen">
            <div className="chat-list-box">
                
                <DropdownMenu items={menuItems} />
                <SearchBar placeholder="Поиск..." />

                <ChatList 
                    chats={mockChats} 
                    onSelectChat={onSelectChat} 
                />

                <button className="fab-btn" type="button" title="Создать чат">
                    <span className="material-symbols-outlined">add_circle</span>
                </button>

            </div>
        </div>
    );
}
export default ChatListScreen;