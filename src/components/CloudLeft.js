import React from "react";
import { motion } from "framer-motion";
const CloudLeft = () => {
  const n = 8;
  const r = 90;
  //   let xarr = [0, -64, 0, 64, 0]
  let xarr = [];
  let yinit = 490;
  let yarr = [];
  let index = []
  for (let i = 0; i < n+1; i++) {
    index.push(i)
    xarr.push(0 + 85 * (i + 1) -10);
    yinit -= i % 2 == 0 ? 0 : 45;
    yinit -= i % 3 == 0 ? 10 : -10;
    yarr.push(yinit);
  }
//   yarr.pop()
//   xarr.pop()
// index.pop()
  yarr.push(460,520)
  xarr.reverse()
  xarr.push(-50,550)
  index.push(99,98)
//   xarr.push(-40,480)
let sca = [.75, .9, 1, 0.7, 1.2, .8,.9,1.1, 1,.75,0.65];
// console.log(yarr, xarr,index,sca);
  let init = [yarr[0], xarr[0], sca[0]];
  return (
    <div className="clf-Mask-grp">
      <svg xmlns="http://www.w3.org/2000/svg" className="el1svg" fill="none">
        <mask id="maskl">
          
          {index.map((val, index) => (
            <motion.circle
              initial={{ y: [...init][0], x: [...init][1], scale: [...init][2] }}
              animate={{ y: [...yarr], x: [...xarr], scale: [...sca] }}
              type="tween"
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              key={index}
              className="circ"
              r={r}
              fill="white"
            >
              {" "}
              {init[0] = yarr[1]}
              {init[1] = xarr[1]}
              {init[2] = sca[1]}
              {yarr.shift()}
              {yarr.push(yarr[0])}
              {xarr.shift()}
              {xarr.push(xarr[0])}
              {sca.shift()}
              {sca.push(sca[0])}
            </motion.circle>
          ))}
          <rect x={0} y={375} width={600} height={125} fill="white"></rect>
        </mask>
        <image
          className="asdasdad"
          href="/img/RectangleL.png"
          mask="url(#maskl)"
        ></image>
        <div className="test1"></div>
      </svg>
      <div className="gradLF"></div>
    </div>
  );
};

export default CloudLeft;
