import React, { useEffect, useState } from 'react';
import '../styles/LoadingSpinner.css';

const LoadingSpinner = () => {
    const [isVisible, setIsVisible] = useState(true);

    // Auto-hide spinner after 5 seconds to prevent endless spinning
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) {
        return <div className="spinner-placeholder">Map Loading...</div>;
    }

    return (
        <div className="spinner-container">
            <div className="spinner"></div>
            <p>Loading map...</p>
        </div>
    );
};

export default LoadingSpinner; 