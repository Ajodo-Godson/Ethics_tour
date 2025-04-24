import React, { useState } from 'react';
import './App.css';
import './styles/MDX.css';
import './styles/Layout.css';
import './styles/StoryMapModern.css'; // New styles for ArcGIS-inspired design
import StoryMap from './components/StoryMap';
import MDXProviderWrapper from './components/MDXProvider';

function App() {
  const [showIntro, setShowIntro] = useState(true);

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
              <div className="header-logo">Ethics Tour</div>
              <div className="header-progress">
                <div className="progress-track">
                  <div className="progress-indicator" style={{ width: '0%' }}></div>
                </div>
              </div>
              <div className="header-controls">
                <button className="header-button" onClick={shareProject}>
                  Share
                </button>
              </div>
            </header>

            <div id="storymap-content">
              <StoryMap />
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
