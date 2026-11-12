import { useState } from 'react';

function MessageInput({ onSend }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) return;
        onSend(value);
        setValue(''); 
    };

    return (
        <div className="form-row">
            <input 
                className="form-input" 
                placeholder="Введите сообщение..." 
                type="text" 
                maxLength="600"
                value={value}
                onChange={(e) => setValue(e.target.value)} 
            />
            <button className="sendbtn" type="submit" title="Отправить" onClick={handleSubmit}>
                <span className="material-symbols-outlined">send</span>
            </button>
        </div>
    );
}
export default MessageInput;