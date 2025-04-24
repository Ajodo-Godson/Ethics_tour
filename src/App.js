import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import './styles/MDX.css';
import './styles/Layout.css';
import './styles/StoryMapModern.css'; // New styles for ArcGIS-inspired design
import StoryMap from './components/StoryMap';
import MDXProviderWrapper from './components/MDXProvider';
import locationData from './data/locationData'; // Import location data

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const progressTrackRef = useRef(null);
  const [currentLocation, setCurrentLocation] = useState(0);
  const storyMapRef = useRef(null);

  // Calculate progress percentage
  const progressPercent = ((currentLocation) / (locationData.length - 1)) * 100;

  const shareProject = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Ethics Tour: Street-Level Giving in San Francisco',
        text: 'Explore ethical perspectives on giving to those in need',
        url: window.location.href,
      })
        .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support navigator.share
      const shareUrl = window.location.href;
      navigator.clipboard.writeText(shareUrl)
        .then(() => alert('Link copied to clipboard! You can now share it.'))
        .catch(() => alert('Failed to copy link. Please share this URL: ' + shareUrl));
    }
  };

  const startJourney = () => {
    setShowIntro(false);
    setTimeout(() => {
      const element = document.getElementById('storymap-content');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Watch for location changes from StoryMap component
  useEffect(() => {
    const handleLocationChange = (index) => {
      setCurrentLocation(index);
    };

    // Add event listener
    window.addEventListener('locationChange', (e) => handleLocationChange(e.detail.index));

    return () => {
      window.removeEventListener('locationChange', handleLocationChange);
    };
  }, []);

  const handleProgressBarClick = (e) => {
    if (!progressTrackRef.current) return;

    // Calculate which location was clicked based on position
    const rect = progressTrackRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickPercent = clickX / rect.width;

    // Convert to location index
    const newIndex = Math.round(clickPercent * (locationData.length - 1));

    // Valid index check
    if (newIndex >= 0 && newIndex < locationData.length) {
      // Dispatch custom event to notify StoryMap
      window.dispatchEvent(new CustomEvent('navigateToLocation', {
        detail: { index: newIndex }
      }));
      setCurrentLocation(newIndex);
    }
  };

  // Create simplified method for dot navigation
  const goToLocation = (index) => {
    window.dispatchEvent(new CustomEvent('navigateToLocation', {
      detail: { index: index }
    }));
    setCurrentLocation(index);
  };

  return (
    <MDXProviderWrapper>
      <div className="App storymap-modern">
        {showIntro ? (
          <div className="storymap-intro">
            <div className="intro-overlay"></div>
            <div className="storymap-cover" style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/civic_plaza/Image1.jpg)`
            }}>
              <div className="cover-content">
                <h1>Ethics Tour</h1>
                <h2>Resources for the Needy in San Francisco</h2>
                <p>A journey exploring ethical perspectives on giving to strangers in need</p>
                <button className="start-journey-btn" onClick={startJourney}>
                  Begin the Tour ↓
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <header className="storymap-header">
              <div className="header-logo">
                <span className="logo-text">Ethics Tour</span>
                <span className="logo-subtitle">SF</span>
              </div>
              <div className="header-progress">
                <div
                  className="progress-track"
                  onClick={handleProgressBarClick}
                  ref={progressTrackRef}
                >
                  <div className="progress-indicator" style={{ width: `${progressPercent}%` }}></div>

                  {locationData.map((location, index) => (
                    <button
                      key={location.id}
                      className={`header-progress-point ${index === currentLocation ? 'active' : ''}`}
                      style={{
                        left: `${(index / (locationData.length - 1)) * 100}%`,
                        backgroundColor: location.color || '#3498db'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        goToLocation(index);
                      }}
                      title={location.name}
                    />
                  ))}
                </div>
              </div>
              <div className="header-controls">
                <button className="header-button" onClick={shareProject}>
                  Share
                </button>
              </div>
            </header>

            <div id="storymap-content">
              <StoryMap ref={storyMapRef} onLocationChange={setCurrentLocation} />
            </div>
          </>
        )}

        <footer className="App-footer">
          <p>© 2025 Ethics Tour Project</p>
        </footer>
      </div>
    </MDXProviderWrapper>
  );
}

export default App;
