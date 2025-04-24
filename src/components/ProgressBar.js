import React from 'react';
import '../styles/ProgressBar.css';

const ProgressBar = ({ locations, currentIndex, onNavigate }) => {
    // Calculate progress percentage
    const progressPercent = (currentIndex / (locations.length - 1)) * 100;

    return (
        <div className="progress-bar-container">
            <div className="progress-bar-track">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${progressPercent}%` }}
                />

                {locations.map((location, index) => (
                    <button
                        key={location.id}
                        className={`progress-point ${index === currentIndex ? 'active' : ''} ${index < currentIndex ? 'visited' : ''}`}
                        style={{
                            left: `${(index / (locations.length - 1)) * 100}%`,
                            backgroundColor: location.color || 'var(--primary-color)'
                        }}
                        onClick={() => onNavigate(index)}
                        aria-label={`Go to ${location.name}`}
                        title={location.name}
                    />
                ))}
            </div>

            <div className="progress-labels">
                <span className="progress-location">
                    {currentIndex + 1} of {locations.length}: {locations[currentIndex]?.name}
                </span>
                <span className="progress-percentage">
                    {Math.round(progressPercent)}% complete
                </span>
            </div>
        </div>
    );
};

export default ProgressBar; 