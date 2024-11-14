import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; 


interface User {
    archived_user: boolean;
    type: string;
}

interface AuthResponse {
    user: User;
    token: string;
}


export const registerUser = async (userData: Partial<User>): Promise<AuthResponse> => {
    const response = await axios.post<AuthResponse>(`${API_URL}/auth/register`, userData);
    return response.data;
};

export const loginUser = async (credentials: { email: string; password: string }): Promise<AuthResponse> => {
    const response = await axios.post<AuthResponse>(`${API_URL}/auth/login`, credentials);
    return response.data;
};


export const logoutUser = async (token: string): Promise<void> => {
    await axios.post(
        `${API_URL}/auth/logout`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
    );
};
