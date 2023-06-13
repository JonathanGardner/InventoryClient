import React, { useEffect } from 'react';
import './ContactUsPage.css'

function TitleBar() {
  useEffect(() => {
    const movement = 10; 

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
    <div>
      <div className="contact">
        <h1>CONTACT NOW</h1>
        <h2>QUESTIONS, REPAIRS, STORAGE, SALES, OR TRADE-INS </h2>
      </div>
    </div>
  );
}

export default TitleBar;
