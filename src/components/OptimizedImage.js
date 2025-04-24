import React, { useState, useEffect } from 'react';

const OptimizedImage = ({
    src,
    alt,
    className = '',
    width,
    height,
    lazy = true,
    placeholderColor = '#f0f0f0'
}) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    // Build the complete source path
    const fullSrc = src.startsWith('/')
        ? `${process.env.PUBLIC_URL}${src}`
        : `${process.env.PUBLIC_URL}/${src}`;

    // Handle images that fail to load
    useEffect(() => {
        // Reset states when src changes
        setLoaded(false);
        setError(false);
    }, [src]);

    return (
        <div
            className={`optimized-image-container ${className}`}
            style={{
                position: 'relative',
                width: width || '100%',
                height: height || 'auto',
                backgroundColor: placeholderColor,
                overflow: 'hidden'
            }}
        >
            {!loaded && !error && (
                <div
                    className="image-placeholder"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: placeholderColor
                    }}
                />
            )}

            <img
                src={fullSrc}
                alt={alt}
                loading={lazy ? "lazy" : "eager"}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: loaded ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                }}
            />

            {error && (
                <div
                    className="image-error"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f8d7da',
                        color: '#721c24'
                    }}
                >
                    Image not found
                </div>
            )}
        </div>
    );
};

export default OptimizedImage; 