import { useState } from 'react';
import { getRegisteredUsers, saveCurrentUser } from '../../services/storage';
import { useFormError } from '../ui/ErrorFuncs';
import ErrorMessage from '../ui/ErrorMessage';

function LoginForm({ onSuccess, onSwitchToRegister }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const { error, showError, clearError, inputClass } = useFormError();

    const handleSubmit = (e) => {
        e.preventDefault();
        clearError();

        if (!name.trim() || !password.trim()) {
            showError('Введите имя и пароль');
            return;
        }

        const users = getRegisteredUsers();

        if (users[name] === password) {
            saveCurrentUser(name);
            onSuccess();
        } else {
            showError('Неверное имя или пароль');
        }
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
        <div className="flip-card-front">
            <form className="login-box" id="login-form" onSubmit={handleSubmit}>
                <h2>Вход в чат</h2>

                <input
                    className={inputClass('author-input')}
                    placeholder="Введите ваше имя"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                />

                <input
                    className={inputClass('password-input')}
                    placeholder="Введите пароль"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />

                <ErrorMessage>{error}</ErrorMessage>

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