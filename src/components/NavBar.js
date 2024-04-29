import React from "react";
import "./style.css";
import { motion } from "framer-motion";

export const NavBar = () => {
  return (
    <motion.div
      className="nav-bar"
      initial={{ y: -65, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        type: "spring",
        damping: 10,
        stiffness: 100,
      }}
    >
      <div className="group">
        <div className="logo-container">
          <img className="logo" alt="Logo" src="images/FPrint.png" />
          <div className="logo-mark">Mark-X</div>{" "}
        </div>
        <div className="navbar">
          <div className="nav-text "> Home </div>{" "}
          <div className="nav-text "> About Us </div>{" "}
          <div className="nav-text"> Frame What </div>{" "}
          <div className="nav-text"> Framer Do </div>{" "}
          <div className="nav-text"> Our Cases </div>{" "}
        </div>{" "}
        <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className="frame">
          <div className="nav-CTA nav-text"> Call Me Maybe ? </div>{" "}
          <img className="image" alt="Image" src="images/Phone.png" />
        </motion.div>{" "}
        <img className="log" alt="Log" src="images/Calender.png" />
        <img className="liog" alt="Liog" src="images/Menu.png" />
      </div>{" "}
    </motion.div>
  );
};

export default NavBar;
