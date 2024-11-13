import React from 'react';

const DirectMessages: React.FC = () => {
    const dmList = ['Alice', 'Bob', 'Charlie'];

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Direct Messages</h2>
            <ul>
                {dmList.map((dm) => (
                    <li key={dm} className="py-1 hover:bg-gray-700 rounded">
                        {dm}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DirectMessages;