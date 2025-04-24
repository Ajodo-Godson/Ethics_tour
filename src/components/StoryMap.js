import React, { useState, useEffect, useRef, useCallback } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/StoryMapModern.css';

// Import custom components
import TourMap from './TourMap';
import Location from './Location';
import locationData from '../data/locationData';

// Fix for default marker icons in Leaflet with webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const StoryMap = () => {
    const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
    const [mapInstance, setMapInstance] = useState(null);
    const [sectionProgress, setSectionProgress] = useState(0);
    const [showMap, setShowMap] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [disableScrollDetection, setDisableScrollDetection] = useState(false);

    const sectionRefs = useRef(locationData.map(() => React.createRef()));

    // Update progress indicator
    useEffect(() => {
        const progressEl = document.querySelector('.progress-indicator');
        if (progressEl) {
            const progress = ((currentLocationIndex) / (locationData.length - 1)) * 100;
            progressEl.style.width = `${progress}%`;
        }

        // Update section progress for animations
        setSectionProgress(0);
        const timer = setTimeout(() => {
            setSectionProgress(100);
        }, 100);

        return () => clearTimeout(timer);
    }, [currentLocationIndex]);

    // Handle scrolling between sections - with improvements
    useEffect(() => {
        const handleScroll = () => {
            // Skip scroll detection if navigating via buttons
            if (disableScrollDetection) return;

            const windowHeight = window.innerHeight;

            // Determine which section is currently in view
            sectionRefs.current.forEach((ref, index) => {
                if (!ref.current) return;

                const rect = ref.current.getBoundingClientRect();
                const sectionTop = rect.top;
                const sectionHeight = rect.height;

                // Only change the index if we're clearly viewing a different section
                // This prevents erratic behavior when scrolling
                if (sectionTop <= windowHeight * 0.3 && sectionTop > -sectionHeight * 0.7) {
                    if (currentLocationIndex !== index) {
                        setCurrentLocationIndex(index);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentLocationIndex, disableScrollDetection]);

    // Navigation functions - updated for better control
    const goToLocation = useCallback((index) => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentLocationIndex(index);

        // Disable scroll detection temporarily
        setDisableScrollDetection(true);

        // Smooth scroll to the section
        if (sectionRefs.current[index] && sectionRefs.current[index].current) {
            // Use a more forceful scrolling approach
            sectionRefs.current[index].current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Re-enable scroll detection after transition completes
        setTimeout(() => {
            setIsTransitioning(false);
            setDisableScrollDetection(false);
        }, 1000);
    }, [isTransitioning]);

    const goToNextLocation = useCallback(() => {
        if (currentLocationIndex < locationData.length - 1) {
            goToLocation(currentLocationIndex + 1);
        }
    }, [currentLocationIndex, goToLocation]);

    const goToPrevLocation = useCallback(() => {
        if (currentLocationIndex > 0) {
            goToLocation(currentLocationIndex - 1);
        }
    }, [currentLocationIndex, goToLocation]);

    const toggleMapVisibility = () => {
        setShowMap(!showMap);
    };

    // Use the map instance if needed
    useEffect(() => {
        if (mapInstance && locationData[currentLocationIndex]) {
            const location = locationData[currentLocationIndex];
            mapInstance.flyTo([location.lat, location.lng], 15, {
                duration: 1.5
            });
        }
    }, [currentLocationIndex, mapInstance]);

    return (
        <div className="storymap-modern-container">
            <div className={`map-sidebar ${showMap ? 'visible' : 'hidden'}`}>
                <TourMap
                    activeLocation={currentLocationIndex}
                    locations={locationData}
                    setMapRef={setMapInstance}
                    scrollToLocation={goToLocation}
                />
                <button
                    className="toggle-map-btn"
                    onClick={toggleMapVisibility}
                    aria-label={showMap ? "Hide map" : "Show map"}
                >
                    📍
                </button>
            </div>

            <div className="story-sections">
                {locationData.map((location, index) => (
                    <section
                        key={location.id}
                        ref={sectionRefs.current[index]}
                        className={`story-section ${index === currentLocationIndex ? 'active' : ''}`}
                        style={{
                            '--location-color': location.color,
                            '--location-color-rgb': location.colorRgb || '52, 152, 219'
                        }}
                    >
                        <div className="section-content">
                            <Location
                                location={location}
                                isActive={index === currentLocationIndex}
                                onNext={goToNextLocation}
                                onPrev={goToPrevLocation}
                                progress={index === currentLocationIndex ? sectionProgress : 0}
                            />
                        </div>

                        {index < locationData.length - 1 && (
                            <div className="scroll-indicator">
                                <button
                                    onClick={goToNextLocation}
                                    aria-label="Go to next location"
                                    className="scroll-btn"
                                >
                                    ↓
                                    <span>Next Location</span>
                                </button>
                            </div>
                        )}

                        {index > 0 && (
                            <div className="scroll-up-indicator">
                                <button
                                    onClick={goToPrevLocation}
                                    aria-label="Go to previous location"
                                    className="scroll-btn"
                                >
                                    ↑
                                    <span>Previous Location</span>
                                </button>
                            </div>
                        )}
                    </section>
                ))}

                {/* Conclusion section */}
                <section className="story-section conclusion">
                    <div className="section-content">
                        <div className="conclusion-card">
                            <h2>Your Journey Complete</h2>
                            <p>
                                You've explored ethical perspectives on giving in San Francisco.
                                We hope this tour has provided you with new frameworks to consider
                                when navigating complex moral questions about addressing needs in urban spaces.
                            </p>
                            <div className="conclusion-actions">
                                <button onClick={() => goToLocation(0)}>Restart Tour</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default StoryMap; 