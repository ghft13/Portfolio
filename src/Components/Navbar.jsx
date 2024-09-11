import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
const Navbar = ({controls}) => {
 
  function onenter() {
    controls.start({ scale: 3, backgroundColor: "#6b7280" });
  }

  function onleave() {
    controls.start({ scale: 1, backgroundColor: "white" });
  }

  return (

    <>
      <div className="w-full h-full text-box text-white z-10 main ">
        <div className="flex justify-between w-full items-center navbar py-5 px-5 md:py-7 md:px-10 lg:py-10 lg:px-20 xl:py-10 xl:px-20 fixed z-50 ">
          <motion.div
            onMouseEnter={onenter}
            onMouseLeave={onleave}
            className="z-10"
          >
            <h1 className="text-lg">Jayraj Araj</h1>
          </motion.div>
          <div className="flex gap-9 md:gap-20 lg:gap-20 xl:gap-20 justify-center items-center z-10">
            <motion.a
              onMouseEnter={onenter}
              onMouseLeave={onleave}
              href="/Project"
              className="text-lg"
            >
              Projects
            </motion.a>
            <motion.a
              onMouseEnter={onenter}
              onMouseLeave={onleave}
              className="text-lg"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              className="text-lg"
              onMouseEnter={onenter}
              onMouseLeave={onleave}
            >
              <FaLinkedin />
            </motion.a>
          </div>

          <motion.div
            onMouseEnter={onenter}
            onMouseLeave={onleave}
            className="z-10"
          >
            <h1 className="text-lg border-b-2 hidden sm:block md:block lg:block xl:block">Email</h1>
          </motion.div>
        </div>

        <div className="w-full py-32  px-10 xl:px-20 border-t-2 border-gray-100 relative">
          {["Full", "Stack", "Developer"].map((ele, i) => (
            <div className="flex w-screen  xl:w-3/4  " key={i}>
               {i===2 && (<motion.div initial={{width:0}} animate={{width:"19vw"}} transition={{ease:[0.45, 0, 0.55, 1],duration:2,  repeat: Infinity, } } className="w-[9vw] h-[8vw] rounded mr-[1vw] relative top-2">
                  <img src='/personal.jpg' className="w-full  h-20 xl:h-full xl:object-contain" alt="personal"></img>
                </motion.div>)}
              <h1 className="text-4xl sm:text-6xl  md:text-8xl lg:text-[10vw] uppercase  md:leading-[17vh] lg:leading-[17vh] xl:leading-[17vh] font-bold tracking-tight">
                {ele}
              </h1>
            </div>
          ))}
         
          <div
            className="absolute w-20 h-20 right-5 md:right-20 lg:right-20 xl-right-20 bottom-0 z-20 "
            onMouseEnter={onenter}
            onMouseLeave={onleave}>
            <h1 className="text-xl  lg:text-3xl md:text-3xl xl-text-:3xl border-b-2 ">LinkedIn</h1>
          </div>
        </div>

      
      </div>
    </>
  );
};

export default Navbar;
