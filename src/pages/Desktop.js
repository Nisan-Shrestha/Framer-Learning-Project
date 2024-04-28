import "./Desktop.css";
import React from "react";
import { motion } from "framer-motion";

import NavBar from "../components/NavBar";


import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
const Desktop = () => {
  return (
    <div className="desktop-1">
      <NavBar />
      {/* <img className="desktop-1-child" alt="" src="/frame-16@2x.png" /> */}
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      
    </div>
  );
};

export default Desktop;
