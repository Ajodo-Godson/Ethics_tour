import React, { useState } from 'react';
import '../styles/ImageGallery.css';

const ImageGallery = ({ images, location }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="image-gallery">
            <div className="gallery-main">
                <button className="gallery-nav prev" onClick={prevImage}>←</button>
                <img
                    src={images[currentImage]}
                    alt={`${location} view ${currentImage + 1}`}
                    className="gallery-image"
                />
                <button className="gallery-nav next" onClick={nextImage}>→</button>
                <div className="gallery-caption">
                    {`Exploring ${location} - Image ${currentImage + 1} of ${images.length}`}
                </div>
            </div>

            <div className="gallery-thumbnails">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className={`gallery-thumbnail ${currentImage === index ? 'active' : ''}`}
                        onClick={() => setCurrentImage(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery; 