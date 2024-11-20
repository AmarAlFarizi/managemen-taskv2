import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const LoginForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-gray-700 rounded-lg w-full">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white"
        required
      />
      <button type="submit" className="w-full p-3 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition duration-200 flex items-center justify-center">
        <CheckCircleIcon className="h-5 w-5 mr-2" />
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
