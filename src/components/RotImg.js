/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { useState,useEffect } from "react";
const RotImg = ({radius, freq,phase,scale}) => {

  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 0.05);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const xpos = radius * Math.cos(freq * time + phase);
  const ypos = radius * Math.sin(freq * time + phase);

  return (
    <motion.img
      animate={{ x: xpos, y: ypos,scale:scale }}
      className="group group-1"
      alt="Group"
      src="/img/group-3.png"
      
      //   phase={1}
    //   radius={120}
    >{console.log()}</motion.img>
  );
};

RotImg.defaultProps = {
    radius: 120,
    frequency: 1,
    phase: 0,
    scale:1
  };

export default RotImg;
