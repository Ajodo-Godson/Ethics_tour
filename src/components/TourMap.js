import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import LoadingSpinner from './LoadingSpinner';

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

// Map controller to handle view changes
const MapController = ({ activeLocation, locations, setMapRef }) => {
    const map = useMap();

    useEffect(() => {
        setMapRef(map);

        // Fit map to all locations bounds
        const bounds = L.latLngBounds(locations.map(loc => [loc.lat, loc.lng]));
        map.fitBounds(bounds, { padding: [50, 50] });
    }, [map, setMapRef, locations]);

    useEffect(() => {
        const location = locations[activeLocation];
        if (location) {
            map.flyTo([location.lat, location.lng], 15, {
                duration: 1.5,
                easeLinearity: 0.25
            });
        }
    }, [activeLocation, locations, map]);

    return null;
};

const TourMap = ({ activeLocation, locations, setMapRef, scrollToLocation, geoJsonData, geoJsonStyle }) => {
    const mapContainerRef = useRef(null);

    return (
        <div className="tour-map" ref={mapContainerRef}>
            {!geoJsonData ? (
                <LoadingSpinner />
            ) : (
                <MapContainer
                    center={[37.774929, -122.419418]} // San Francisco
                    zoom={13}
                    style={{ width: '100%', height: '100%' }}
                    zoomControl={false}
                >
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    />

                    {locations.map((location, index) => (
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
                    ))}

                    <MapController
                        activeLocation={activeLocation}
                        locations={locations}
                        setMapRef={setMapRef}
                    />
                </MapContainer>
            )}
        </div>
    );
};

export default TourMap; 