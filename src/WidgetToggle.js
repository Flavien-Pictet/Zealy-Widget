import React, { useState } from 'react';
import './WidgetToggle.css';

const WidgetToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    console.log('toggleVisibility called');
    setIsVisible(!isVisible);
  };


  return (
    <>
      <div className={`widget-container ${isVisible ? 'visible' : ''}`}>
        <iframe
          src="https://zealy.io/cw/opensea-1369/questboard"
          title="Zealy Widget"
          height="500"
          width="350"
        />
      </div>
      <button className="toggle-button" onClick={toggleVisibility}></button>
    </>
  );
};

export default WidgetToggle;
