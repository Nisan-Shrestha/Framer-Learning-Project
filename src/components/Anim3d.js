/* eslint-disable react/prop-types */
import React from "react";
import { motion, spring } from "framer-motion";

const Anim3d = ({
  text,
  classname,
  dl,
  whileInViewAmt,
  ypx,
  xpx,
  duration,
  stgChld,
}) => {
  const defAnim = {
    start: { opacity: 0, y: ypx, x: xpx, rotateY: -80,rotateX: -20 },
    end: { opacity: [0, 1], y: 0, x: 0, rotateY: 0,rotateX: 0 },
  };
  return (
    <div className={classname}>
      <motion.span
        initial="start"
        animate={whileInViewAmt < 0 ? "end" : 0}
        whileInView={whileInViewAmt >= 0 ? "end" : ""}
        // whileInView="end"
        transition={{
          duration: duration,
          delayChildren: dl,
          staggerChildren: stgChld,
        }}
        viewport={{ once: true, amount: whileInViewAmt }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            style={{ display: "inline-block", whiteSpaceCollapse: "preserve" }}
            key={index}
            transition={{ duration: duration, type:"spring" }}
            variants={defAnim}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
};

Anim3d.defaultProps = {
  ypx: 64,
  xpx: 0,
  stgChld: 0.1,
  dl: 0,
  text: "hi this is animated",
  classname: "",
  whileInViewAmt: -1,
  duration: 0.6,
};

export default Anim3d;
