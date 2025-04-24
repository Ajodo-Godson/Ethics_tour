import React from 'react';
import '../styles/StoryNote.css';

const StoryNote = ({ content }) => {
    return (
        <div className="story-note">
            <div className="story-note-content">
                {content}
            </div>
        </div>
    );
};

export default StoryNote; 