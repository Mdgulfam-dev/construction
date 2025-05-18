import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import constructionBg from '../assets/construction-bg.jpg'; // Make sure this image exists
import { useNavigate } from "react-router-dom";
import { config } from '../config';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const response = await fetch(`${config.API_URL}/api/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
        confirmPassword: formData.confirmPassword
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }

    alert('Registration successful!');
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    
    navigate("/");
    
  } catch (error) {
    console.error('Registration error:', error);
    alert(error.message || 'Registration failed. Please try again.');
  }
};


  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${constructionBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Register box */}
      <div className="relative bg-white/20 backdrop-blur-md rounded-xl shadow-2xl max-w-md w-full p-10 border border-white/30">
        {/* Logo / Brand */}
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-3 drop-shadow-md tracking-wide uppercase">
          Welcome
        </h1>
        <p className="text-center text-white/90 mb-6 text-sm">
          Join the leaders in Construction, Renovation & Interior Design
        </p>

        <h2 className="text-2xl font-bold text-white text-center mb-6 drop-shadow-md">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-3.5 text-white/80" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 shadow focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-white/80" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 shadow focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3.5 text-white/80" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 shadow focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3.5 text-white/80" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 shadow focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 shadow-lg transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center text-white/80 mt-4 text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-yellow-400 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
