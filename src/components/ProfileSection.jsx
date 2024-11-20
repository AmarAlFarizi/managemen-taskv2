import React, { useEffect, useState } from 'react';
import { UserIcon } from '@heroicons/react/20/solid';

const ProfileSection = ({ user = {}, onEditProfile, onSignOut }) => {
  const [avatar, setAvatar] = useState(localStorage.getItem('userAvatar') || '');

  useEffect(() => {
    setAvatar(localStorage.getItem('userAvatar') || '');
  }, []);

  return (
    <div className="flex flex-col items-center text-white">
      <div className="h-24 w-24 rounded-full bg-gray-600 flex items-center justify-center mb-4">
        {avatar ? (
          <img
            src={avatar}
            alt="User Avatar"
            className="h-24 w-24 rounded-full object-cover"
          />
        ) : (
          <UserIcon className="h-16 w-16 text-white" />
        )}
      </div>

      <h2 className="text-xl mb-2">Welcome Back, {user?.name || 'User'}!</h2>

      <button
        onClick={onEditProfile}
        className="mb-2 px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition duration-200"
      >
        Edit Profile
        
      </button>
      <button
        onClick={onSignOut}
        className="px-4 py-2 bg-transparent border border-violet-500 text-violet-500 rounded-lg hover:bg-violet-500 hover:text-white transition duration-200"
      >
        Sign Out
      </button>
      
      
    </div>
  );
};

export default ProfileSection;
