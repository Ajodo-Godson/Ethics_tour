import React from 'react';
import ImageGallery from './ImageGallery';

const LocationSection = ({ location, expandedNotes, toggleNoteExpansion, getPublicPath }) => {
    return (
        <div className="location-content">
            <div className="gallery-wrapper">
                <ImageGallery
                    images={location.images.map(getPublicPath)}
                    location={location.name}
                />
            </div>

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
        </div>
    );
};

export default LocationSection; 