import { useState, useRef, useEffect } from 'react';

function DropdownMenu({ items, alignRight = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && 
                btnRef.current && !btnRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="burger-menu-wrapper" ref={btnRef}>
            <button 
                className="burger-btn" 
                type="button"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="material-symbols-outlined">menu</span>
            </button>

            <div 
                className={`dropdown-menu ${isOpen ? 'active' : ''}`} 
                ref={menuRef}
                style={alignRight ? { right: 0, left: 'auto' } : {}}
                onClick={() => setIsOpen(false)}
            >
                {items} 
            </div>
        </div>
    );
}
export default DropdownMenu;