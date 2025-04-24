import React, { useState, useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/ImprovedStoryMap.css';

// Import custom components
import LocationSection from './LocationSection';
import TourMap from './TourMap';
import References from './References';

// Import custom hooks and data
import useLocationObserver from '../hooks/useLocationObserver';
import locationData from '../data/locationData';

// Fix for default marker icons in Leaflet with webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const StoryMap = () => {
    const [activeLocation, setActiveLocation] = useState(0);
    const [geoJsonData, setGeoJsonData] = useState(null);
    const [mapRef, setMapRef] = useState(null);
    const [expandedNotes, setExpandedNotes] = useState([]);

    // Add refs for each location section
    const locationRefs = useRef([]);
    const observerRef = useRef(null);

    // Use our custom location observer hook
    useLocationObserver(locationRefs, observerRef, setActiveLocation, locationData, mapRef);

    // Load GeoJSON data for map
    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/assets/map/SanFrancisco.Neighborhoods.json`)
            .then(response => response.json())
            .then(data => {
                setGeoJsonData(data);
            })
            .catch(error => console.error('Error loading GeoJSON data:', error));
    }, []);

    // Style function for GeoJSON
    const geoJsonStyle = (feature) => {
        const neighborhood = feature.properties.neighborhood;
        const isHighlighted =
            (activeLocation === 0 && neighborhood === 'Tenderloin') ||
            (activeLocation === 1 && neighborhood === 'Civic Center') ||
            (activeLocation === 2 && (
                neighborhood === 'Financial District' ||
                neighborhood === 'South of Market' ||
                neighborhood === 'Mission Bay'
            ));

        return {
            fillColor: isHighlighted ? locationData[activeLocation].color : '#f1f2f6',
            weight: isHighlighted ? 2 : 1,
            opacity: 1,
            color: isHighlighted ? locationData[activeLocation].color : '#dfe4ea',
            fillOpacity: isHighlighted ? 0.5 : 0.2
        };
    };

    // Helper function to toggle note expansion
    const toggleNoteExpansion = (noteId) => {
        setExpandedNotes(prev =>
            prev.includes(noteId)
                ? prev.filter(id => id !== noteId)
                : [...prev, noteId]
        );
    };

    // Helper function to get public path URL
    const getPublicPath = (path) => `${process.env.PUBLIC_URL}/${path}`;

    // Scroll to a specific location section
    const scrollToLocation = (locationId) => {
        if (locationRefs.current[locationId]) {
            locationRefs.current[locationId].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="improved-storymap-container clean-design">
            {/* Tour Header */}
            <div className="tour-header">
                <h1>Ethics Tour: Street-Level Giving in San Francisco</h1>
                <p>Examining ethical dilemmas through Kantian, Utilitarian, and Buddhist perspectives</p>
            </div>

            {/* Location Navigation Dots */}
            <div className="location-progress sticky-nav">
                {locationData.map(location => (
                    <button
                        key={location.id}
                        className={`location-dot ${activeLocation === location.id ? 'active' : ''}`}
                        style={{ '--location-color': location.color }}
                        onClick={() => scrollToLocation(location.id)}
                        aria-label={`Go to ${location.name}`}
                    >
                        <span className="location-label">{location.name}</span>
                    </button>
                ))}
            </div>

            {/* Main Content - Clean Layout */}
            <div className="clean-layout">
                {/* Map Component */}
                <TourMap
                    geoJsonData={geoJsonData}
                    activeLocation={activeLocation}
                    locations={locationData}
                    setMapRef={setMapRef}
                    scrollToLocation={scrollToLocation}
                    geoJsonStyle={geoJsonStyle}
                />

                {/* Location Sections */}
                <div className="scrollable-locations">
                    {locationData.map((location, index) => (
                        <div
                            key={location.id}
                            ref={el => locationRefs.current[index] = el}
                            data-location-id={location.id}
                            className="location-section"
                            style={{ '--location-color': location.color }}
                        >
                            <div className="location-header">
                                <h2>{location.name}</h2>
                                <p>{location.description}</p>
                            </div>

                            {/* Location Content Component */}
                            <LocationSection
                                location={location}
                                expandedNotes={expandedNotes}
                                toggleNoteExpansion={toggleNoteExpansion}
                                getPublicPath={getPublicPath}
                            />
                        </div>
                    ))}

                    {/* References Component */}
                    <References />
                </div>
            </div>
        </div>
    );
};

export default StoryMap; 