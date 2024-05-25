import React from 'react';
import './You.css';

const You = () => {
  return (
    <div className="you-container">
      <div className="you-content">
        <div className="you-item">
          <img src="/path/to/image1.png" alt="Interest 1" className="you-picture" />
          <h2>Title 1</h2>
          <p>Placeholder description for interest 1.</p>
        </div>
        <div className="you-item">
          <img src="/path/to/image2.png" alt="Interest 2" className="you-picture" />
          <h2>Title 2</h2>
          <p>Placeholder description for interest 2.</p>
        </div>
        <div className="you-item">
          <img src="/path/to/image3.png" alt="Interest 3" className="you-picture" />
          <h2>Title 3</h2>
          <p>Placeholder description for interest 3.</p>
        </div>
        <div className="you-item">
          <img src="/path/to/image4.png" alt="Interest 4" className="you-picture" />
          <h2>Title 4</h2>
          <p>Placeholder description for interest 4.</p>
        </div>
        <div className="you-item">
          <img src="/path/to/image5.png" alt="Interest 5" className="you-picture" />
          <h2>Title 5</h2>
          <p>Placeholder description for interest 5.</p>
        </div>
      </div>
    </div>
  );
};

export default You;
