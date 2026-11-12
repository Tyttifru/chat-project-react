import { useState } from 'react';
import { getRegisteredUsers, saveCurrentUser } from '../../services/storage';

function LoginForm({ onSuccess, onSwitchToRegister }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !password.trim()) {
            alert("Введите имя и пароль!");
            return;
        }

        const users = getRegisteredUsers();

        if (users[name] === password) {
            saveCurrentUser(name);
            onSuccess();
        } else {
            alert("Неверное имя или пароль!");
        }
    };

    return (
        <div className="flip-card-front">
            <form className="login-box" id="login-form" onSubmit={handleSubmit}>
                <h2>Вход в чат</h2>
                
                <input 
                    className="author-input" 
                    placeholder="Введите ваше имя" 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                
                <input 
                    className="password-input" 
                    placeholder="Введите пароль" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <button className="login-btn" type="submit">Войти</button>
                
                <h3>Нет аккаунта?</h3>
                
                <button 
                    className="registration-btn" 
                    type="button"
                    onClick={onSwitchToRegister}
                >
                    Регистрация
                </button>
            </form>
        </div>
    );
}
export default LoginForm;