import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Sidenote from './Sidenote';
import MDXGallery from './MDXGallery';
import StoryNote from './StoryNote';
import References from './References';

// Define custom components that will be used in MDX files
const components = {
    h1: ({ children, ...props }) => <h1 className="mdx-h1" {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 className="mdx-h2" {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 className="mdx-h3" {...props}>{children}</h3>,
    h4: ({ children, ...props }) => <h4 className="mdx-h4" {...props}>{children}</h4>,
    p: ({ children, ...props }) => <p className="mdx-p" {...props}>{children}</p>,
    ul: ({ children, ...props }) => <ul className="mdx-ul" {...props}>{children}</ul>,
    ol: ({ children, ...props }) => <ol className="mdx-ol" {...props}>{children}</ol>,
    li: ({ children, ...props }) => <li className="mdx-li" {...props}>{children}</li>,
    blockquote: ({ children, ...props }) => <blockquote className="mdx-blockquote" {...props}>{children}</blockquote>,
    // Add MDXGallery
    Gallery: MDXGallery,
    // Ethical perspective component
    EthicalPerspective: ({ type, title, children }) => (
        <div className={`framework ${type}`}>
            <h4>{title}</h4>
            <div>{children}</div>
        </div>
    ),
    // Add a Citation component
    Citation: ({ author, year, title, source, link }) => (
        <div className="citation">
            <p>
                {author} ({year}). <em>{title}</em>. {source}.
                {link && <a href={link} target="_blank" rel="noopener noreferrer"> Link</a>}
            </p>
        </div>
    ),
    Sidenote,
    StoryNote,
    References
};

const MDXProviderWrapper = ({ children }) => (
    <MDXProvider components={components}>
        {children}
    </MDXProvider>
);

export default MDXProviderWrapper; 