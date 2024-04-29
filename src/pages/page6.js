import React from "react";
import { easeOut, motion } from "framer-motion";
import Anim3d from "../components/Anim3d";
import ButtonWithControlledHover from "../components/ButtonWithControlledHover";
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
              viewport={{ once: true, amount: 0.8 }}
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
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delayChildren: 2.2, staggerChildren: 0.2 }}
              className="frame-parent16"
            >
              <motion.div variants={vars} className="name-wrapper">
                <input placeholder="Name" className="name"></input>
              </motion.div>
              <motion.div variants={vars} className="name-wrapper">
                <input placeholder="Contact" className="name"></input>
              </motion.div>
              <motion.div variants={vars} className="name-wrapper">
                <input placeholder="Email" className="name"></input>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.75, delay: 2.7 }}
              className="name-wrapper1"
            >
              <input className="name3" placeholder="Comment"></input>
            </motion.div>
          </div>
          <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
            <motion.button
              // onHoverEnd={(e) => {}}
              initial={{ opacity: 0, y: 100, scale: 0.5 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.75,
                  delay: 3.4, // Correctly placing the delay
                  
                },
                viewport: { once: true },
              }}
              // whileHover={{
              //   scale: 1.05,
              //   transition: {
              //     duration: 0.2,
              //     delay: 0, // Ensuring no delay on hover
              //   },
              // }}
              className="frame-parent17"
            >
              <div className="frame-wrapper11">
                <div className="wrapper6">
                  <h1 className="h19">↗</h1>
                </div>
              </div>
              <h1 className="send">Send</h1>
            </motion.button>

            {/* <ButtonWithControlledHover/> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Page6;
