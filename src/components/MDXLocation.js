import React from 'react';
import { MDXProvider } from '@mdx-js/react';
// Remove these unused imports
// import LoadingSpinner from './LoadingSpinner';
// import MDXGallery from './MDXGallery';

// Import React components - we'll prioritize these
import TenderloinContent from './MDXContent/TenderloinContent';
import GroceryContent from './MDXContent/GroceryContent';
import CivicContent from './MDXContent/CivicContent';
import IntroductionContent from './MDXContent/IntroductionContent';

// Fix the component mapping to ensure exact key matching
const MDXComponents = {
    tenderloin: TenderloinContent,
    grocery: GroceryContent,
    civic: CivicContent,
    // Make sure this key matches exactly what's used in your locationData
    introduction: IntroductionContent
};

const MDXLocation = ({ location }) => {
    console.log("MDXLocation received:", location);

    if (!location) {
        console.error("No location provided to MDXLocation");
        return <div>No location data</div>;
    }

    // Use direct component mapping instead of MDX files
    const getMDXContent = () => {
        switch (location.id) {
            case 'tenderloin':
            case 0:
            case '0':
                return <TenderloinContent />;
            case 'grocery':
            case 2:
            case '2':
                return <GroceryContent />;
            case 'civic':
            case 1:
            case '1':
                return <CivicContent />;
            case 'introduction':
                return <IntroductionContent />;
            default:
                console.warn("Unknown location ID:", location.id);
                return <div>Unknown location: {location.id}</div>;
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