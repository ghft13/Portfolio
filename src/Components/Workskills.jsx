import React from "react";
import LottieAnimation from "./LottieAnimation";
import {  motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Workskills() {
  // const [ishovered, setishovered] = useState(false);

  // useEffect(() => {
  //   if (ishovered) {
  //     gsap.to(".top-h1", { y: -120, duration: 0.2,ease:easeIn });
  //     gsap.to(".bottom-h1", { y: -120, duration: 0.2,ease:easeIn });
  //   } else {
  //     gsap.to(".top-h1", { y: 0, duration: 0.2,ease:easeIn } );
  //     gsap.to(".bottom-h1", { y: 0, duration: 0.2,ease:easeIn });
  //   }
  // }, [ishovered]);

  return (
    <div className="w-full relative text-white xl:flex xl:justify-between  px-20 py-20 header">
      <LottieAnimation />
      <div className="absolute top-60  md:top-60 xl:top-64 left-0 xl:left-20 xl:w-[40%] md:w-[100%] lg:w-[40%] flex flex-col items-center justify-center  gap-20 w-full">
        <h1 className="text-5xl  xl:text-7xl text-gray-600" style={{ fontFamily: "two" }}>
          Let's Collaborate
        </h1>

        <motion.div
          className="md:h-12 h-12  lg:h-12  text-center  xl:h-20 overflow-y-hidden relative bottom-20  z-50 "
          // onHoverStart={() => setishovered(true)}
          // onHoverEnd={() => setishovered(false)}
        >
          <motion.h1
            className=" text-4xl xl:text-6xl py-2 "
            style={{ fontFamily: "one" }}
          >
            Arajjayraj18@gmail.com
          </motion.h1>
          <motion.h1 className="text-4xl xl:text-6xl py-2"   style={{ fontFamily: "one" }}>
            Arajjayraj18@gmail.com
          
          </motion.h1>
        </motion.div>
      </div>

      <div className="absolute lg:right-10 lg:top-80 xl:right-40 xl:top-80 lg:bottom-2 bottom-48">
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
