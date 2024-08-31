import React, { useState, useEffect } from "react";
import LottieAnimation from "./LottieAnimation";
import { easeIn, motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Workskills() {
  const [ishovered, setishovered] = useState(false);

  useEffect(() => {
    if (ishovered) {
      gsap.to(".top-h1", { y: -90, duration: 0.2,ease:easeIn });
      gsap.to(".bottom-h1", { y: -90, duration: 0.2,ease:easeIn });
    } else {
      gsap.to(".top-h1", { y: 0, duration: 0.2,ease:easeIn } );
      gsap.to(".bottom-h1", { y: 0, duration: 0.2,ease:easeIn });
    }
  }, [ishovered]);

  return (
    <div className="w-full relative text-white flex justify-between px-20 py-20 header z-50">
      <LottieAnimation />
      <div className="absolute top-40 left-20">
        <h1 className="text-5xl text-gray-600" style={{ fontFamily: "two" }}>
          Let's Collaborate
        </h1>
        <motion.div
          className="h-20 overflow-y-hidden relative"
          onHoverStart={() => setishovered(true)}
          onHoverEnd={() => setishovered(false)}
        >
          <motion.h1
            className="text-6xl py-2 top-h1"
            style={{ fontFamily: "one" }}
          >
            Arajjayraj18@gmail.com
          </motion.h1>
          <motion.h1 className="text-6xl py-2 bottom-h1">
            Arajjayraj18@gmail.com
          </motion.h1>
        </motion.div>
      </div>

      <div className="absolute right-40 top-52">
        <div className="flex gap-5 items-center border-t-2 py-2 border-white">
          <h3 className="text-xl" style={{ fontFamily: "icomoon" }}>
            [01]
          </h3>
          <h3 className="text-xl" style={{ fontFamily: "neueMontreal1" }}>
            LinkedIn
          </h3>
        </div>

        <div className="flex gap-5 items-center border-t-2 py-2 border-white">
          <h3 className="text-xl" style={{ fontFamily: "icomoon" }}>
            [02]
          </h3>
          <h3 className="text-xl" style={{ fontFamily: "neueMontreal1" }}>
            Instagram
          </h3>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 text-center w-full">
        <h1
          className="text-[16vw] tracking-tight"
          style={{ fontFamily: "three" }}
        >
          Connect
        </h1>
      </div>
    </div>
  );
}

export default Workskills;
