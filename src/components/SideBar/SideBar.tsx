import React from 'react';
import DirectMessages from './DirectMessages';
import Channels from './Channels';
import UserProfile from './UserProfile';
import AsideBar from './AsideBar';

const Sidebar: React.FC = () => {
    return (
        <div className='flex flex-row'>
            <AsideBar />
            <div className="w-64 bg-[#FEFEFE] text-gray-600 flex flex-col h-screen">
                <div className='flex flex-row items-center justify-between'>
                    <h2 className='text-2xl p-4'>Chats</h2>
                    <h2 className='text-2xl'>+</h2>
                </div>
                <DirectMessages />
                <Channels />
                <div className="mt-auto p-4">
                    <UserProfile />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;