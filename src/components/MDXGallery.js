import React from 'react';
import ImageGallery from './ImageGallery';

const MDXGallery = ({ images, location }) => {
    // Process the image paths to use the public folder
    const processedImages = images.map(img =>
        `${process.env.PUBLIC_URL}${img.startsWith('/') ? '' : '/'}${img}`
    );

    return (
        <div className="mdx-gallery">
            <ImageGallery images={processedImages} location={location} />
        </div>
    );
};

export default MDXGallery; 