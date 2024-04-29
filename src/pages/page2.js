import React from "react";
import AnimCard from "../components/AnimCard";
import "./page2.css";
import { useState, useEffect } from "react";
import { delay, easeInOut, motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import CounterText from "../components/CounterText";
const Page2 = () => {
  const [zIndex1, setZIndex1] = useState(2);
  const [zIndex2, setZIndex2] = useState(3);
  const [zIndex3, setZIndex3] = useState(1);

  const cycleDuration = 4.5;
  const delay = 2.2;
  let movingLeft = false;
  const handleZIndexUpdate = (latest) => {
    if (latest.x >= 125) {
      movingLeft = true;
    }
    if (latest.x <= 10) movingLeft = false;
    if (movingLeft) {
      setZIndex1(1);
      setZIndex2(2);
      setZIndex3(3);
      return;
    }
    if (latest.x >= 25 && latest.x <= 80) {
      setZIndex1(3);
      setZIndex2(2);
      setZIndex3(1);
    } else if (latest.x > 80) {
      setZIndex1(2);
      setZIndex2(1);
      setZIndex3(3);
    } else {
      setZIndex1(2);
      setZIndex2(3);
      setZIndex3(1);
    }
  };

  return (
    <section className="star-rating">
      <div className="calendar-picker">
        <div className="card-layout">
          <motion.div
            className="rot"
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            initial={{ x: -75, y: 30, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <AnimCard />
          </motion.div>
          {/* <img className="rot-card1-icon" alt="" src="/rot-card1.svg" /> */}
          <div className="map-view-wrapper">
            <div className="map-view">
              <div className="video-player">
                <motion.div
                  className="card4"
                  whileInView={{ x: 0, y: 0, opacity: 0.8 }}
                  viewport={{ once: true, amount: 0.5 }}
                  initial={{ x: -30, y: 75, opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  <img
                    className="card4-child"
                    alt=""
                    src="/public/images/focus.webp"
                  />

                  <div className="timer-control">
                    <CounterText
                      start={0}
                      end={100}
                      duration={8}
                      suffix={"%"}
                      exponent={4}
                    ></CounterText>
                  </div>
                  <div className="tool-tip-box">
                    <h2 className="stress-over-no-fun-container">
                      <p className="stress-over">Focus Mode</p>
                      <p className="no-fun">Just Do It!</p>
                    </h2>
                  </div>
                </motion.div>
              </div>
              <motion.div
                className="rectangle-parent"
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                initial={{ x: 0, y: 75, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <div className="frame-child" />
                <div className="keepmoving-wrapper">
                  <h2 className="keepmoving">#keepmoving</h2>
                </div>
                <div className="search-bar">
                  <div className="frame-parent">
                    <motion.img
                      initial={{ x: 0, scale: 0.75 }}
                      transition={{
                        repeat: Infinity,
                        duration: 6,
                        delay: 2.2,
                      }}
                      animate={{
                        x: [0, 75, 150, 0],
                        scale: [0.75, 1, 0.75, 0.75],
                      }}
                      onUpdate={handleZIndexUpdate}
                      style={{ zIndex: zIndex1 }}
                      className="frame-item"
                      alt=""
                      src="images/g1.png"
                    />

                    <motion.img
                      initial={{ x: 0, scale: 1 }}
                      transition={{
                        repeat: Infinity,
                        duration: 6,
                        delay: 2.2,
                      }}
                      style={{ zIndex: zIndex2 }}
                      animate={{
                        x: [0, 75, -75, 0],
                        scale: [1, 0.75, 0.75, 1],
                      }}
                      className="frame-inner"
                      alt=""
                      src="/images/g2.png"
                    />

                    <motion.img
                      initial={{ x: 0, scale: 0.75 }}
                      transition={{
                        repeat: Infinity,
                        duration: 6,
                        delay: 2.2,
                      }}
                      style={{ zIndex: zIndex3 }}
                      animate={{
                        x: [0, -150, -75, 0],
                        scale: [0.75, 0.75, 1, 0.75],
                      }}
                      className="group-icon"
                      alt=""
                      src="/images/g3.png"
                    />
                  </div>
                  <div className="modal-dialog">
                    <h1 className="focus-on-now">
                      <p className="focus-on">Growth Matters!</p>
                    </h1>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="breadcrumb-trail">
          <div className="banner-layout-wrapper">
            <div className="banner-layout">
              <div className="range-slider">
                <motion.img
                  initial={{ y: -125, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true, amount: 1 }}
                  className="card2-icon"
                  alt=""
                  src="/card2.svg"
                />
              </div>
              <div className="multi-select">
                <div className="star-rating-set">
                  <AnimatedText
                    text="Why Me?"
                    classname="why-me"
                    ypx={82}
                    whileInViewAmt={0.5}
                    duration={1.5}
                    stgChld={0.2}
                    dl={0.7}
                  ></AnimatedText>
                  {/* <h1 className="why-me">Why Me?</h1> */}
                </div>
                <motion.div className="tree-view">
                  <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: true, amount: 0.65 }}
                    className="card3"
                  >
                    <img className="card3-icon" alt="" src="/card3@2x.png" />
                    <div className="table-of-contents">
                      <CounterText
                        start={0}
                        end={10000}
                        duration={2}
                        exponent={4.4}
                      ></CounterText>
                    </div>
                    <div className="stepper-navigation">
                      <h1 className="things-to-do">
                        <p className="things">Things To Do!</p>
                      </h1>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                    viewport={{ once: true, amount: 0.65 }}
                    className="column-chart"
                  >
                    <div className="circle">
                      <div className="container-cluster">
                        <motion.img
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear",
                          }}
                          className="curve-text"
                          alt="Curve text"
                          src="/img/curve text.png"
                        />
                        <img
                        style={{borderRadius:"50%",scale:"1.2"}}
                          className="frame-child1"
                          alt=""
                          src="/images/heart.webp"
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
          <motion.div
            className="card6"
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            initial={{ x: 70, y: 10, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="card6-child" />
            <div className="triangle-trinity">
              <div className="icon-iconset-parent">
                <div className="icon-iconset">
                  <img
                    className="icon-iconset-child"
                    alt=""
                    src="/images/Tool.png"
                  />
                  <img className="icon-iconset-child" alt="" src="/images/" />
                </div>
                <div className="driving-innovation-forward-parent">
                  <div className="driving-innovation-forward">
                    Challenges, Make Champions!
                  </div>
                  <h1 className="one-day-we-will-container">
                    <p className="one-day">Learn Today</p>
                    <p className="we-will-make">Conquer Challenges!</p>
                  </h1>
                </div>
              </div>
            </div>
            <motion.img
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: [0, 0.1, 0.8, 1] }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              // animate={{ y: 0 }}
              className="image-5-icon"
              alt=""
              src="/image-5@2x.png"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Page2;
