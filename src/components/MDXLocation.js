import React from 'react';
import { MDXProvider } from '@mdx-js/react';
// Remove these unused imports
// import LoadingSpinner from './LoadingSpinner';
// import MDXGallery from './MDXGallery';

// Import React components - we'll prioritize these
import TenderloinContent from './MDXContent/TenderloinContent';
import GroceryContent from './MDXContent/GroceryContent';
import IntroductionContent from './MDXContent/IntroductionContent';
import CivicContent from './MDXContent/CivicContent';
import ConclusionContent from './MDXContent/ConclusionContent';

const MDXLocation = ({ location }) => {
    console.log("MDXLocation received:", location);

    if (!location) {
        console.error("No location provided to MDXLocation");
        return <div>No location data</div>;
    }

    // Use direct component mapping instead of MDX files
    const getMDXContent = () => {
        switch (location.id) {
            case 'introduction':
                return <IntroductionContent />;
            case 'tenderloin':
                return <TenderloinContent />;
            case 'grocery':
                return <GroceryContent />;
            case 'civic':
                return <CivicContent />;
            case 'conclusion':
                return <ConclusionContent />;
            default:
                console.warn("Unknown location ID:", location.id);
                return <div>Content not found for {location.id}</div>;
        }
    };

    return (
        <MDXProvider>
            <div className="mdx-content">
                {getMDXContent()}
            </div>
        </MDXProvider>
    );
};

export default MDXLocation; 