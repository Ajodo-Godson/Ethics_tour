import React from 'react';
import './App.css';
import StoryMap from './components/StoryMap';
// Remove this import
// import coverImage from './assets/civic_plaza/Image1.jpg';  // This path doesn't exist

function App() {
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

  return (
    <div className="App">
      <header className="storymap-header">
        <div className="header-logo">Ethics Tour</div>
        <div className="header-controls">
          <button className="header-button" onClick={shareProject}>Share</button>
        </div>
      </header>

      {/* Use the public folder path */}
      <div className="storymap-cover" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${process.env.PUBLIC_URL}/assets/civic_plaza/Image1.jpg)`
      }}>
        <h1>Ethics Tour: Resources for the Needy</h1>
        <p>A journey exploring ethical perspectives on giving to strangers in need</p>
        <div className="scroll-indicator">Scroll to begin</div>
      </div>

      <StoryMap />

      <footer className="App-footer">
        <p>© 2025 Ethics Tour Project</p>
      </footer>
    </div>
  );
}

export default App;
