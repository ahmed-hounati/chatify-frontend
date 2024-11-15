
import React, { useState } from 'react';
import { login } from '../services/AuthService';

const Login: React.FC<{ setToken: (token: string) => void }> = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      setToken(response.data.token);
      alert('Login successful');
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-200">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-green-700">Welcome Back!</h1>
        <p className="text-gray-600">Ready to make new friends, Chatify will bring you closer!</p>
      </div>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-left text-gray-600 font-semibold">Username:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md placeholder-gray-500"
            placeholder="placeholder..."
            required
          />
        </div>
        <div>
          <label className="block text-left text-gray-600 font-semibold">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md placeholder-gray-500"
            placeholder="placeholder..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
        >
          Log In
        </button>
      </form>
      <p className="text-center mt-4 text-sm text-gray-600">
        New to Chatify? <a href="/register" className="text-green-500 hover:underline">Create your account</a>!
      </p>
    </div>
  </div>
);
};

export default Login;
