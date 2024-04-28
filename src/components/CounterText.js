/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const CounterText = ({
  start,
  end,
  duration,
  suffix,
  exponent,
  InViewCount,
}) => {
  function easeOutCubic(x) {
    
    return 1- Math.pow(-x+1,  Number(exponent));
  }
  const [value, setValue] = useState(start);
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("Component visibility:", isInView); // Debug: Check if visibility updates

    if (InViewCount && !isInView) {
      console.log("Not in view yet"); // Debug: Check condition preventing start
      return;
    }
    console.log("Starting animation"); // Debug: Confirm animation starts

    let frame;
    const startTimestamp = Date.now();

    const updateAnimation = () => {
      const elapsed = Date.now() - startTimestamp;
      const progress = elapsed / (duration * 1000);
      const easedProgress = easeOutCubic(progress);

      const currentValue = start + (end - start) * easedProgress;
      setValue(currentValue);

      if (progress < 1) {
        frame = requestAnimationFrame(updateAnimation);
      } else {
        setValue(end); // Ensure it sets to the exact final value
      }
    };

    frame = requestAnimationFrame(updateAnimation);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [isInView, start, end, duration, InViewCount]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {Math.round(value) + `${suffix}`}
    </motion.div>
  );
};

CounterText.defaultProps = {
  suffix: "",
  exponent: 3,
  InViewCount: true,
};

export default CounterText;
