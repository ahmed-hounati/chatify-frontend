import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../services/authService';

const LogoutButton: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const token = localStorage.getItem('authToken');
        if (token) {
            try {
                await logoutUser(token);
                localStorage.removeItem('authToken');
                navigate('/login');
            } catch (error) {
                console.error('Logout error:', error);
            }
        }
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;
