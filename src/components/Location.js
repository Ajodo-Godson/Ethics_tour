import React from 'react';
import MDXLocation from './MDXLocation';
import '../styles/ImprovedStoryMap.css';

const Location = ({ location, isActive }) => {
    if (!location) return null;

    const renderLocationContent = () => {
        if (location.isSpecialSection) {
            // Special section still shows hero image but no map elements
            return (
                <div className="special-section-content">
                    {/* Keep the hero image section */}
                    <div className="story-hero">
                        <img
                            src={`${process.env.PUBLIC_URL}${location.heroImage}`}
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
                        <MDXLocation location={location} />
                    </div>
                </div>
            );
        } else {
            // Regular location with images and map coordinates
            return (
                <div className="regular-location-content">
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
                        {/* MDX Content */}
                        <MDXLocation location={location} />
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="location-container">
            {renderLocationContent()}
        </div>
    );
};

export default Location; 