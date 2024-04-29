/* eslint-disable react/prop-types */
import React from "react";

const Card = ({text,imgsrc}) => {
  return (
    <div className="frame-parent8">
      <div className="from-stress-to-anxious-attacks-wrapper">
        <h1 className="from-stress-to">{text}</h1>
      </div>
      <div className="frame-parent9">
          <div className="frame-wrapper7">
        
          </div>
          <img className="frame-child7" alt="" style={{borderRadius:"50%"}} src={imgsrc} />
      </div>
    </div>
  );
};

export default Card;
