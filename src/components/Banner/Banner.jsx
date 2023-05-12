import React, { useEffect } from "react";
import "./Banner.css";

function Banner() {
  useEffect(() => {
    
    return () => {
      
    }
  }, [])
  
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie name</h1>
        <div className="banner-btn">
          <button className="btn">Play</button>
          <button className="btn">My List</button>
        </div>
        <h1 className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.voluptates error dolor quod, laborum quibusdam beatae dicta
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
