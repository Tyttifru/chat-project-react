import '../../styles/profile.css';

import { useState, useRef, useEffect } from 'react';
import { getCurrentUser, getUserProfile, saveUserProfile } from '../../services/storage';

function ProfileScreen() {
    const currentUser = getCurrentUser();
    const initialProfile = getUserProfile(currentUser);

    const [firstName, setFirstName] = useState(initialProfile.firstName);
    const [lastName, setLastName] = useState(initialProfile.lastName);
    const [age, setAge] = useState(initialProfile.age);
    const [saved, setSaved] = useState(false);

    const saveTimerRef = useRef(null);

    useEffect(() => {
        return () => {
            if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
        };
    }, []);

    const handleSave = (e) => {
        e.preventDefault();

        saveUserProfile(currentUser, {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            age: age.trim()
        });

        setSaved(true);
        if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
        saveTimerRef.current = setTimeout(() => setSaved(false), 1500);
    };

    return (
        <div className="screen active" id="profile-screen">
            <div className="profile-box">
                <div className="profile-header">
                    <h2>Мой профиль</h2>
                </div>

                <div className="profile-avatar">
                    {currentUser ? currentUser.charAt(0).toUpperCase() : '?'}
                </div>

                <form className="profile-form" onSubmit={handleSave}>
                    <div className="profile-field">
                        <label>Имя</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Введите имя"
                        />
                    </div>

                    <div className="profile-field">
                        <label>Фамилия</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Введите фамилию"
                        />
                    </div>

                    <div className="profile-field">
                        <label>Возраст</label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Введите возраст"
                        />
                    </div>

                    <button
                        type="submit"
                        className={`profile-save-btn ${saved ? 'profile-save-btn--saved' : ''}`}
                    >
                        {saved ? 'Сохранено ✓' : 'Сохранить изменения'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ProfileScreen;