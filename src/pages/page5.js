import React from "react";
import CTA from "../components/CTA";
import AnimatedText from "../components/AnimatedText";
import Card from "../components/Card";
import { motion } from "framer-motion";
const Page5 = () => {
  const vars = {
    initial: { opacity: 0, x: 100 },
    end: { opacity: 1, x: 0, transition: { duration: 0.75 } },
  };

  return (
    <section className="output-link">
      <div className="frame-parent3">
        <div className="frame-wrapper4">
          <div className="connector-parent">
            <div className="connector">
              <CTA
                imgsrc="/group-1-3@2x.png"
                text="Get Full Access!"
                whileInViewAmt={1}
                delay={0.1}
                CTAcustomClass={"dividerCTA divder call-me-maybe3 "}
              ></CTA>
            </div>
            <div className="frame-parent4">
              <div className="frame-wrapper5">
                <motion.img
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  initial={{ x: 20, y: 64, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  className="frame-icon"
                  alt=""
                  src="/frame-20.svg"
                />
              </div>
              
            </div>
          </div>
        </div>
        <div className="frame-parent6">
          <div className="explore-our-case-studies-parent">
            <AnimatedText
              text="Explore Our Case Studies"
              classname="explore-our-case"
            ></AnimatedText>
            <div className="frame-wrapper6">
              <motion.div
                initial="initial"
                whileInView="end"
                //  animate="end"
                // variants={vars}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  staggerChildren: 0.2, // Stagger the children animations
                  delayChildren: 0.2, // No delay before starting the first child
                }}
                className="frame-parent7"
              >
                <motion.div className="card-wrapper-ele" variants={vars}>
                  <Card imgsrc="/group-16@2x.png" text="Do What Feels Right!" />
                </motion.div>
                <motion.div className="card-wrapper-ele" variants={vars}>
                  <Card imgsrc="/group-16@2x.png" text="Do What Feels Happy!" />
                </motion.div>
                <motion.div className="card-wrapper-ele" variants={vars}>
                  <Card imgsrc="/group-16@2x.png" text="Do What Feels Easy!" />
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div className="slider-bar-wrapper">
            <div className="slider-bar">
              <AnimatedText
                text="To be or not to be that is the question to be answered as time
                moves on and we grow older. This will go ahead, all will be
                fine. To be or not to be that is the question to be answered as
                time moves on and we grow older. This will go ahead, all will be
                fine."
                classname="to-be-or1"
                xpx={25}
                ypx={0}
                stgChld={0.01}
                whileInViewAmt={0.2}
                dl={0.2}
              ></AnimatedText>
              {/* <h1 className="to-be-or1">
                To be or not to be that is the question to be answered as time
                moves on and we grow older. This will go ahead, all will be
                fine. To be or not to be that is the question to be answered as
                time moves on and we grow older. This will go ahead, all will be
                fine.
              </h1> */}
              <motion.div initial={{y:48, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:.8 ,delay:.6}}  className="form-input">
                <h1 className="explore-in-details-container">
                  <span className="explore-in-details">Explore in Details</span>
                  {` ->`}
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page5;
