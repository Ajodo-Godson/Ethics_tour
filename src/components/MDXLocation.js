import React from 'react';
import { MDXProvider } from '@mdx-js/react';
// Remove these unused imports
// import LoadingSpinner from './LoadingSpinner';
// import MDXGallery from './MDXGallery';

// Import React components - we'll prioritize these
import TenderloinContent from './MDXContent/TenderloinContent';
import GroceryContent from './MDXContent/GroceryContent';
// Remove unused CivicContent import
import IntroductionContent from './MDXContent/IntroductionContent';
// Import will be uncommented when component is ready
// import CivicContent from './MDXContent/CivicContent';

// Remove this unused variable
// const MDXComponents = {
//     tenderloin: TenderloinContent,
//     grocery: GroceryContent,
//     civic: CivicContent,
//     introduction: IntroductionContent
// };

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
            // Uncomment when CivicContent is ready
            // case 'civic':
            //     return <CivicContent />;
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