import React from 'react';
import '../styles/Footnote.css';

// Component for footnote references in text
export const FootnoteRef = ({ id, children }) => (
    <span className="sidenote-ref" id={`footnote-ref-${id}`}>
        <sup>{id}</sup>
        <span className="sidenote" id={`sidenote-${id}`}>
            {children || `Note ${id}`}
        </span>
    </span>
);

// Component for sidenotes (replaces the old footnote system)
export const Footnote = ({ id, children }) => children;

// This is kept for backward compatibility but won't be used in the new design
export const FootnotesSection = ({ children }) => null; 