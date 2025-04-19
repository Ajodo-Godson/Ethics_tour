import React from 'react';
import '../styles/StoryNote.css';

const StoryNote = ({ content }) => {
    // Generate a random rotation between -5 and 5 degrees for a more natural look
    const rotation = Math.random() * 10 - 5;

    return (
        <div
            className="story-note"
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            <p>{content}</p>
        </div>
    );
};

export default StoryNote; 