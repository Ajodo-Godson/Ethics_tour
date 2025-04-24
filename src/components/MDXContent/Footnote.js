import React from 'react';

// Component for footnote references in the text
export const FootnoteRef = ({ id }) => {
    const handleClick = (e) => {
        e.preventDefault();
        const footnote = document.getElementById(`footnote-${id}`);
        if (footnote) {
            footnote.scrollIntoView({ behavior: 'smooth' });
            footnote.classList.add('highlighted');
            setTimeout(() => {
                footnote.classList.remove('highlighted');
            }, 2000);
        }
    };

    return (
        <sup className="footnote-ref" id={`footnote-ref-${id}`}>
            <a href={`#footnote-${id}`} onClick={handleClick}>[{id}]</a>
        </sup>
    );
};

// Component for the actual footnote content
export const Footnote = ({ id, children }) => {
    const handleBackClick = (e) => {
        e.preventDefault();
        const ref = document.getElementById(`footnote-ref-${id}`);
        if (ref) {
            ref.scrollIntoView({ behavior: 'smooth' });
            ref.classList.add('highlighted');
            setTimeout(() => {
                ref.classList.remove('highlighted');
            }, 2000);
        }
    };

    return (
        <li id={`footnote-${id}`} className="footnote-item">
            <sup>{id}</sup> {children}
            <a href={`#footnote-ref-${id}`} onClick={handleBackClick} className="footnote-back-link" aria-label={`Back to reference ${id}`}>↩</a>
        </li>
    );
};

// Component for the footnotes section
export const FootnotesSection = ({ children }) => {
    return (
        <div className="footnotes-section">
            <hr />
            <h3>Footnotes</h3>
            <ol className="footnotes-list">
                {children}
            </ol>
        </div>
    );
}; 