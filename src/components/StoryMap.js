import React, { useState, useEffect, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/StoryMap.css';
import '../styles/EnhancedStoryMap.css';
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
            description: 'Exploring whether to give when aid might enable harm',
            mapCoordinates: [37.783, -122.417],
            images: [
                './assets/tenderloin/Image1.webp',
                './assets/tenderloin/Image2.webp',
                './assets/tenderloin/Image3.jpg',
                './assets/tenderloin/Image4.jpeg',
                './assets/tenderloin/Image5.jpeg',
                './assets/tenderloin/Image6.jpeg',
                './assets/tenderloin/Image7.jpeg',
                './assets/tenderloin/Image8.jpg'
            ],
            notes: [
                { id: 1, content: 'From an effective altruism perspective, resources allocated here should maximize welfare for the greatest number of people.' },
                { id: 2, content: 'Kant would assert we still have an imperfect duty to give, regardless of potential misuse.' },
                { id: 3, content: 'Buddhism views giving (dāna) as the first of six pāramitās that constitute the path to awakening.' }
            ],
            analysis: <>
                <p>In the Tenderloin district, a neighborhood known for its concentration of unhoused individuals and visible substance use, we confront a difficult question: Are we still morally obligated to give aid if it might enable harm?</p>
                <p>Kant would assert that you still have the imperfect duty to give. The moral rightness of an action depends on whether it could be universalized to be a moral law, independently of its predicted effects. Concerns that "aid might enable harm" are subjective and lack the universality needed for a moral duty.</p>
                <p>An utilitarian approach considers whether the aid likely improves or worsens overall well-being. If giving is likely to result in harmful outcomes such as fostering addiction, it could decrease overall well-being and might be considered morally wrong.</p>
                <p>Buddhism suggests that giving (dana) generates good merit even if the recipient misuses the aid. However, Buddhist ethics also value wisdom. If giving directly enables harm, a more discerning act of compassion might be needed.</p>
            </>
        },
        {
            id: 1,
            name: 'Grocery Stores',
            description: 'Examining in-kind aid vs. monetary giving',
            mapCoordinates: [37.775, -122.419],
            images: [
                './assets/target/Image1.jpg',
                './assets/civic_plaza/Image6.jpeg',
                './assets/civic_plaza/Image7.jpeg',
                './assets/civic_plaza/Image8.jpeg'
            ],
            notes: [
                {
                    id: 1,
                    content: "When giving in-kind aid instead of cash, are we respecting the recipient's autonomy as a rational agent?"
                },
                { id: 2, content: "Studies suggest direct cash aid often improves outcomes like housing stability and food security." },
                { id: 3, content: "Buddhist ethics focuses on whether our action reduces suffering while maintaining compassion." }
            ],
            analysis: <>
                <p>Outside Target, a young mother cradles a child and quietly asks for milk. You consider buying food directly instead of giving cash. Is this more ethical?</p>
                <p>From a Kantian lens, when you give only in-kind aid, are you treating the recipient as a fellow rational being, or are you subtly asserting superiority in deciding what they should want? Kant would caution against paternalism while still acknowledging your imperfect duty to help.</p>
                <p>Effective altruists would approach this pragmatically: Which form of giving produces the most positive impact? Studies suggest direct cash aid often improves outcomes, but context matters. Giving a sandwich to someone who is clearly hungry may yield immediate utility.</p>
                <p>Buddhist ethics would focus on whether your action reduces suffering while maintaining compassion, acknowledging that intention shapes the moral quality of giving.</p>
            </>
        },
        {
            id: 2,
            name: 'Civic Plaza',
            description: 'Public giving and institutional responsibility',
            mapCoordinates: [37.779, -122.416],
            images: [
                './assets/civic_plaza/Image1.jpg',
                './assets/civic_plaza/Image2.jpeg',
                './assets/civic_plaza/Image3.jpeg',
                './assets/civic_plaza/Image4.jpeg',
                './assets/civic_plaza/Image5.jpeg',
                './assets/civic_plaza/Image6.jpeg',
                './assets/civic_plaza/Image7.jpeg',
                './assets/civic_plaza/Image8.jpeg',
                './assets/civic_plaza/Image9.jpg'
            ],
            notes: [
                { id: 1, content: 'Are we shifting responsibility from public institutions to individual donors, normalizing systemic failure?' },
                { id: 2, content: 'The visibility of giving in public spaces raises questions about motivation: duty or social recognition?' },
                { id: 3, content: 'Utilitarian perspectives ask whether public giving creates positive awareness or potentially negative consequences.' }
            ],
            analysis: <>
                <p>At Civic Plaza, we must ask: Are we shifting the burden of addressing homelessness from public institutions onto individual donors, thereby normalizing systemic failure?</p>
                <p>Kant might question whether we're giving from genuine duty or merely to appear virtuous in this public setting. The moral worth of an action comes from acting from duty, not from inclination or social pressure.</p>
                <p>Utilitarians would consider the broader implications. Does public giving create positive awareness or potentially negative consequences like disputes over resources?</p>
                <p>Buddhist ethics reminds us that our intentions matter - giving publicly with genuine compassion differs from giving for social recognition. Yet all beings deserve support regardless of where they're encountered.</p>
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

    const getPublicPath = (path) => {
        // Remove any leading slash to prevent double slashes
        const cleanPath = path.startsWith('/') ? path.substring(1) : path;
        return `${process.env.PUBLIC_URL}/${cleanPath}`;
    };

    return (
        <div className="storymap-container">
            <div
                className="storymap-introduction"
                style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                               url(${process.env.PUBLIC_URL}/assets/civic_plaza/Image1.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <h2>Ethical Frameworks for Giving</h2>
                <p>This ethics tour examines how different philosophical traditions—Kantian ethics, effective altruism, and Buddhist perspectives—guide us when confronted with requests for help on the streets of San Francisco.</p>
                <p>As we explore three key locations, we'll wrestle with complex questions: Should we give when our aid might enable harmful behaviors? Is in-kind assistance more ethical than cash? And are we shifting societal responsibilities to individual donors?</p>
                <div className="scroll-prompt">Explore the locations below to continue your ethical journey</div>
            </div>

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
                    <div className="section-cover" style={{
                        backgroundImage: `url(${getPublicPath(location.images[0].replace(process.env.PUBLIC_URL, ''))})`
                    }}>
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
                                <ImageGallery images={location.images.map(getPublicPath)} location={location.name} />
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            <div className="storymap-references">
                <h3>References & Further Reading</h3>
                <ul>
                    <li>Stohr, K. (2011). "Kantian Beneficence and the Problem of Obligatory Aid." Journal of Moral Philosophy, 8(1), 45-67.</li>
                    <li>Haushofer, J., & Shapiro, J. (2016). "The Short-Term Impact of Unconditional Cash Transfers to the Poor: Experimental Evidence from Kenya." The Quarterly Journal of Economics, 131(4), 1973-2042.</li>
                    <li>MacAskill, W. (2019). "Effective Altruism: Introduction." Essays in Philosophy, 20(1), 2.</li>
                </ul>
            </div>
        </div>
    );
};

export default StoryMap; 