import { useState } from 'react';

function SearchBar({ placeholder = "Поиск..." }) {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');

    return (
        <div className={`search-container ${isOpen ? 'active' : ''}`}>
            <input 
                type="text" 
                className="search-input" 
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button 
                className="search-btn" 
                type="button"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="material-symbols-outlined">search</span>
            </button>
        </div>
    );
}
export default SearchBar;