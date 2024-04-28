/* eslint-disable react/prop-types */
import React from "react";
import "./style.css";
import { delay, motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const CTA = ({
  imgsrc,
  text,
  CTAcustomClass,
  delay,
  animate = false,
  whileInViewAmt,
}) => {
  const imgscale = {
    start: { opacity: 0, scale: 0 },
    end: { opacity: 1, scale: 1 },
  };
  const bgscale = {
    start: { scaleX: 0, scaleY: [0] },
    end: { scaleX: 1, scaleY: [0, 0.8, 1] },
  };
  const textAppear = {
    start: { opacity: 0 },
    end: { opacity: [0, 0.3, 1] },
  };
  return (
    <motion.div
      layout
      // delay={delay}
      // delaych
      variants={bgscale}
      style={{ transformOrigin: "left" }}
      transition={{ delay: delay, ease: "easeOut" }}
      viewport={{ once: true, amount: whileInViewAmt }}
      initial="start"
      animate={whileInViewAmt < 0 ? "end" : 0}
      whileInView={whileInViewAmt >= 0 ? "end" : ""}
      className={`CTAparent ${CTAcustomClass} `}
    >
      <motion.img
        variants={imgscale}
        initial="start"
        animate={whileInViewAmt < 0 ? "end" : 0}
        whileInView={whileInViewAmt >= 0 ? "end" : ""}
        viewport={{ once: true, amount: whileInViewAmt }}

        className="CTAimg"
        transition={{ delay: delay, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
        alt="Group"
        src={imgsrc}
      />{" "}
      <motion.span
        initial="start"
        animate={whileInViewAmt < 0 ? "end" : 0}
        whileInView={whileInViewAmt >= 0 ? "end" : ""}
        viewport={{ once: true, amount: whileInViewAmt }}
        transition={{
          delay: delay,
          staggerChildren: 0.05,
          delayChildren: delay,
        }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            style={{ display: "inline-block", whiteSpaceCollapse: "preserve" }}
            key={index}
            transition={{ duration: 0.3 }}
            variants={textAppear}
          >
            {`${char}`}
          </motion.span>
        ))}
      </motion.span>
    </motion.div>
  );
};

CTA.defaultProps = {
  delay: 0.6,
  whileInViewAmt: -1,
};

export default CTA;
