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
                    <h2>{location.centralQuestion}</h2>
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
                <div className="content-wrapper">
                    <MDXLocation location={location} />
                </div>

                {/* Framework sections in cards */}
                {location.analysis && (
                    <div className="framework-cards">
                        <h3>Ethical Perspectives</h3>

                        {location.analysis.kantian && (
                            <div className="framework-card">
                                <div className="framework-header">
                                    <div className="framework-icon kant-icon">K</div>
                                    <h4>{location.analysis.kantian.title}</h4>
                                </div>
                                <div className="framework-body">
                                    <p>{location.analysis.kantian.text}</p>
                                </div>
                            </div>
                        )}

                        {location.analysis.utilitarian && (
                            <div className="framework-card">
                                <div className="framework-header">
                                    <div className="framework-icon util-icon">U</div>
                                    <h4>{location.analysis.utilitarian.title}</h4>
                                </div>
                                <div className="framework-body">
                                    <p>{location.analysis.utilitarian.text}</p>
                                </div>
                            </div>
                        )}

                        {location.analysis.buddhist && (
                            <div className="framework-card">
                                <div className="framework-header">
                                    <div className="framework-icon buddha-icon">B</div>
                                    <h4>{location.analysis.buddhist.title}</h4>
                                </div>
                                <div className="framework-body">
                                    <p>{location.analysis.buddhist.text}</p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Divider with background image (if multiple images available) */}
            {location.images && location.images.length > 1 && (
                <div
                    className="parallax-divider"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${location.images[1]})` }}
                >
                    <div className="divider-content">
                        <h3>Ethical Implications</h3>
                        <p>How we respond to needs in this location has lasting implications for both individuals and communities.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Location; 