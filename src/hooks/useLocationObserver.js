import { useEffect } from 'react';

function useLocationObserver(locationRefs, observerRef, setActiveLocation, locations, mapRef) {
    useEffect(() => {
        if (locationRefs.current.length === 0) return;

        // Cleanup previous observer
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        // Create new observer
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const locationId = parseInt(entry.target.dataset.locationId, 10);
                        setActiveLocation(locationId);

                        // Update map position
                        if (mapRef) {
                            mapRef.flyTo(
                                locations[locationId].mapCoordinates,
                                13,
                                { animate: true, duration: 1.5 }
                            );
                        }
                    }
                });
            },
            {
                threshold: 0.3, // Trigger when 30% of the element is visible
                rootMargin: '-10% 0px -10% 0px' // Adjust this for better triggering
            }
        );

        // Observe all location sections
        locationRefs.current.forEach(ref => {
            if (ref) observerRef.current.observe(ref);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [locations, mapRef, locationRefs, observerRef, setActiveLocation]);
}

export default useLocationObserver; 