import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid'; 

const ProfileUpdateForm = ({ avatar, name, email, onAvatarChange, onNameChange, onEmailChange, onPasswordChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6 w-full">
      {}
      <div>
        <label htmlFor="profileUrl" className="block text-sm text-gray-400">Profile URL</label>
        <input
          id="profileUrl"
          type="text"
          placeholder="<image url>"
          value={avatar}
          onChange={(e) => onAvatarChange(e.target.value)}
          className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-500"
        />
      </div>

      {}
      <div>
        <label htmlFor="name" className="block text-sm text-gray-400">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Input Your Name..."
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-500"
        />
      </div>

      {}
      <div>
        <label htmlFor="email" className="block text-sm text-gray-400">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Input yout email..."
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-500"
        />
      </div>

      {}
      <div>
        <label htmlFor="password" className="block text-sm text-gray-400">Password</label>
        <input
          id="password"
          type="password"
          placeholder="******"
          onChange={(e) => onPasswordChange(e.target.value)}
          className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full p-3 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition duration-200 flex items-center justify-center"
      >
        <CheckCircleIcon className="h-5 w-5 mr-2" /> 
        Submit
      </button>
    </form>
  );
};

export default ProfileUpdateForm;
