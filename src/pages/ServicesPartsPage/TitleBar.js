import React, { useEffect } from 'react';
import './ServiceParts.css';

function TitleBar() {
  useEffect(() => {
    const movement = 10; // maximum amount of pixels the background can move

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
    
      // Calculate percentage from the center of the screen
      const posX = (clientX - innerWidth / 2) / (innerWidth / 2);
      const posY = (clientY - innerHeight / 2) / (innerHeight / 2);
    
      // Use the percentage to determine the offset, but limit it to the movement range
      const offsetX = Math.min(Math.max(parseInt(posX * movement), -movement), movement);
      const offsetY = Math.min(Math.max(parseInt(posY * movement), -movement), movement);
    
      document.documentElement.style.setProperty('--bg-pos-x', `calc(50% + ${offsetX}px)`);
      document.documentElement.style.setProperty('--bg-pos-y', `calc(60% + ${offsetY}px)`);
    };
    

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="titleBar">
      <h1>SERVICES</h1>
      <h2>REQUEST FOR SERVICE AND PARTS</h2>
    </div>
  );
}



export default TitleBar;
