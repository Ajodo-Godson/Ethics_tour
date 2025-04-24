import React, { useEffect } from 'react';
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

// Simple Map Controller
const MapController = ({ activeLocation, locations, setMapRef }) => {
    const map = useMap();

    useEffect(() => {
        setMapRef(map);

        // Set default view
        map.setView([37.774929, -122.419418], 13);

    }, [map, setMapRef]);

    useEffect(() => {
        if (locations && activeLocation >= 0 && activeLocation < locations.length) {
            const location = locations[activeLocation];
            if (location && location.lat && location.lng) {
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

    return (
        <div className="tour-map" style={{ width: '100%', height: '100%' }}>
            <MapContainer
                center={[37.774929, -122.419418]} // San Francisco
                zoom={13}
                style={{ width: '100%', height: '100%' }}
                zoomControl={true}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {locations && locations.map((location, index) => (
                    location.lat && location.lng && (
                        <Marker
                            key={location.id}
                            position={[location.lat, location.lng]}
                            icon={createLocationIcon(location.color || '#3498db')}
                            eventHandlers={{
                                click: () => scrollToLocation(index)
                            }}
                        >
                            <Popup>
                                <div className="map-popup">
                                    <h3>{location.name}</h3>
                                    <p>{location.subtitle}</p>
                                    <button onClick={() => scrollToLocation(index)}>
                                        View Details
                                    </button>
                                </div>
                            </Popup>
                        </Marker>
                    )
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