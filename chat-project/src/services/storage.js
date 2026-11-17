export function getMessages() {
    return JSON.parse(localStorage.getItem('chat') || '[]');
}

export function saveMessages(messages) {
    localStorage.setItem('chat', JSON.stringify(messages));
}

export function clearMessagesStorage() {
    localStorage.removeItem('chat');
}

export function getCurrentUser() {
    return localStorage.getItem('currentUser');
}

export function saveCurrentUser(name) {
    localStorage.setItem('currentUser', name);
}

export function removeCurrentUser() {
    localStorage.removeItem('currentUser');
}

export function getRegisteredUsers () {
    return JSON.parse(localStorage.getItem('users') || '{}')
}

export function saveRegisteredUsers (users) {
    localStorage.setItem('users', JSON.stringify(users))
}

export function saveCurrentScreen(screenName) {
    localStorage.setItem('currentScreen', screenName);
}

export function getCurrentScreen() {
    return localStorage.getItem('currentScreen') || 'list'; 
}

export function removeCurrentScreen() {
    localStorage.removeItem('currentScreen');
}

export function getUserProfile(username) {
    const all = JSON.parse(localStorage.getItem('profiles') || '{}');
    return all[username] || { firstName: username, lastName: '', age: '' };
}

export function saveUserProfile(username, profile) {
    const all = JSON.parse(localStorage.getItem('profiles') || '{}');
    all[username] = profile;
    localStorage.setItem('profiles', JSON.stringify(all));
}