import React, { useState } from 'react';
import References from './References';

const Footer = () => {
    const [showReferences, setShowReferences] = useState(false);

    return (
        <footer className="app-footer">
            <div className="footer-links">
                <button onClick={() => setShowReferences(true)}>References</button>
                {/* Other footer content */}
            </div>

            {showReferences && (
                <div className="references-modal">
                    <div className="modal-content">
                        <button className="close-btn" onClick={() => setShowReferences(false)}>
                            ×
                        </button>
                        <References />
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer; 