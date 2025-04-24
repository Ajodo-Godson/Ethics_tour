import React, { useEffect, useState } from 'react';
import ImageGallery from './ImageGallery';
import MDXLocation from './MDXLocation';

const LocationSection = ({ location, expandedNotes, toggleNoteExpansion, getPublicPath, onNext, onPrev, useMDX = true }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Add transition effect when location changes
    useEffect(() => {
        setIsVisible(false);
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 50);
        return () => clearTimeout(timer);
    }, [location.id]);

    // If MDX is enabled and we have an MDX file for this location, use it
    if (useMDX) {
        return (
            <div className={`location-section-wrapper ${isVisible ? 'visible' : 'hidden'}`}>
                <MDXLocation location={location} />

                <div className="location-navigation">
                    <button
                        className="prev-location"
                        disabled={location.id === 0}
                        onClick={onPrev}
                    >
                        Previous Location
                    </button>
                    <button
                        className="next-location"
                        disabled={location.id === 2}
                        onClick={onNext}
                    >
                        Next Location
                    </button>
                </div>
            </div>
        );
    }

    // Otherwise, fall back to the original implementation
    return (
        <div className={`location-content ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="gallery-wrapper">
                <ImageGallery
                    images={location.images.map(getPublicPath)}
                    location={location.name}
                />
            </div>

            <h2>{location.name}</h2>
            <h3>{location.subtitle}</h3>

            <div className="central-question">
                <h3>Key Ethical Question</h3>
                <div className="question-box">
                    <p>{location.centralQuestion}</p>
                </div>
            </div>

            <div className="ethical-frameworks">
                <h3>Ethical Perspectives</h3>
                <div className="framework-tabs">
                    <div className="framework kant">
                        <h4>{location.analysis.kantian.title}</h4>
                        <p>{location.analysis.kantian.text}</p>
                    </div>

                    <div className="framework util">
                        <h4>{location.analysis.utilitarian.title}</h4>
                        <p>{location.analysis.utilitarian.text}</p>
                    </div>

                    <div className="framework buddha">
                        <h4>{location.analysis.buddhist.title}</h4>
                        <p>{location.analysis.buddhist.text}</p>
                    </div>
                </div>
            </div>

            <div className="reflection-notes">
                <h3>Additional Ethical Considerations</h3>
                <div className="notes-grid">
                    {location.notes.map(note => (
                        <div
                            key={note.id}
                            className={`reflection-note ${expandedNotes.includes(note.id) ? 'expanded' : ''}`}
                            onClick={() => toggleNoteExpansion(note.id)}
                        >
                            <p>{note.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="location-navigation">
                <button
                    className="prev-location"
                    disabled={location.id === 0}
                    onClick={onPrev}
                >
                    Previous Location
                </button>
                <button
                    className="next-location"
                    disabled={location.id === 2}
                    onClick={onNext}
                >
                    Next Location
                </button>
            </div>
        </div>
    );
};

export default LocationSection; 