import React, { useState } from 'react';

// A component to export citations in various formats
const CitationExport = ({ citations }) => {
    const [format, setFormat] = useState('mla');
    const [copied, setCopied] = useState(false);

    // Format citations based on selected style
    const getFormattedCitations = () => {
        switch (format) {
            case 'apa':
                return citations.map(cit =>
                    `${cit.author} (${cit.year}). ${cit.title}. ${cit.source ? cit.source + '.' : ''} ${cit.link ? cit.link : ''}`
                ).join('\n\n');
            case 'chicago':
                return citations.map(cit =>
                    `${cit.author}. "${cit.title}." ${cit.source ? 'In ' + cit.source + ',' : ''} ${cit.year}. ${cit.link ? cit.link : ''}`
                ).join('\n\n');
            case 'mla':
            default:
                return citations.map(cit =>
                    `${cit.author}. "${cit.title}." ${cit.source ? cit.source + ', ' : ''} ${cit.year}. ${cit.link ? cit.link : ''}`
                ).join('\n\n');
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(getFormattedCitations())
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => console.error('Could not copy text: ', err));
    };

    return (
        <div className="citation-export">
            <h3>Export Citations</h3>
            <div className="citation-export-controls">
                <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                    aria-label="Select citation format"
                >
                    <option value="mla">MLA</option>
                    <option value="apa">APA</option>
                    <option value="chicago">Chicago</option>
                </select>
                <button
                    onClick={copyToClipboard}
                    className={copied ? 'copied' : ''}
                >
                    {copied ? 'Copied!' : 'Copy Citations'}
                </button>
            </div>
        </div>
    );
};

export default CitationExport; 