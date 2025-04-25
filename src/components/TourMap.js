import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom marker icons for locations
const createLocationIcon = (color) => {
    return L.divIcon({
        className: 'custom-location-marker',
        html: `<div style="background-color: ${color}"></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });
};

// Enhanced Map Controller that handles special sections
const MapController = ({ activeLocation, locations, setMapRef }) => {
    const map = useMap();

    React.useEffect(() => {
        setMapRef(map);

        // Set default view
        map.setView([37.774929, -122.419418], 13);

    }, [map, setMapRef]);

    React.useEffect(() => {
        if (locations && activeLocation >= 0 && activeLocation < locations.length) {
            const location = locations[activeLocation];
            // Only fly to location if it's not a special section and has valid coordinates
            if (location && !location.isSpecialSection && location.lat && location.lng) {
                map.flyTo([location.lat, location.lng], 15, {
                    duration: 1.5
                });
            }
        }
    }, [activeLocation, locations, map]);

    return null;
};

const TourMap = ({ activeLocation, locations, setMapRef, scrollToLocation }) => {
    console.log("TourMap rendering with locations:", locations);

    // Filter out special sections when rendering markers
    const filteredLocations = locations.filter(loc => !loc.isSpecialSection);

    return (
        <div className="tour-map" style={{ width: '100%', height: '100%' }}>
            <MapContainer
                center={[37.774929, -122.419418]} // San Francisco
                zoom={13}
                style={{ width: '100%', height: '100%' }}
                zoomControl={true}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Only render markers for non-special sections */}
                {filteredLocations.map((location, index) => (
                    <Marker
                        key={location.id}
                        position={[location.lat, location.lng]}
                        icon={createLocationIcon(location.color || '#3498db')}
                        eventHandlers={{
                            click: () => {
                                const actualIndex = locations.findIndex(loc => loc.id === location.id);
                                scrollToLocation(actualIndex);
                            }
                        }}
                    >
                        <Popup>
                            <div className="map-popup">
                                <h3>{location.name}</h3>
                                <p>{location.subtitle}</p>
                                <button onClick={() => {
                                    const actualIndex = locations.findIndex(loc => loc.id === location.id);
                                    scrollToLocation(actualIndex);
                                }}>
                                    View Details
                                </button>
                            </div>
                        </Popup>
                    </Marker>
                ))}

                <MapController
                    activeLocation={activeLocation}
                    locations={locations}
                    setMapRef={setMapRef}
                />
            </MapContainer>
        </div>
    );
};

export default TourMap; 