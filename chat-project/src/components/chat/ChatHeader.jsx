import SearchBar from '../ui/SearchBar';
import DropdownMenu from '../ui/DropdownMenu';

function ChatHeader({ onBack, onClear }) {
    const menuItems = (
        <button className="dropdown-item" id="clear-chat-btn" type="button" onClick={onClear}>
            <span className="material-symbols-outlined">delete</span>
            <span>Очистить чат</span>
        </button>
    );

    return (
        <>
            <button className="back-to-list-btn" type="button" onClick={onBack}>
                <span className="material-symbols-outlined">arrow_back</span>
            </button>

            <div className="chat-top-actions">
                <SearchBar placeholder="Поиск в чате..." />
                <DropdownMenu items={menuItems} alignRight={true} />
            </div>
        </>
    );
}

export default ChatHeader;