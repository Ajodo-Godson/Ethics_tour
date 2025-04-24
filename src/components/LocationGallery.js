import React, { useState } from 'react';
import OptimizedImage from './OptimizedImage';
import '../styles/LocationGallery.css';

const LocationGallery = ({ locationId, imageCount = 4 }) => {
    const [activeImage, setActiveImage] = useState(0);

    // Generate image paths based on location ID and count
    const generateImagePaths = () => {
        const paths = [];
        for (let i = 1; i <= imageCount; i++) {
            paths.push(`/assets/${locationId}/Image${i}.jpg`);
        }
        return paths;
    };

    const imagePaths = generateImagePaths();

    return (
        <div className="location-gallery">
            <div className="gallery-main">
                <OptimizedImage
                    src={imagePaths[activeImage]}
                    alt={`${locationId} scene ${activeImage + 1}`}
                    className="gallery-featured-image"
                />
            </div>

            <div className="gallery-thumbnails">
                {imagePaths.map((path, index) => (
                    <div
                        key={index}
                        className={`gallery-thumbnail ${index === activeImage ? 'active' : ''}`}
                        onClick={() => setActiveImage(index)}
                    >
                        <OptimizedImage
                            src={path}
                            alt={`Thumbnail ${index + 1}`}
                            width="60px"
                            height="60px"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LocationGallery; 