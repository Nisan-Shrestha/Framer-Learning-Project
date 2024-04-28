import React from "react";
import AnimatedText from "../components/AnimatedText";
import { motion } from "framer-motion";
const Page3 = () => {
  const stackedImg = {
    initial: { y: 35, opacity: 0 },
    end: { y: 0, opacity: 1, transition: { duration: 0.75 } },
  };

  return (
    <section className="blending-modes">
      <div className="opacity-slider">
        <div className="fill-fill-style">
          <h1 className="think-hub-discover-your-container">
            <AnimatedText
              text={`Think Hub: `}
              classname={"think-hub"}
              whileInViewAmt={0.2}
            ></AnimatedText>
            <AnimatedText
              text={`Discover Your Inner Traumas`}
              classname={"discover-your-inner"}
              dl={0.2}
              whileInViewAmt={0.2}
            ></AnimatedText>
            {/* <p className="think-hub">Think Hub:</p>
              <p className="discover-your-inner">Discover Your Inner Traumas</p> */}
          </h1>
          <div className="shadow-shading">
            <AnimatedText
              xpx={64}
              ypx={0}
              stgChld={0.06}
              whileInViewAmt={0.4}
              text={`From Normal, None to Over and Beyond! We specialize in all levels of Thinking!`}
              classname="from-normal-none"
            ></AnimatedText>
          </div>
        </div>
      </div>
      <div className="propery-property-set">
        <motion.div
          initial={{ opacity: 0, x:-40}}
          whileInView={{ opacity: 1 ,x:0}}
          transition={{ duration: 1 }}
          className="frame-group"
        >
          <motion.img
            initial={{ scale: 1.5, opacity: 0, y: 30 }}
            whileInView={{ scale: 1, opacity: 0.95, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="frame-child2"
            alt=""
            src="/group-15@2x.png"
          />
          <div className="placement-placement">
            <div className="wrap-card-header">
              <div className="font-family-fonts">
                <div className="our-services-wrapper">
                  <h2 className="our-services">Our Services</h2>
                </div>
              </div>{" "}
              <div className="font-family-fonts-parent">
                <div className="wrapper">
                  <h1 className="h1">♥</h1>
                </div>
              </div>
            </div>
            <div className="data-processor">
              <div className="div">1001</div>
            </div>
            <div className="number-cruncher">
              <div className="error-handler">
                <h1 className="growith-hacking-cases">growth hacking cases</h1>
              </div>
              <h2 className="to-be-or">
                To Be or Not To Be, Now that is the question of a lifetime, that
                hopefully will be answered!
              </h2>
            </div>
            <div className="crisis-consult">
              <span>$0.00</span>
              <span className="crisis-consult1"> / crisis consult</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 ,x:40,scale:.95}}
          whileInView={{ opacity: 1,x:0 ,scale:1}}
          transition={{ duration: 1 }}
          className="frame-container"
        >
          <motion.img
            initial={{ scale: 1.5, opacity: 0, y: 30 }}
            whileInView={{ scale: 1, opacity: 0.95, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="frame-child3"
            alt=""
            src="/group-15-1@2x.png"
          />
          <div className="rectangle-group">
            <div className="rectangle-div" />
            <div className="frame-div">
              <div className="frame-wrapper">
                <div className="frame-parent1">
                  <motion.div
                    initial="initial"
                    //  animate="end"
                    whileInView="end"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      staggerChildren: 0.25, // Stagger the children animations
                      delayChildren: 0, // No delay before starting the first child
                    }}
                    className="frame-parent2"
                  >
                    <motion.img
                      variants={stackedImg}
                      className="frame-child4"
                      alt=""
                      src="/group-12-2@2x.png"
                    />
                    <motion.img
                      variants={stackedImg}
                      className="frame-child5"
                      alt=""
                      src="/group-12-2@2x.png"
                    />
                    <motion.img
                      variants={stackedImg}
                      className="frame-child6"
                      alt=""
                      src="/group-12-2@2x.png"
                    />
                    <motion.div
                      variants={stackedImg}
                      className="frame-wrapper2"
                    >
                      <div className="container">
                        <h1 className="h11">+</h1>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              <div className="stroke-width-stroke-wid">
                <div className="patterns-patterns-parent">
                  <div className="patterns-patterns">
                    <div className="gradient-gradients">
                      <h2 className="our-services1">Our Services</h2>
                    </div>
                  </div>
                  <div className="blending-image-images">
                    <div className="opacity-mask-opacity">40</div>
                  </div>
                  <h1 className="experts">experts</h1>
                </div>
              </div>
              <div className="drop-shadow-drop-shadows">
                <h1 className="h12">♥</h1>
              </div>
            </div>
            <div className="frame-wrapper3">
              <div className="skilled-in-overthing-underthi-parent">
                <h2 className="skilled-in-overthing">
                  Skilled in overthing, underthinking, not thinking and thinking
                  about thoughts and everything else!
                </h2>
                <div className="thought-think">
                  <span>$0.00</span>
                  <span className="thought-think1"> / thought think</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Page3;
