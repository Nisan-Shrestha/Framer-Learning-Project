import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";

const ButtonWithControlledHover = () => {
  const [hovered, setHovered] = useState(false);

  const hoverInTransition = {
    scale: 1.05,
    transition: {
      duration: 0.2,
      delay: 0, // Ensuring no delay when hovering in
    },
  };

  const hoverOutTransition = {
    scale: 1,
    transition: {
      duration: 0.2,
      delay: 0, // Ensuring no delay when hovering out
    },
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 100, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
        delay: 3.4, // This is the entry delay
      }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={hovered ? hoverInTransition : hoverOutTransition}
      className="frame-parent17"
    >
        <div className="frame-wrapper11">
          <div className="wrapper6">
            <h1 className="h19">↗</h1>
          </div>
        </div>
      <h1 className="send">Send</h1>
    </motion.button>
  );
};

export default ButtonWithControlledHover;
