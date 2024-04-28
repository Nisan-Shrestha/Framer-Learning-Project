import "./page1.css";
import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import CTA from "../components/CTA";
// import { CTA } from "../components/CTA";
import CloudLeft from "../components/CloudLeft";
import CloudRight from "../components/CloudRight";
const Page1 = () => {
  return (
    <div className="f16">
      <div className="grp4">
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
          Framer got me framing like that, tell me whatcha wanna frame.
        </motion.div>
        <AnimatedText
          text="This Smooth Stuff, Uttery Buttery Smoooth Stuff"
          classname="hero-header"
          dl={.5}
        />
        <div className="pg1-parent">
          <CTA
            imgsrc={"/img/log-2.png"}
            text={"Call Me Maybe?"}
            CTAcustomClass={"c1"}
          ></CTA>
          <CTA imgsrc={"/img/log-2.png"} text={"Text Me Maybe?"}></CTA>
        </div>
        <div className="sun"></div>
        <motion.div
          initial={{ y: 391 }}
          animate={{ y: -200 }}
          transition={{ type: "inertia", velocity: -800, timeConstant: 1000 }}
          className="rocket"
        ></motion.div>
        <motion.div >

        <motion.div className="CLF" initial={{y:200}} animate={{y:0}} transition={{duration:2}}>
          <CloudLeft/>
        </motion.div>
        <motion.div  className="RLF" initial={{y:200}} animate={{y:0}} transition={{duration:2}}>
          <CloudRight/>
          
        </motion.div >
        </motion.div>
      </div>
    </div>
  );
};

export default Page1;
