import React, { useState } from 'react';
import '../styles/MDXGallery.css';

const MDXGallery = ({ images, location }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [featuredImage, setFeaturedImage] = useState(0);

    const openLightbox = (index) => {
        setCurrentImage(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const selectThumbnail = (index) => {
        setFeaturedImage(index);
    };

    // Handle keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            if (e.key === 'ArrowLeft') setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, images.length]);

    return (
        <div className="mdx-gallery">
            <h3>Photo Gallery: {location}</h3>
            <div className="gallery-container">
                {/* Featured large image */}
                <div
                    className="gallery-featured"
                    onClick={() => openLightbox(featuredImage)}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}${images[featuredImage]}`}
                        alt={`${location} featured`}
                        loading="lazy"
                    />
                </div>

                {/* Thumbnails */}
                <div className="gallery-thumbnails">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`gallery-thumbnail ${index === featuredImage ? 'active' : ''}`}
                            onClick={() => selectThumbnail(index)}
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}${image}`}
                                alt={`${location} ${index + 1}`}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox for fullscreen view */}
            {lightboxOpen && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={`${process.env.PUBLIC_URL}${images[currentImage]}`}
                            alt={`${location} ${currentImage + 1}`}
                            className="lightbox-image"
                        />
                        <div className="lightbox-close" onClick={closeLightbox}>×</div>
                        <div className="lightbox-nav lightbox-prev" onClick={prevImage}>‹</div>
                        <div className="lightbox-nav lightbox-next" onClick={nextImage}>›</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MDXGallery; 