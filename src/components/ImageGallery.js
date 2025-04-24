import React, { useState } from 'react';
import '../styles/ImageGallery.css';

const ImageGallery = ({ images, location }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="image-gallery">
            <div className="gallery-main">
                <img
                    src={images[currentImage]}
                    alt={`${location} scene ${currentImage + 1}`}
                    className="gallery-main-image"
                />
                <div className="gallery-navigation">
                    <button className="gallery-nav-button prev" onClick={handlePrev}>
                        &larr;
                    </button>
                    <div className="gallery-counter">
                        {currentImage + 1} / {images.length}
                    </div>
                    <button className="gallery-nav-button next" onClick={handleNext}>
                        &rarr;
                    </button>
                </div>
            </div>
            <div className="gallery-thumbnails">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`gallery-thumbnail ${index === currentImage ? 'active' : ''}`}
                        onClick={() => setCurrentImage(index)}
                    >
                        <img src={image} alt={`${location} thumbnail ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery; 