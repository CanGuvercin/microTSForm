import React, { useState } from 'react';

export const DeletableButton: React.FC<{ onDelete: () => void }> = ({ onDelete }) => {
    const [scale, setScale] = useState(1);

    const handleMouseEnter = () => {
        setScale(1.5);
    };

    const handleMouseLeave = () => {
        setScale(1);
    };

    return (
        <button
            onClick={onDelete}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                fontSize: '48px',
                padding: '40px 60px',
                transform: `scale(${scale})`,
                transition: 'transform 0.2s ease',
                backgroundColor: '#ff4444',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
            }}
        >
            🗑️ DELETE
        </button>
    );
};