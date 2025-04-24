import React, { createContext, useState, useContext } from 'react';

const TourContext = createContext();

export const useTour = () => useContext(TourContext);

export const TourProvider = ({ children }) => {
    const [currentLocation, setCurrentLocation] = useState(0);
    const [locationCount, setLocationCount] = useState(0);

    return (
        <TourContext.Provider value={{
            currentLocation,
            setCurrentLocation,
            locationCount,
            setLocationCount
        }}>
            {children}
        </TourContext.Provider>
    );
}; 