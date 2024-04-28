import React from "react";
import { easeOut, motion } from "framer-motion";
import Anim3d from "../components/Anim3d";

const Page6 = () => {
  const vars = {
    initial: { opacity: 0, y: 150 },
    end: { opacity: 1, y: 0, transition: { duration: 0.75 } },
  };

  return (
    <section className="output-link">
      <div className="frame-parent13">
        <div className="frame-wrapper9">
          <div className="contact-us-parent">
            <Anim3d
              text="Contact Us"
              classname={"contact-us"}
              xpx={250}
              ypx={0}
              duration={1}
              whileInViewAmt={1}
              stgChld={0.13}
              dl={0}
            ></Anim3d>
            <motion.div
              initial={{ y: 86, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
              className="wari-bata-pari-road-984-122-parent"
            >
              <h1 className="wari-bata-pari-container">
                <p className="wari-bata-pari">Wari Bata Pari Road</p>
                <p className="p">(984) 122-33322</p>
                <p className="khaikkhaikkthacom">KhaiKKhaiK@ktha.com</p>
                <p className="cloud9-lifemandu">420 Cloud9, Lifemandu</p>
              </h1>
              <div className="frame-wrapper10">
                <div className="wrapper5">
                  <h1 className="h18">◈</h1>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="frame-parent14">
          <div className="frame-parent15">
            <motion.div
              initial="initial"
              whileInView="end"
              transition={{ delayChildren: 2.2, staggerChildren: 0.2 }}
              className="frame-parent16"
            >
              <motion.div variants={vars} className="name-wrapper">
                <h1 className="name">Name</h1>
              </motion.div>
              <motion.div variants={vars} className="name-container">
                <h1 className="name1">Name</h1>
              </motion.div>
              <motion.div variants={vars} className="name-frame">
                <h1 className="name2">Name</h1>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 2.7 }}
              className="name-wrapper1"
            >
              <h1 className="name3">Name</h1>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100,scale:.5 }}
            whileInView={{ opacity: 1, y: 0,scale:1}}
            transition={{ duration: 0.75, delay: 3.4 }}
            className="frame-parent17"
          >
            <div className="frame-wrapper11">
              <div className="wrapper6">
                <h1 className="h19">↗</h1>
              </div>
            </div>
            <h1 className="send">Send</h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Page6;
