import React, { useState } from 'react';
import '../styles/Location.css';
import ImageGallery from './ImageGallery';
import StoryNote from './StoryNote';

const Location = ({ location }) => {
    const [isZoomed, setIsZoomed] = useState(false);

    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    // Enhanced ethical analysis based on location
    const getEthicalAnalysis = () => {
        switch (location.name) {
            case 'Tenderloin':
                return (
                    <>
                        <p>In the Tenderloin district, we observe the stark reality of homelessness and poverty in one of America's wealthiest cities. From an effective altruism perspective, the question becomes: how can we allocate resources to help the greatest number of people in the most efficient way?</p>
                        <p>Utilitarian ethics would suggest that public resources should be directed toward solutions that provide the maximum benefit for the greatest number of people, which might include housing-first initiatives and mental health services rather than temporary shelters.</p>
                    </>
                );

            case 'Civic Plaza':
                return (
                    <>
                        <p>At Civic Plaza, the visibility of homelessness raises pressing ethical questions about social responsibility and public spaces. A utilitarian framework would evaluate the investments in this public space against direct aid to those in need.</p>
                        <p>The question emerges: What obligations do civic institutions have to create public spaces that are accessible to all citizens, including the disadvantaged? How do we balance the comfort of some against the basic needs of others?</p>
                    </>
                );

            case 'Food Retailers':
                return (
                    <>
                        <p>Food retailers like Target, Trader Joe's, McDonald's and other establishments near homeless populations face unique ethical challenges. From a utilitarian perspective, we must consider how these businesses could maximize overall welfare.</p>
                        <p>Questions arise about food waste, pricing policies, and whether these businesses have special obligations to address hunger in their communities. Some retailers donate excess food to shelters, while others cite liability concerns for not doing so - how do we evaluate these different approaches?</p>
                    </>
                );

            default:
                return <p>Exploring the ethical dimensions of providing resources to those in need...</p>;
        }
    };

    return (
        <div className={`location ${isZoomed ? 'zoomed' : ''}`}>
            <div className="location-header">
                <h2>{location.name}</h2>
                <button onClick={toggleZoom}>
                    {isZoomed ? 'Zoom Out' : 'Zoom In'}
                </button>
            </div>

            <p className="location-description">{location.description}</p>

            <ImageGallery images={location.images} />

            <div className="notes-container">
                {location.notes.map(note => (
                    <StoryNote key={note.id} content={note.content} />
                ))}
            </div>

            <div className="location-analysis">
                <h3>Ethical Analysis</h3>
                {getEthicalAnalysis()}
            </div>
        </div>
    );
};

export default Location; 