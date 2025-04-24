import React from 'react';

const NavigationDots = ({ locations, current, onSelect }) => {
    return (
        <div className="navigation-dots">
            {locations.map((location, index) => (
                <button
                    key={location.id}
                    className={`nav-dot ${index === current ? 'active' : ''}`}
                    onClick={() => onSelect(index)}
                    aria-label={`Go to ${location.name}`}
                >
                    <span className="dot-label">{location.name}</span>
                </button>
            ))}
        </div>
    );
};

export default NavigationDots; 