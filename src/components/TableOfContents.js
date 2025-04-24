import React from 'react';
import '../styles/TableOfContents.css';

const TableOfContents = ({ locations, currentIndex, onNavigate }) => {
    return (
        <nav className="table-of-contents">
            <h3 className="toc-title">Tour Stops</h3>
            <ul className="toc-list">
                {locations.map((location, index) => (
                    <li
                        key={location.id}
                        className={`toc-item ${index === currentIndex ? 'active' : ''}`}
                        style={{ '--location-color': location.color }}
                    >
                        <button
                            onClick={() => onNavigate(index)}
                            className="toc-link"
                            aria-current={index === currentIndex ? 'location' : undefined}
                        >
                            {location.name}
                            <span className="toc-subtitle">{location.subtitle}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents; 