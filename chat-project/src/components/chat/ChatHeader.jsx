import SearchBar from '../ui/SearchBar';
import DropdownMenu from '../ui/DropdownMenu';
import { Link } from 'react-router-dom';

function ChatHeader({ onClear }) {
    const menuItems = (
        <button className="dropdown-item" id="clear-chat-btn" type="button" onClick={onClear}>
            <span className="material-symbols-outlined">delete</span>
            <span>Очистить чат</span>
        </button>
    );

    return (
        <>
            <Link to='/' className="back-to-list-btn">
                <span className="material-symbols-outlined">arrow_back</span>
            </Link>

            <div className="chat-top-actions">
                <SearchBar placeholder="Поиск в чате..." />
                <DropdownMenu items={menuItems} alignRight={true} />
            </div>
        </>
    );
}

export default ChatHeader;