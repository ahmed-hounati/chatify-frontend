// src/components/Logout.tsx
import React from 'react';
import { logout } from '../services/AuthService';

const Logout: React.FC<{ token: string; clearToken: () => void }> = ({ token, clearToken }) => {
  const handleLogout = async () => {
    try {
      await logout(token);
      clearToken();
      alert('Logged out successfully');
    } catch (error) {
      console.error(error);
      alert('Logout failed');
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
