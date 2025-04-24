import React from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import LoadingSpinner from './LoadingSpinner';

// Custom marker icon for locations
const locationIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});

const TourMap = ({ geoJsonData, activeLocation, locations, setMapRef, scrollToLocation, geoJsonStyle }) => {
    return (
        <div className="fixed-map">
            {!geoJsonData ? (
                <LoadingSpinner />
            ) : (
                <MapContainer
                    center={locations[activeLocation].mapCoordinates}
                    zoom={13}
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
                                click: () => scrollToLocation(location.id)
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
    );
};

export default TourMap; 