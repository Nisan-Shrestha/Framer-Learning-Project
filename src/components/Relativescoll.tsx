/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useRef, useState, useEffect } from "react";
import { easeOut } from "framer-motion/dom";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useAnimation,
  cubicBezier,
  useMotionValue,
} from "framer-motion";

interface RelativescrollProps {
  passedRef?: React.RefObject<any>;
}
const Relativescroll: React.FC<RelativescrollProps> = ({ passedRef }) => {
  const { scrollYProgress } = useScroll({
    target: passedRef,
    offset: ["0%", "100%"],
  });

  const a = useMotionValue(320);
  scrollYProgress.set(-1);
  const y = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const yx = useTransform(y, [-1, 0, 1], [320, -220, -1500]);

  return (
    <div className="rocket">
      <motion.div
        style={{ y: yx }}
        transition={{
          ease: cubicBezier(0.15, 0.15, 0.31, 0.84),
          duration: 1.2,
        }}
        // transition={{ type: "inertia", velocity: -600, timeConstant: 1000 }}
      >
        <img src="/images/rocket.png" alt="" />
      </motion.div>
    </div>
  );
};

export default Relativescroll;
