import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function LoginScreen({ onLogin }) {

    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="screen active" id="login-screen">
            <div className="flip-card">
                <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>

                    <LoginForm 
                        onSuccess={onLogin} 
                        onSwitchToRegister={() => setIsFlipped(true)} 
                    />
                    
                    <RegisterForm 
                        onSuccess={onLogin}
                        onSwitchToLogin={() => setIsFlipped(false)} 
                    />
                    
                </div>
            </div>
        </div>
    );
}
export default LoginScreen;