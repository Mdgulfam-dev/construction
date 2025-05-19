


import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import constructionBg from '../assets/construction-bg.jpg';
import { useAuth } from '../context/AuthContext';
import { config } from '../config';

const Login = () => {
  // const { setAuthData } = useAuth(); // from your AuthContext
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!formData.email || !formData.password) {
        throw new Error('Both email and password are required.');
      }

      const response = await fetch(`${config.API_URL}/api/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Optional: If using cookies
        
        body: JSON.stringify({
          email: formData.email.trim().toLowerCase(),
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed.');
      }

      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        // setAuthData({ token: data.token, user: data.user });
        login(data.token, data.user);

        navigate('/home');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${constructionBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative bg-white/20 backdrop-blur-md rounded-xl shadow-2xl max-w-md w-full p-10 border border-white/30">
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-3 drop-shadow-md uppercase">Welcome</h1>
        <p className="text-center text-white/90 mb-8 text-sm">
          Experts in Construction • Renovation • Interiors
        </p>
        <h2 className="text-2xl font-bold text-white text-center mb-6 drop-shadow-md">Login to Your Account</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 text-sm rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80" size={20} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className={`w-full ${
              isLoading ? 'bg-yellow-600' : 'bg-yellow-500 hover:bg-yellow-600'
            } text-white font-semibold py-3 rounded-lg shadow-lg transition-colors duration-300 flex justify-center items-center`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Processing...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-white/80 text-sm">
          Don't have an account?{' '}
          <a href="/register" className="text-yellow-400 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
