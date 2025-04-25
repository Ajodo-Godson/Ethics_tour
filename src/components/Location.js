import React from 'react';
import MDXLocation from './MDXLocation';
import '../styles/ImprovedStoryMap.css';

const Location = ({ location, isActive }) => {
    if (!location) return null;

    return (
        <div className="storymap-location">
            {/* Hero section with properly positioned text */}
            <div className="story-hero">
                <img
                    src={`${process.env.PUBLIC_URL}${location.heroImage || location.images[0]}`}
                    alt={location.name}
                    className="hero-image"
                />
                <div className="hero-overlay">
                    <h1>{location.name}</h1>
                    <h2>{location.subtitle}</h2>
                </div>
            </div>

            {/* Main content section */}
            <div className="story-content-container">
                {/* Notes in floating panels */}
                {location.notes && location.notes.length > 0 && (
                    <div className="floating-panel">
                        <h3>Key Considerations</h3>
                        <ul className="notes-list">
                            {location.notes.map(note => (
                                <li key={note.id}>{note.content}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* MDX Content */}
                <MDXLocation location={location} />
            </div>
        </div>
    );
};

export default Location; 