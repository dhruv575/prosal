import React from 'react';
import './Me.css';

const Me = () => {
  return (
    <div className="me-container">
      <div className="me-content">
        <div className="me-pictures">
          <img src="/path/to/image1.png" alt="Goofy 1" className="me-picture" />
          <img src="/path/to/image2.png" alt="Goofy 2" className="me-picture" />
          <img src="/path/to/image3.png" alt="Goofy 3" className="me-picture" />
          <img src="/path/to/image4.png" alt="Goofy 4" className="me-picture" />
        </div>
        <div className="me-details">
          <h1>Your Name</h1>
          <div className="green-flags">
            <h2>Green Flags</h2>
            <p>Placeholder text for green flags.</p>
          </div>
          <div className="red-flags">
            <h2>Red Flags</h2>
            <p>Placeholder text for red flags.</p>
          </div>
          <div className="beige-flags">
            <h2>Beige Flags</h2>
            <p>Placeholder text for beige flags.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
