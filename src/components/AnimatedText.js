/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text, classname, dl, whileInViewAmt, ypx,xpx, duration,stgChld}) => {
  const defAnim = {
    start: { opacity: 0, y: ypx,x:xpx },
    end: { opacity: [0,  1], y: 0,x:0 },
  };

  const divided_texts = text.split(" ")
  return (
    <div className={classname}>
      <motion.span
        initial="start"
        animate={whileInViewAmt < 0 ? "end" : 0}
        whileInView={whileInViewAmt >= 0 ? "end" : ""}
        // whileInView="end"
        transition={{ duration:duration, delayChildren: dl, staggerChildren: stgChld }}
        viewport={{ once: true, amount: whileInViewAmt }}
      > 
        {divided_texts.map((char, index) => (
          <motion.span
            style={{ display: "inline-block", whiteSpaceCollapse: "preserve" }}
            key={index}
            transition={{ duration: duration }}
            variants={defAnim}
          >
            
            {char + (index+1==divided_texts.length ? "":" ")}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
};

AnimatedText.defaultProps = {
  ypx: 64,
  xpx: 0,
  stgChld: 0.1,
  dl: 0,
  text: "hi this is animated",
  classname: "",
  whileInViewAmt: -1,
  duration:.6
};

export default AnimatedText;
