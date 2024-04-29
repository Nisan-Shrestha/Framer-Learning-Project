/* eslint-disable react/prop-types */
import React from "react";
import { useEffect, useState } from "react";
import "./style.css";
import { motion, useAnimation } from "framer-motion";
import RotImg from "./RotImg";
const AnimCard = () => {
  return (
    <div className="rot">
      <div className="cardHead">40+</div>
      <div className="cardSubHead">Qualified Experts</div>
      <div className="overlap-group">
        {/* <img className="card-circle" alt="Card circle" src="/img/card-circle.svg" /> */}
        {/* <img className="path" alt="Path" src="/img/path-1.svg" /> */}
        {/* <img className="img" alt="Path" src="/img/path-2.svg" /> */}
        {/* <img className="path-2" alt="Path" src="/img/path-3.svg" /> */}
        {/* <img className="element" alt="Element" src="/img/40.svg" /> */}
        {/* <img className="qualifiedexperts" alt="Qualifiedexperts" src="/img/qualified-experts.svg" /> */}
        {/* <img className="img-2" alt="Img" src="/img/image.svg" /> */}
        <img className="group" alt="Group" src="/img/group-3.png" />
        <RotImg imgsrc="/images/ProfP1.png" dl={1} scale={.6} radius={95} phase={0} freq={.25}></RotImg>
        <RotImg imgsrc="/images/ProfP2.png" dl={1} scale={.6} radius={95} phase={3.1415*2/3} freq={.25}></RotImg>
        <RotImg imgsrc="/images/ProfP3.png" dl={1} scale={.6} radius={95} phase={3.1415*4/3} freq={.25}></RotImg>
        <RotImg imgsrc="/images/ProfP4.png" dl={1} scale={.75} radius={155} phase={3.1415/3+0} freq={.25}></RotImg>
        <RotImg imgsrc="/images/ProfP5.png" dl={1} scale={.75} radius={155} phase={3.1415/3+3.1415*2/3} freq={.25}></RotImg>
        <RotImg imgsrc="/images/ProfP6.png" dl={1} scale={.75} radius={155} phase={3.1415/3+3.1415*4/3} freq={.25}></RotImg>
        <RotImg imgsrc="/images/ProfP7.png" dl={1} scale={.7} radius={215} phase={0} freq={.25}></RotImg>
        <RotImg imgsrc="/images/ProfP8.png" dl={1} scale={.7} radius={215} phase={3.1415*2/3} freq={.25}></RotImg>
        <RotImg imgsrc="/images/ProfP9.png" dl={1} scale={.7} radius={215} phase={3.1415*4/3} freq={.25}></RotImg>

        {/* <RotImg radius={120} phase={3.1415*1.0/3} freq={.25}></RotImg> */}
        {/* <img className="group-3" alt="Group" src="/img/group-3.png" />
                <img className="group-4" alt="Group" src="/img/group-3.png" />
                <img className="group-5" alt="Group" src="/img/group-3.png" />
                <img className="group-6" alt="Group" src="/img/group-3.png" />
                <img className="group-7" alt="Group" src="/img/group-3.png" />
                <img className="group-8" alt="Group" src="/img/group-3.png" /> */}
      </div>
    </div>
  );
};

export default AnimCard;
