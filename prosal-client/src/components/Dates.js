import React from 'react';
import './Dates.css';

const Dates = () => {
  return (
    <div className="dates-container">
      <div className="dates-content">
        <div className="dates-item">
          <img src="/path/to/image1.png" alt="Date 1" className="dates-picture" />
          <h2>Title 1</h2>
          <p>Placeholder description for date 1.</p>
        </div>
        <div className="dates-item">
          <img src="/path/to/image2.png" alt="Date 2" className="dates-picture" />
          <h2>Title 2</h2>
          <p>Placeholder description for date 2.</p>
        </div>
        <div className="dates-item">
          <img src="/path/to/image3.png" alt="Date 3" className="dates-picture" />
          <h2>Title 3</h2>
          <p>Placeholder description for date 3.</p>
        </div>
        <div className="dates-item">
          <img src="/path/to/image4.png" alt="Date 4" className="dates-picture" />
          <h2>Title 4</h2>
          <p>Placeholder description for date 4.</p>
        </div>
      </div>
    </div>
  );
};

export default Dates;