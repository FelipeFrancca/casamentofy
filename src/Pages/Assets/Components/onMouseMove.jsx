import React, { useState } from "react";
import "./onMouseMove.css"

const Background = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
  
    return (
      <div
        className="background"
        onMouseMove={handleMouseMove}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundImage: "../img/carrossel/carrossel2.jpg",
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: "-1",
        }}
      />
    );
  };
  
  export default Background;
