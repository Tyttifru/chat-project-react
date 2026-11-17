import { useState } from 'react';
import { getRegisteredUsers, saveRegisteredUsers, saveCurrentUser } from '../../services/storage';
import { useFormError } from '../ui/ErrorFuncs';
import ErrorMessage from '../ui/ErrorMessage';

function RegisterForm({ onSwitchToLogin, onSuccess }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const { error, showError, clearError, inputClass } = useFormError();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !password.trim()) {
            showError('Введите имя и пароль');
            return;
        }

        const users = getRegisteredUsers();

        if (users[name]) {
            showError("Пользователь с таким именем уже есть!");
            return;
        }

        users[name] = password;
        saveRegisteredUsers(users);
        saveCurrentUser(name);

        onSuccess();
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        if (error) clearError();
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (error) clearError();
    };

    return (
        <div className="flip-card-back">
            <form className="login-box" id="register-form" onSubmit={handleSubmit}>
                <h2>Регистрация</h2>
                
                <input 
                    className={inputClass("author-input")} 
                    placeholder="Введите ваше имя" 
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                />
                
                <input 
                    className={inputClass("password-input")} 
                    placeholder="Введите пароль" 
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                
                <ErrorMessage>{error}</ErrorMessage>

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