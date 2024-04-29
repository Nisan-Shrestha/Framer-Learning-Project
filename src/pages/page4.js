import React from "react";

import { easeInOut, motion, spring } from "framer-motion";
import CTA from "../components/CTA";
import AnimatedText from "../components/AnimatedText";
const Page4 = () => {
  return (
    <section className="input-filter">
      <div className="access-manager">
        <div className="validation-checker">
          <div className="transformer">
            <div className="sequence-controller">
              <div className="condition-handler">
                <motion.div
                  initial={{ x: 350, y: 220 }}
                  viewport={{ amount: 0.1, once: true }}
                  whileInView={{ x: 0, y: 0 }}
                  transition={{ duration: 2.2, type: "spring" }}
                  className="iteration-manager"
                >
                  <h3 className="years-of-experience">
                    23+ Years of Living
                  </h3>
                </motion.div>
              </div>
              <motion.img
                initial={{ x: 430, y: 200 }}
                viewport={{ amount: 0.1, once: true }}
                whileInView={{ x: 0, y: 0 }}
                transition={{ duration: 2.2, type: "spring" }}
                className="nisan-shrestha-10"
                alt=""
                src="/images/ProfP1.png"
              />
            </div>
          </div>
          <div className="nisan-shrestha-1-parent">
            <motion.img
              initial={{ x: 175, y: 130 }}
              viewport={{ amount: 0.1, once: true }}
              whileInView={{ x: 0, y: 0 }}
              transition={{ duration: 2.2, type: "spring" }}
              className="nisan-shrestha-1"
              alt=""
              src="/nisan-shrestha-1@2x.png"
            />
            <div className="data-queue">
              <motion.div
                initial={{ x: 40, y: 330 }}
                viewport={{ amount: 0.1, once: true }}
                whileInView={{ x: 0, y: 0 }}
                transition={{ duration: 2.2, type: "spring" }}
                className="data-dequeue"
              >
                <h3 className="years-in-ranting">17+ Years in Ranting</h3>
              </motion.div>
            </div>
          </div>
          <motion.img
            initial={{ x: -280, y: 180 }}
            viewport={{ amount: 0.1, once: true }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ duration: 2.2, type: "spring" }}
            className="nisan-shrestha-6"
            alt=""
            src="/nisan-shrestha-6@2x.png"
          />
        </div>
      </div>
      <motion.img
        initial={{ x: -180, y: 80 }}
        viewport={{ amount: 0.1, once: true }}
        whileInView={{ x: -60, y: 20 }}
        transition={{ duration: 2.2, type: "spring" }}
        className="nisan-shrestha-7"
        alt=""
        src="/nisan-shrestha-7@2x.png"
      />
      <div className="timer">
        <div className="scheduler">
          <h1 className="meet-our-experts">Explore Your Thoughts</h1>
        </div>
        <motion.img
          initial={{ x: -390, y: 10 }}
          viewport={{ amount: 0.1, once: true }}
          whileInView={{ x: 0, y: 0 }}
          transition={{ duration: 2.2, type: "spring" }}
          className="nisan-shrestha-4"
          alt=""
          src="/images/Til1.jpg"
        />
      </div>
      <div className="centerer">
        <CTA
          delay={0.6}
          whileInViewAmt={1}
          imgsrc="/group-1@2x.png"
          text="Expand Your Mind!"
          CTAcustomClass="async-manager"
        />
        <CTA
          delay={0.6}
          whileInViewAmt={1}
          imgsrc="/group-1-1@2x.png"
          text="Open Your Eyes!"
          CTAcustomClass="async-manager1"
        />
      </div>
      <div className="data-flow-manager">
        <div className="data-sink">
          <div className="data-source">
            <div className="data-transfer">
              <div className="sync-manager">
                <div className="log-parser">
                  <motion.img
                    initial={{ x: 390, y: -230 }}
                    viewport={{ amount: 0.1, once: true }}
                    whileInView={{ x: 0, y: 0 }}
                    transition={{ duration: 2.2, type: "spring" }}
                    className="nisan-shrestha-2"
                    alt=""
                    src="/images/Til3.jpg"
                  />
                  <motion.img
                    initial={{ x: 320, y: -230 }}
                    viewport={{ amount: 0.1, once: true }}
                    whileInView={{ x: 0, y: 0 }}
                    transition={{ duration: 2.2, type: "spring" }}
                    className="nisan-shrestha-3"
                    alt=""
                    src="/images/Til2.jpg"
                  />
                </div>
                <motion.div
                  initial={{ x: 200, y: -280 }}
                  viewport={{ amount: 0.1, once: true }}
                  whileInView={{ x: 0, y: 0 }}
                  transition={{ duration: 2.2, type: "spring" }}
                  className="log-processor"
                >
                  <h3 className="successful-bursts">5 successful outbursts</h3>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="log-queue">
            <div className="log-dequeue">
              <motion.img
                initial={{ x: -150, y: -160, zIndex: -5 }}
                viewport={{ amount: 0.1, once: true }}
                whileInView={{ x: 0, y: 0, zIndex: 1 }}
                transition={{ duration: 2.2, type: "spring" }}
                className="nisan-shrestha-9"
                alt=""
                src="/nisan-shrestha-9@2x.png"
              />
            </div>
            <div className="log-timer">
              <motion.div
                initial={{ x: -280, y: -160 }}
                viewport={{ amount: 0.1, once: true }}
                whileInView={{ x: 0, y: 0 }}
                transition={{ duration: 2.2, type: "spring" }}
                className="log-scheduler"
              >
                <h3 className="unhappy-hours">100+ Anxious Hours</h3>
              </motion.div>
              <motion.div
                initial={{ x: -160, y: -210, zIndex: -5 }}
                viewport={{ amount: 0.1, once: true }}
                whileInView={{ x: 0, y: 0, zIndex: 1 }}
                transition={{ duration: 2.2, type: "spring" }}
                className="nisan-shrestha-8-wrapper"
              >
                <motion.img
                  className="nisan-shrestha-8"
                  alt=""
                  src="/images/Til4.jpg"
                />
              </motion.div>
            </div>
          </div>
          <div className="centererv2">
            <AnimatedText
              text={"Here to Help!"}
              classname={"here-to-help"}
              ypx={48}
              xpx={0}
              whileInViewAmt={1}
            ></AnimatedText>
            <div className="log-collector">
              <div className="log-filter">
                <motion.img
                  initial={{ y: 32, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ amount: 0.1, once: true }}
                  transition={{ type: "spring", delay: 0.6 }}
                  className="log-filter-item"
                  alt=""
                  src="/images/ProfP6.png"
                />
                <motion.img
                  initial={{ y: 32, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ amount: 0.1, once: true }}
                  transition={{ type: "spring", delay: 0.45 }}
                  className="log-filter-item"
                  alt=""
                  src="/images/ProfP7.png"
                />
                <motion.img
                  initial={{ y: 32, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ amount: 0.1, once: true }}
                  transition={{ type: "spring", delay: 0.6 }}
                  className="log-filter-item"
                  alt=""
                  src="/images/ProfP1.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page4;
