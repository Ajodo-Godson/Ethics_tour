import React from 'react';
import '../styles/TableOfContents.css';

const TableOfContents = ({ locations, currentIndex, onNavigate }) => {
    return (
        <div className="toc-container">
            <h2>Tour Stops</h2>

            {locations.map((location, index) => (
                <div
                    key={location.id}
                    className={`toc-location ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => onNavigate(index)}
                    style={{
                        '--location-color': location.color,
                        '--location-color-rgb': location.colorRgb
                    }}
                >
                    <div className="toc-location-title">{location.name}</div>
                    <div className="toc-location-subtitle">{location.subtitle}</div>
                </div>
            ))}
        </div>
    );
};

export default TableOfContents; 