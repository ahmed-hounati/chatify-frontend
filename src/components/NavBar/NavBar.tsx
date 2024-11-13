import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav className="w-full bg-[#2D2D2D] text-white p-4 flex justify-between items-center">
            <div className="text-lg font-bold">Chatify</div>
            <div className="flex space-x-4">
                <button className="hover:text-gray-400">Home</button>
                <button className="hover:text-gray-400">Settings</button>
            </div>
        </nav>
    );
};

export default NavBar;
