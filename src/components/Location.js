import React from 'react';
import '../styles/StoryMapModern.css';
import MDXLocation from './MDXLocation';

const Location = ({ location, isActive, progress = 100, onNext, onPrev }) => {
    return (
        <div
            className={`location-modern ${isActive ? 'active' : ''}`}
            style={{
                '--progress': `${progress}%`,
                '--location-color': location.color || '#3498db'
            }}
        >
            <div className="location-hero">
                <div
                    className="location-hero-image"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}${location.heroImage || location.images[0]})`
                    }}
                >
                    <div className="location-hero-overlay"></div>
                    <div className="location-hero-content">
                        <h1>{location.name}</h1>
                        <h2>{location.subtitle}</h2>
                    </div>
                </div>
            </div>

            <div className="location-body">
                <div className="mdx-wrapper reveal-animation">
                    <MDXLocation location={location} />

                    {/* Add navigation buttons inside the MDX content area */}
                    <div className="location-navigation">
                        {location.id > 0 && (
                            <button
                                className="prev-location-btn"
                                onClick={onPrev}
                            >
                                ← Previous Location
                            </button>
                        )}

                        {location.id < 2 && (
                            <button
                                className="next-location-btn"
                                onClick={onNext}
                            >
                                Next Location →
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location; 