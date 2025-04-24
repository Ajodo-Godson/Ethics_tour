import React from 'react';
import './App.css';
import StoryMap from './components/StoryMap';
// Remove this import
// import coverImage from './assets/civic_plaza/Image1.jpg';  // This path doesn't exist

function App() {
  return (
    <div className="App">
      <header className="storymap-header">
        <div className="header-logo">Ethics Tour</div>
        <div className="header-controls">
          <button className="header-button">Share</button>
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
        <p>© 2023 Ethics Tour Project</p>
      </footer>
    </div>
  );
}

export default App;
