import React, { useState, useEffect, useRef, useCallback } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/StoryMapModern.css';

// Import custom components
import TourMap from './TourMap';
import Location from './Location';
import locationData from '../data/locationData';
import TableOfContents from './TableOfContents';

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
    const [showMap, setShowMap] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [disableScrollDetection, setDisableScrollDetection] = useState(false);
    const [showToc, setShowToc] = useState(true);

    const sectionRefs = useRef(locationData.map(() => React.createRef()));

    // Update progress indicator
    useEffect(() => {
        const progressEl = document.querySelector('.progress-indicator');
        if (progressEl) {
            const progress = ((currentLocationIndex) / (locationData.length - 1)) * 100;
            progressEl.style.width = `${progress}%`;
        }

        // Dispatch event to notify App component about location change
        window.dispatchEvent(new CustomEvent('locationChange', {
            detail: { index: currentLocationIndex }
        }));

        // Update section progress for animations
        setSectionProgress(0);
        const timer = setTimeout(() => {
            setSectionProgress(100);
        }, 100);

        return () => clearTimeout(timer);
    }, [currentLocationIndex]);

    // Update the scroll detection function for better synchronization
    useEffect(() => {
        const handleScroll = () => {
            // Skip scroll detection if navigating via buttons
            if (disableScrollDetection) return;

            const windowHeight = window.innerHeight;
            let closestSectionIndex = currentLocationIndex;
            let closestDistance = Infinity;

            // Find the section that's closest to being centered in the viewport
            sectionRefs.current.forEach((ref, index) => {
                if (!ref.current) return;

                const rect = ref.current.getBoundingClientRect();
                const sectionCenter = rect.top + rect.height / 2;
                const viewportCenter = windowHeight / 2;
                const distance = Math.abs(sectionCenter - viewportCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestSectionIndex = index;
                }
            });

            // Only update if we have a new section
            if (closestSectionIndex !== currentLocationIndex) {
                setCurrentLocationIndex(closestSectionIndex);

                // Explicitly dispatch the event for App.js
                window.dispatchEvent(new CustomEvent('locationChange', {
                    detail: { index: closestSectionIndex }
                }));
            }
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

    const toggleMapVisibility = useCallback(() => {
        setShowMap(prevShowMap => {
            // If we're showing the map, we should refresh it
            if (!prevShowMap && mapInstance) {
                setTimeout(() => {
                    mapInstance.invalidateSize();
                    console.log("Map refreshed after showing");
                }, 300);
            }
            return !prevShowMap;
        });
    }, [mapInstance]);

    const toggleToc = useCallback(() => {
        setShowToc(prev => !prev);
    }, []);

    // Use the map instance if needed
    useEffect(() => {
        if (mapInstance && locationData[currentLocationIndex]) {
            const location = locationData[currentLocationIndex];
            mapInstance.flyTo([location.lat, location.lng], 15, {
                duration: 1.5
            });
        }
    }, [currentLocationIndex, mapInstance]);

    // Add this troubleshooting code to your StoryMap component
    useEffect(() => {
        // Log the map container status
        const mapSidebar = document.querySelector('.map-sidebar');
        if (mapSidebar) {
            console.log('Map sidebar dimensions:', {
                width: mapSidebar.offsetWidth,
                height: mapSidebar.offsetHeight,
                visible: !mapSidebar.classList.contains('hidden')
            });

            // Force re-render of map if needed
            if (mapInstance) {
                setTimeout(() => {
                    mapInstance.invalidateSize();
                    console.log('Map size invalidated to force refresh');
                }, 500);
            }
        }
    }, [mapInstance, showMap]);

    // Add this function to your component
    const handleMapLoaded = useCallback((map) => {
        console.log("Map loaded successfully");
        setMapInstance(map);

        // Force a resize on the map after a short delay
        setTimeout(() => {
            if (map) {
                map.invalidateSize();
                console.log("Map size refreshed");
            }
        }, 300);
    }, []);

    // Add event listener to respond to navigation from the header
    useEffect(() => {
        const handleNavigate = (event) => {
            goToLocation(event.detail.index);
        };

        window.addEventListener('navigateToLocation', handleNavigate);

        return () => {
            window.removeEventListener('navigateToLocation', handleNavigate);
        };
    }, [goToLocation]);

    return (
        <div className="storymap-modern-container">
            <div className={`map-sidebar ${showMap ? 'visible' : 'hidden'}`}>
                <TourMap
                    activeLocation={currentLocationIndex}
                    locations={locationData}
                    setMapRef={handleMapLoaded}
                    scrollToLocation={goToLocation}
                />
                <button
                    className="toggle-map-btn"
                    onClick={toggleMapVisibility}
                    aria-label={showMap ? "Hide map" : "Show map"}
                >
                    {showMap ? "←" : "📍"}
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

            <div className={`table-of-contents ${showToc ? 'visible' : ''}`}>
                <TableOfContents
                    locations={locationData}
                    currentIndex={currentLocationIndex}
                    onNavigate={goToLocation}
                />
            </div>

            <button
                className="toc-toggle"
                onClick={toggleToc}
                aria-label={showToc ? "Hide navigation" : "Show navigation"}
            >
                {showToc ? "×" : "≡"}
            </button>
        </div>
    );
};

export default StoryMap; 