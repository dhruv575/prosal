import React, { useEffect } from 'react';
import Header from './components/Header';
import MeSection from './components/Me';
import You from './components/You';
import DecisionSection from './components/Decision';
import './App.css';

function App() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const trailElements = [];
    for (let i = 0; i < 5; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      document.body.appendChild(trail);
      trailElements.push(trail);
    }

    const moveCursor = (e) => {
      const x = e.clientX + window.scrollX;
      const y = e.clientY + window.scrollY;

      cursor.style.left = `${x - 10}px`;
      cursor.style.top = `${y - 10}px`;

      trailElements.forEach((trail, index) => {
        setTimeout(() => {
          trail.style.left = `${x}px`;
          trail.style.top = `${y}px`;
        }, index * 100);
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cursor.remove();
      trailElements.forEach(trail => trail.remove());
    };
  }, []);

  return (
    <div className="App gradient-background">
      <Header />
      <MeSection />
      <You />
      <DecisionSection />
      {/* Other components */}
    </div>
  );
}

export default App;
