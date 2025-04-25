import React from 'react';
import '../styles/Footnote.css';

// Component for footnote references in text
export const FootnoteRef = ({ id }) => (
    <sup className="footnote-ref">
        <a href={`#footnote-${id}`} id={`footnote-ref-${id}`}>
            [{id}]
        </a>
    </sup>
);

// Component for individual footnotes
export const Footnote = ({ id, children }) => (
    <li id={`footnote-${id}`} className="footnote-item">
        <a href={`#footnote-ref-${id}`} className="footnote-back-link">
            [{id}]
        </a>{' '}
        {children}
    </li>
);

// Container for all footnotes
export const FootnotesSection = ({ children }) => (
    <div className="footnotes-section">
        <h3>Notes</h3>
        <ol className="footnotes-list">{children}</ol>
    </div>
); 