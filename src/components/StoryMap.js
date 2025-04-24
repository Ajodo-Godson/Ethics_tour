import React, { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/ImprovedStoryMap.css';
import ImageGallery from './ImageGallery';
import LoadingSpinner from './LoadingSpinner';

// Fix for default marker icons in Leaflet with webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Custom marker icon for locations
const locationIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});

const StoryMap = () => {
    const [activeLocation, setActiveLocation] = useState(0);
    const [geoJsonData, setGeoJsonData] = useState(null);
    const [mapRef, setMapRef] = useState(null);
    const [isFullMapView, setIsFullMapView] = useState(false);
    const [expandedNotes, setExpandedNotes] = useState([]);

    // Define tour locations
    const locations = useMemo(() => [
        {
            id: 0,
            name: 'Tenderloin',
            description: 'Ethical dilemmas when giving might enable harm',
            centralQuestion: 'Are we morally obligated to give if our aid might enable harmful behaviors?',
            mapCoordinates: [37.783, -122.417],
            color: '#ff6b6b',  // Distinctive color for each location
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
            analysis: {
                kantian: {
                    title: 'Kantian Perspective',
                    text: 'Kant would assert that you still have the imperfect duty to give. As Stohr (2011) explains, the moral rightness of an action depends on whether it could be universalized to be a moral law, independently of its predicted effects. Concerns that "aid might enable harm" are subjective and lack the universality needed for a moral duty.'
                },
                utilitarian: {
                    title: 'Utilitarian Approach',
                    text: 'A utilitarian approach considers whether the aid likely improves or worsens overall well-being. If giving is likely to result in harmful outcomes such as fostering addiction, it could decrease overall well-being and might be considered morally wrong, as described in Beauchamp\'s (2008) analysis of beneficence.'
                },
                buddhist: {
                    title: 'Buddhist View',
                    text: 'Buddhist texts on giving (dāna) from the Aṅguttaranikāya suggest that giving generates good merit even if the recipient misuses the aid. However, Buddhist ethics also value wisdom. If giving directly enables harm, a more discerning act of compassion might be needed.'
                }
            }
        },
        {
            id: 1,
            name: 'Grocery Stores',
            description: 'In-kind aid vs. monetary assistance',
            centralQuestion: 'Should we only give in-kind aid, such as food, water or health kits, which cannot be misused?',
            color: '#48dbfb',
            mapCoordinates: [37.775, -122.419],
            images: [
                './assets/target/Image1.jpg',
                './assets/civic_plaza/Image6.jpeg',
                './assets/civic_plaza/Image7.jpeg',
                './assets/civic_plaza/Image8.jpeg'
            ],
            notes: [
                { id: 1, content: "When giving in-kind aid instead of cash, are we respecting the recipient's autonomy as a rational agent?" },
                { id: 2, content: "Studies suggest direct cash aid often improves outcomes like housing stability and food security." },
                { id: 3, content: "Buddhist ethics focuses on whether our action reduces suffering while maintaining compassion." }
            ],
            analysis: {
                kantian: {
                    title: 'Kantian Perspective',
                    text: 'From a Kantian lens, when you give only in-kind aid, are you treating the recipient as a fellow rational being, or are you subtly asserting superiority in deciding what they should want? Kant would caution against paternalism while still acknowledging your imperfect duty to help.'
                },
                utilitarian: {
                    title: 'Utilitarian Approach',
                    text: 'Effective altruists would approach this pragmatically: Which form of giving produces the most positive impact? Studies suggest direct cash aid often improves outcomes, but context matters. Giving a sandwich to someone who is clearly hungry may yield immediate utility.'
                },
                buddhist: {
                    title: 'Buddhist View',
                    text: 'Buddhist ethics would focus on whether your action reduces suffering while maintaining compassion, acknowledging that intention shapes the moral quality of giving.'
                }
            }
        },
        {
            id: 2,
            name: 'Civic Plaza',
            description: 'Public giving & institutional responsibility',
            centralQuestion: 'Are we shifting the burden of addressing homelessness and poverty from public institutions onto individual donors, thereby normalizing systemic failure?',
            color: '#1dd1a1',
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
            analysis: {
                kantian: {
                    title: 'Kantian Perspective',
                    text: 'Kant might question whether we\'re giving from genuine duty or merely to appear virtuous in this public setting. The moral worth of an action comes from acting from duty, not from inclination or social pressure.'
                },
                utilitarian: {
                    title: 'Utilitarian Approach',
                    text: 'Utilitarians would consider the broader implications. Does public giving create positive awareness or potentially negative consequences like disputes over resources?'
                },
                buddhist: {
                    title: 'Buddhist View',
                    text: 'Buddhist ethics reminds us that our intentions matter - giving publicly with genuine compassion differs from giving for social recognition. Yet all beings deserve support regardless of where they\'re encountered.'
                }
            }
        }
    ], []);

    // Load GeoJSON data for map
    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/assets/map/SanFrancisco.Neighborhoods.json`)
            .then(response => response.json())
            .then(data => {
                setGeoJsonData(data);
            })
            .catch(error => console.error('Error loading GeoJSON data:', error));
    }, []);

    // Update map when active location changes
    useEffect(() => {
        if (mapRef && !isFullMapView) {
            mapRef.flyTo(
                locations[activeLocation].mapCoordinates,
                13,
                { animate: true, duration: 1.5 }
            );
        }
    }, [activeLocation, locations, mapRef, isFullMapView]);

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
            fillColor: isHighlighted ? locations[activeLocation].color : '#dfe6e9',
            weight: isHighlighted ? 3 : 1,
            opacity: 1,
            color: 'white',
            dashArray: isHighlighted ? '0' : '3',
            fillOpacity: isHighlighted ? 0.7 : 0.3
        };
    };

    const toggleNoteExpansion = (noteId) => {
        setExpandedNotes(prev =>
            prev.includes(noteId)
                ? prev.filter(id => id !== noteId)
                : [...prev, noteId]
        );
    };

    const toggleMapView = () => {
        setIsFullMapView(!isFullMapView);

        // If returning from full map view, ensure we re-center on the active location
        if (isFullMapView && mapRef) {
            setTimeout(() => {
                mapRef.invalidateSize();
                mapRef.flyTo(
                    locations[activeLocation].mapCoordinates,
                    13,
                    { animate: true }
                );
            }, 100);
        }
    };

    const getPublicPath = (path) => {
        const cleanPath = path.startsWith('/') ? path.substring(1) : path;
        return `${process.env.PUBLIC_URL}/${cleanPath}`;
    };

    return (
        <div className="improved-storymap-container">
            {/* Tour Navigation */}
            <header className="tour-header">
                <h1>Ethics Tour: Street-Level Giving in San Francisco</h1>
                <p>Navigate through ethical frameworks for giving to those in need</p>
            </header>

            <div className="location-progress">
                {locations.map((location, index) => (
                    <button
                        key={location.id}
                        className={`location-dot ${index === activeLocation ? 'active' : ''} ${index < activeLocation ? 'visited' : ''}`}
                        onClick={() => setActiveLocation(index)}
                        style={{
                            '--location-color': location.color,
                            '--dot-size': index === activeLocation ? '1.5rem' : '1rem'
                        }}
                    >
                        <span className="location-label">{location.name}</span>
                    </button>
                ))}
            </div>

            <div className={`main-content ${isFullMapView ? 'map-expanded' : ''}`}>
                {/* Map Column */}
                <div className="map-column">
                    <div className="map-container">
                        <button className="map-toggle" onClick={toggleMapView}>
                            {isFullMapView ? 'Return to Tour' : 'Expand Map'}
                        </button>

                        {!geoJsonData ? (
                            <LoadingSpinner />
                        ) : (
                            <MapContainer
                                center={locations[activeLocation].mapCoordinates}
                                zoom={isFullMapView ? 12 : 13}
                                style={{ height: '100%', width: '100%' }}
                                whenCreated={setMapRef}
                                zoomControl={true}
                                attributionControl={false}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                                />
                                <GeoJSON
                                    data={geoJsonData}
                                    style={geoJsonStyle}
                                />
                                {locations.map(location => (
                                    <Marker
                                        key={location.id}
                                        position={location.mapCoordinates}
                                        icon={locationIcon}
                                        eventHandlers={{
                                            click: () => !isFullMapView && setActiveLocation(location.id)
                                        }}
                                    >
                                        <Popup>
                                            <strong>{location.name}</strong><br />
                                            {location.description}
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        )}
                    </div>

                    {!isFullMapView && (
                        <div className="location-info">
                            <div className="location-header" style={{ backgroundColor: locations[activeLocation].color }}>
                                <h2>{locations[activeLocation].name}</h2>
                                <p>{locations[activeLocation].description}</p>
                            </div>

                            <div className="gallery-wrapper">
                                <ImageGallery
                                    images={locations[activeLocation].images.map(getPublicPath)}
                                    location={locations[activeLocation].name}
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Content Column - Only shown when map is not expanded */}
                {!isFullMapView && (
                    <div className="content-column">
                        {/* New central question section */}
                        <div className="central-question">
                            <h3>Key Ethical Question</h3>
                            <div className="question-box">
                                <p>{locations[activeLocation].centralQuestion}</p>
                            </div>
                        </div>

                        <div className="ethical-frameworks">
                            <h3>Ethical Perspectives</h3>

                            <div className="framework-tabs">
                                <div className="framework kant">
                                    <h4>{locations[activeLocation].analysis.kantian.title}</h4>
                                    <p>{locations[activeLocation].analysis.kantian.text}</p>
                                </div>

                                <div className="framework util">
                                    <h4>{locations[activeLocation].analysis.utilitarian.title}</h4>
                                    <p>{locations[activeLocation].analysis.utilitarian.text}</p>
                                </div>

                                <div className="framework buddha">
                                    <h4>{locations[activeLocation].analysis.buddhist.title}</h4>
                                    <p>{locations[activeLocation].analysis.buddhist.text}</p>
                                </div>
                            </div>
                        </div>

                        <div className="reflection-notes">
                            <h3>Additional Ethical Considerations</h3>
                            <div className="notes-grid">
                                {locations[activeLocation].notes.map(note => (
                                    <div
                                        key={note.id}
                                        className={`reflection-note ${expandedNotes.includes(note.id) ? 'expanded' : ''}`}
                                        onClick={() => toggleNoteExpansion(note.id)}
                                    >
                                        <p>{note.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="tour-navigation">
                            <button
                                className="nav-button prev"
                                disabled={activeLocation === 0}
                                onClick={() => setActiveLocation(prev => Math.max(0, prev - 1))}
                            >
                                Previous Location
                            </button>

                            <button
                                className="nav-button next"
                                disabled={activeLocation === locations.length - 1}
                                onClick={() => setActiveLocation(prev => Math.min(locations.length - 1, prev + 1))}
                            >
                                Next Location
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* References Section */}
            <div className="references-section">
                <button className="references-toggle" onClick={() => document.querySelector('.references-content').classList.toggle('expanded')}>
                    References & Sources
                </button>

                <div className="references-content">
                    <ul>
                        <li>Beauchamp, T. (2008). The Principle of Beneficence in Applied Ethics. <em>Stanford Encyclopedia of Philosophy</em>. <a href="https://plato.stanford.edu/entries/principle-beneficence/" target="_blank" rel="noopener noreferrer">Link</a></li>
                        <li>Haushofer, J., & Shapiro, J. (2016). The Short-term Impact of Unconditional Cash Transfers to the Poor: Experimental Evidence from Kenya. <em>The Quarterly Journal of Economics, 131</em>(4), 1973–2042.</li>
                        <li>Macaskill, W. (2019). <em>Doing Good Better: How Effective Altruism Can Help You Help Others, Do Work That Matters, and Make Smarter Choices About Giving Back</em>. Avery.</li>
                        <li>Saunders-Hastings, E. (2019). Benevolent Giving and the Problem of Paternalism. In H. Greaves & T. Pummer (Eds.), <em>Effective Altruism: Philosophical Issues</em> (pp. 115–136). Oxford University Press.</li>
                        <li>Stohr, K. (2011). Kantian Beneficence and the Problem of Obligatory Aid. <em>Journal of Moral Philosophy, 8</em>(1), 45–67.</li>
                        <li>Thomas E. Hill. (1980). Humanity as an End in Itself. <em>Ethics, 91</em>(1), 84.</li>
                        <li>Suttacentral: "A Gift With Six Factors" & "Dānavagga (The Chapter on Giving)" from <em>Aṅguttaranikāya</em> (Numbered Discourses with the Buddha). <a href="https://suttacentral.net/an6.37/en/sujato" target="_blank" rel="noopener noreferrer">Link</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default StoryMap; 