import "./page1.css";
import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import { useRef, useEffect, useState } from "react";
import CTA from "../components/CTA";
import CloudLeft from "../components/CloudLeft";
import CloudRight from "../components/CloudRight";

import Relativescroll from "../components/Relativescoll.tsx";
const Page1 = () => {
  const RocketRef = useRef(null);
  const [isRefAttached, setRefAttached] = useState(false);

  useEffect(() => {
    if (RocketRef.current) {
      console.log("RocketRef is now attached:", RocketRef.current);
      setRefAttached(true);
    }
  }, [RocketRef.current]);

  return (
    <section className="f16">
      <div className="grp4" ref={RocketRef}>
        <motion.div
          className="small-header"
          initial={{ y: -45, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          Discover Your Depths, Find Your Future.
        </motion.div>

        <div className="hero-header">
          <AnimatedText text="Ignite Your Passion" classname="" dl={0.5} />
          <AnimatedText text="Discover Your Calling" classname="" dl={1.3} />
        </div>
        <div className="pg1-parent">
          <CTA
            imgsrc={"/images/Flash.png"}
            text={"Find your Spark!"}
            CTAcustomClass={"c1"}
            invertClass={"invert"}
          ></CTA>
          <CTA imgsrc={"/images/Msg.png"} text={"Share the Word!"}></CTA>
        </div>
        <div className="sun"></div>
        {isRefAttached && <Relativescroll passedRef={RocketRef} />}
        <motion.div>
          <motion.div
            className="CLF"
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 2 }}
          >
            <CloudLeft />
          </motion.div>
          <motion.div
            className="RLF"
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 2 }}
          >
            <CloudRight />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Page1;
