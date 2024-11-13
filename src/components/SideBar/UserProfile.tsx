import React from 'react';

const UserProfile: React.FC = () => {
    return (
        <div className="flex items-center space-x-3">
            <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
            />
            <div>
                <p className="font-semibold">Your Name</p>
                <p className="text-sm text-gray-400">Online</p>
            </div>
        </div>
    );
};

export default UserProfile;