import React from 'react';

const Channels: React.FC = () => {
    const channels = ['General', 'Random', 'Tech'];

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Channels</h2>
            <ul>
                {channels.map((channel) => (
                    <li key={channel} className="py-1 hover:bg-gray-700 rounded">
                        #{channel}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Channels;