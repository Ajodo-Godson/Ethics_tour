import React, { useState, useEffect, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/StoryMap.css';
import ImageGallery from './ImageGallery';
import StoryNote from './StoryNote';
import LoadingSpinner from './LoadingSpinner';

// Fix for default marker icons in Leaflet with webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Custom marker icon for character
const characterIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});

const StoryMap = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [geoJsonData, setGeoJsonData] = useState(null);
    const [mapRefs, setMapRefs] = useState({});
    const sectionRefs = useRef([]);

    // Define locations with useMemo to prevent recreation on every render
    const locations = useMemo(() => [
        {
            id: 0,
            name: 'Tenderloin',
            description: 'A neighborhood known for its high concentration of homeless individuals',
            mapCoordinates: [37.783, -122.417],
            images: [
                `${process.env.PUBLIC_URL}/assets/tenderloin/Image1.webp`,
                `${process.env.PUBLIC_URL}/assets/tenderloin/Image2.webp`,
                `${process.env.PUBLIC_URL}/assets/tenderloin/Image3.jpg`,
                `${process.env.PUBLIC_URL}/assets/tenderloin/Image4.jpeg`,
                `${process.env.PUBLIC_URL}/assets/tenderloin/Image5.jpeg`,
                `${process.env.PUBLIC_URL}/assets/tenderloin/Image6.jpeg`,
                `${process.env.PUBLIC_URL}/assets/tenderloin/Image7.jpeg`,
                `${process.env.PUBLIC_URL}/assets/tenderloin/Image8.jpg`
            ],
            notes: [
                { id: 1, content: 'From an effective altruism perspective, resources allocated here should maximize welfare for the greatest number of people.' },
                { id: 2, content: 'Questions arise about how to balance immediate relief versus addressing root causes of homelessness.' }
            ],
            analysis: <>
                <p>In the Tenderloin district, we observe the stark reality of homelessness and poverty in one of America's wealthiest cities. From an effective altruism perspective, the question becomes: how can we allocate resources to help the greatest number of people in the most efficient way?</p>
                <p>Utilitarian ethics would suggest that public resources should be directed toward solutions that provide the maximum benefit for the greatest number of people, which might include housing-first initiatives and mental health services rather than temporary shelters.</p>
            </>
        },
        {
            id: 1,
            name: 'Civic Plaza',
            description: 'A central public space where social services and outreach often take place',
            mapCoordinates: [37.779, -122.416],
            images: [
                `${process.env.PUBLIC_URL}/assets/civic_plaza/Image1.jpg`,
                `${process.env.PUBLIC_URL}/assets/civic_plaza/Image2.jpeg`,
                `${process.env.PUBLIC_URL}/assets/civic_plaza/Image3.jpeg`,
                `${process.env.PUBLIC_URL}/assets/civic_plaza/Image4.jpeg`,
                `${process.env.PUBLIC_URL}/assets/civic_plaza/Image5.jpeg`,
                `${process.env.PUBLIC_URL}/assets/civic_plaza/Image6.jpeg`,
                `${process.env.PUBLIC_URL}/assets/civic_plaza/Image7.jpeg`,
                `${process.env.PUBLIC_URL}/assets/civic_plaza/Image8.jpeg`,
                `${process.env.PUBLIC_URL}/assets/civic_plaza/Image9.jpg`
            ],
            notes: [
                { id: 1, content: 'How would a utilitarian approach evaluate the public resources spent on this plaza versus direct aid?' },
                { id: 2, content: 'The visibility of need in public spaces raises questions about social responsibility.' }
            ],
            analysis: <>
                <p>At Civic Plaza, the visibility of homelessness raises pressing ethical questions about social responsibility and public spaces. A utilitarian framework would evaluate the investments in this public space against direct aid to those in need.</p>
                <p>The question emerges: What obligations do civic institutions have to create public spaces that are accessible to all citizens, including the disadvantaged? How do we balance the comfort of some against the basic needs of others?</p>
            </>
        },
        {
            id: 2,
            name: 'Food Retailers',
            description: 'Grocery stores and fast food establishments near areas with homeless populations',
            mapCoordinates: [37.775, -122.419],
            images: [
                `${process.env.PUBLIC_URL}/assets/target/Image1.jpg`,
                `${process.env.PUBLIC_URL}/assets/civic_plaza/Image6.jpeg`,
                `${process.env.PUBLIC_URL}/assets/civic_plaza/Image7.jpeg`,
                `${process.env.PUBLIC_URL}/assets/civic_plaza/Image8.jpeg`
            ],
            notes: [
                { id: 1, content: 'How do grocery stores and fast food chains balance business interests with ethical responsibilities toward the hungry?' },
                { id: 2, content: 'Should food retailers be obligated to donate excess food rather than disposing of it?' }
            ],
            analysis: <>
                <p>Food retailers like Target, Trader Joe's, McDonald's and other establishments near homeless populations face unique ethical challenges. From a utilitarian perspective, we must consider how these businesses could maximize overall welfare.</p>
                <p>Questions arise about food waste, pricing policies, and whether these businesses have special obligations to address hunger in their communities. Some retailers donate excess food to shelters, while others cite liability concerns for not doing so - how do we evaluate these different approaches?</p>
            </>
        }
    ], []);

    // Load GeoJSON data
    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/assets/map/SanFrancisco.Neighborhoods.json`)
            .then(response => response.json())
            .then(data => {
                setGeoJsonData(data);
            })
            .catch(error => console.error('Error loading GeoJSON data:', error));
    }, []);

    // Set up observer for sections
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        // Store the current refs in a variable to use in the cleanup function
        const currentRefs = [...sectionRefs.current];

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = parseInt(entry.target.getAttribute('data-section'));
                    setCurrentSection(sectionId);
                    if (mapRefs[sectionId]) {
                        mapRefs[sectionId].flyTo(
                            locations[sectionId].mapCoordinates,
                            13,
                            { animate: true, duration: 1 }
                        );
                    }
                }
            });
        }, options);

        sectionRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            // Use the stored currentRefs instead of sectionRefs.current
            currentRefs.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [locations, mapRefs]);

    // Style function for GeoJSON
    const geoJsonStyle = (feature, sectionId) => {
        const neighborhood = feature.properties.neighborhood;
        const isCurrentNeighborhood = neighborhood && (
            (sectionId === 0 && neighborhood === 'Tenderloin') ||
            (sectionId === 1 && neighborhood === 'Civic Center') ||
            (sectionId === 2 && (
                neighborhood === 'Financial District' ||
                neighborhood === 'South of Market' ||
                neighborhood === 'Mission Bay'
            ))
        );

        return {
            fillColor: isCurrentNeighborhood ? '#ff4757' : '#3388ff',
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: isCurrentNeighborhood ? 0.7 : 0.3
        };
    };

    const setMapRef = (id, map) => {
        setMapRefs(prev => ({
            ...prev,
            [id]: map
        }));
    };

    const handleNavigate = (locationId) => {
        sectionRefs.current[locationId]?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="storymap-container">
            <nav className="storymap-nav">
                {locations.map((location, index) => (
                    <button
                        key={location.id}
                        className={`nav-item ${index === currentSection ? 'active' : ''}`}
                        onClick={() => handleNavigate(index)}
                    >
                        {location.name}
                    </button>
                ))}
            </nav>

            {locations.map((location, index) => (
                <section
                    key={location.id}
                    className="storymap-section"
                    ref={el => sectionRefs.current[index] = el}
                    data-section={index}
                >
                    <div className="section-cover" style={{ backgroundImage: `url(${location.images[0]})` }}>
                        <div className="section-cover-overlay">
                            <h2>{location.name}</h2>
                            <p>{location.description}</p>
                        </div>
                    </div>

                    <div className="section-content">
                        <div className="content-side">
                            <div className="ethical-analysis">
                                <h3>Ethical Analysis</h3>
                                {location.analysis}
                            </div>
                            <div className="notes-container">
                                {location.notes.map(note => (
                                    <StoryNote key={note.id} content={note.content} />
                                ))}
                            </div>
                        </div>

                        <div className="map-side">
                            <div className="map-container-leaflet">
                                {!geoJsonData ? (
                                    <LoadingSpinner />
                                ) : (
                                    <MapContainer
                                        center={location.mapCoordinates}
                                        zoom={13}
                                        style={{ height: '100%', width: '100%' }}
                                        whenCreated={(map) => setMapRef(index, map)}
                                        zoomControl={false}
                                    >
                                        <TileLayer
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                                        />
                                        <GeoJSON
                                            data={geoJsonData}
                                            style={(feature) => geoJsonStyle(feature, index)}
                                        />
                                        <Marker
                                            position={location.mapCoordinates}
                                            icon={characterIcon}
                                        >
                                            <Popup>
                                                <strong>{location.name}</strong><br />
                                                {location.description}
                                            </Popup>
                                        </Marker>
                                    </MapContainer>
                                )}
                            </div>

                            <div className="gallery-container">
                                <h3>Photo Gallery</h3>
                                <ImageGallery images={location.images} location={location.name} />
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default StoryMap; 