import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/bg.jpg';
import logo from '../assets/logo.png';
import { login } from '../api/network';
import { useAuthStore } from '../store/authStore';
import { useEffect } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, token, isLoading} = useAuthStore((state) => state);
  const navigate = useNavigate();


  useEffect(() => {
      if(token) {
          navigate("/tasks");
      }
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    await login({ email, password });
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center w-full max-w-md bg-white bg-opacity-90 p-10 rounded-lg shadow-lg"
      >
        <img src={logo} alt="Vocasia Logo" className="w-15 h-10 mb-2" /> {}
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Task Management</h2>

        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <label htmlFor="email" className="block text-sm text-gray-600">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Input Your Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition duration-300"
              required
            />
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <label htmlFor="password" className="block text-sm text-gray-600">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Your password ..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition duration-300"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full p-4 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition duration-200 flex items-center justify-center shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CheckIcon className="h-5 w-5 text-white mr-2" />
            Sign In
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
