import React, { useState } from 'react';
import '../styles/Sidenote.css';

/**
 * Sidenote component for displaying marginal notes in MDX content
 * @param {Object} props
 * @param {String|React.ReactNode} props.children The note content
 * @param {String} props.id Optional unique identifier
 * @param {String} props.label Optional custom label
 */
const Sidenote = ({ children, id, label }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const noteId = id || Math.random().toString(36).substr(2, 9);
    const noteLabel = label || noteId.slice(0, 2);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <sup
                className="sidenote-ref"
                id={`ref-${noteId}`}
                onClick={toggleExpanded}
                aria-controls={`note-${noteId}`}
                aria-expanded={isExpanded}
            >
                {noteLabel}
            </sup>
            <span
                className={`sidenote ${isExpanded ? 'expanded' : ''}`}
                id={`note-${noteId}`}
                aria-labelledby={`ref-${noteId}`}
            >
                <sup className="sidenote-number">{noteLabel}</sup>
                {children}
            </span>
        </>
    );
};

export default Sidenote; 