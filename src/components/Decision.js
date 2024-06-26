import React, { useState, useEffect } from 'react';
import './Decision.css';
import Dates from './Dates';

const Decision = () => {
  const [showDates, setShowDates] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const handleYesClick = () => {
    setShowDates(true);
  };

  const handleNoHover = () => {
    const container = document.querySelector('.decision-container');
    const noButton = document.querySelector('.no-button');

    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    const maxTop = containerRect.height - noButtonRect.height;
    const maxLeft = containerRect.width - noButtonRect.width;

    const newStyle = {
      position: 'absolute',
      top: `${Math.random() * maxTop}px`,
      left: `${Math.random() * maxLeft}px`,
    };

    setNoButtonStyle(newStyle);
  };

  const handleMouseMove = (e) => {
    const noButton = document.querySelector('.no-button');
    const noButtonRect = noButton.getBoundingClientRect();

    if (
      e.clientX >= noButtonRect.left &&
      e.clientX <= noButtonRect.right &&
      e.clientY >= noButtonRect.top &&
      e.clientY <= noButtonRect.bottom
    ) {
      handleNoHover();
    }
  };

  useEffect(() => {
    const container = document.querySelector('.decision-container');
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="decision-container">
        <h1 className="decision-title">Date?</h1>
        <button className="yes-button" onClick={handleYesClick}>YES</button>
        <button
          className="no-button"
          style={noButtonStyle}
          onMouseEnter={handleNoHover}
        >
          NO
        </button>
      </div>
      {showDates && <Dates />}
    </div>
  );
};

export default Decision;