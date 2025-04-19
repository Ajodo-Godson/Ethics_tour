import React from 'react';
import '../styles/Navigation.css';

const Navigation = ({ locations, currentLocation, onNavigate }) => {
    const goToNext = () => {
        const nextLocation = (currentLocation + 1) % locations.length;
        onNavigate(nextLocation);
    };

    const goToPrevious = () => {
        const prevLocation = (currentLocation - 1 + locations.length) % locations.length;
        onNavigate(prevLocation);
    };

    return (
        <div className="navigation">
            <button className="nav-button prev" onClick={goToPrevious}>
                Previous Location
            </button>

            <div className="location-indicators">
                {locations.map((location) => (
                    <button
                        key={location.id}
                        className={`location-indicator ${currentLocation === location.id ? 'active' : ''}`}
                        onClick={() => onNavigate(location.id)}
                    >
                        {location.name}
                    </button>
                ))}
            </div>

            <button className="nav-button next" onClick={goToNext}>
                Next Location
            </button>
        </div>
    );
};

export default Navigation; 