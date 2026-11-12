import { useState } from 'react';
import { getRegisteredUsers, saveRegisteredUsers, saveCurrentUser } from '../../services/storage';

function RegisterForm({ onSwitchToLogin, onSuccess }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !password.trim()) {
            alert("Введите имя и пароль!");
            return;
        }

        const users = getRegisteredUsers();

        if (users[name]) {
            alert("Пользователь с таким именем уже есть!");
            return;
        }

        users[name] = password;
        saveRegisteredUsers(users);

        alert("Регистрация прошла успешно, добро пожаловать!");
        onSuccess();
    };

    return (
        <div className="flip-card-back">
            <form className="login-box" id="register-form" onSubmit={handleSubmit}>
                <h2>Регистрация</h2>
                
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
                
                <button className="addnewuser-btn" type="submit">Зарегистрироваться</button>
                
                <button 
                    className="backtologin-btn" 
                    type="button"
                    onClick={onSwitchToLogin}
                >
                    Назад
                </button>
            </form>
        </div>
    );
}
export default RegisterForm;