import React from 'react';
// Remove these unused imports
// import LoadingSpinner from './LoadingSpinner';
// import MDXGallery from './MDXGallery';

// Import the MDX content files directly
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

    // Direct component mapping for all possible location IDs
    if (location.id === "introduction") {
        return (
            <div className="location-content mdx-content">
                <IntroductionContent />
            </div>
        );
    }

    // For numbered location IDs (0, 1, 2)
    if (location.id === 0 || location.id === '0') {
        return (
            <div className="location-content mdx-content">
                <TenderloinContent />
            </div>
        );
    }

    if (location.id === 1 || location.id === '1') {
        return (
            <div className="location-content mdx-content">
                <CivicContent />
            </div>
        );
    }

    if (location.id === 2 || location.id === '2') {
        return (
            <div className="location-content mdx-content">
                <GroceryContent />
            </div>
        );
    }

    // Fallback for any other ID
    console.warn("Unknown location ID:", location.id);
    return (
        <div className="location-content mdx-content">
            <IntroductionContent />
        </div>
    );
};

export default MDXLocation; 