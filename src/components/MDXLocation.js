import React from 'react';
// Remove these unused imports
// import LoadingSpinner from './LoadingSpinner';
// import MDXGallery from './MDXGallery';

// Import the MDX content files directly
import TenderloinContent from './MDXContent/TenderloinContent';
import GroceryContent from './MDXContent/GroceryContent';
import CivicContent from './MDXContent/CivicContent';

const MDXComponents = {
    tenderloin: TenderloinContent,
    grocery: GroceryContent,
    civic: CivicContent
};

const MDXLocation = ({ location }) => {
    // Map the location.id to the MDX component name
    const locationNames = ['tenderloin', 'grocery', 'civic'];
    const MDXComponent = MDXComponents[locationNames[location.id]];

    if (!MDXComponent) {
        return <div>No content available for this location.</div>;
    }

    return (
        <div className="location-content mdx-content">
            <MDXComponent />
        </div>
    );
};

export default MDXLocation; 