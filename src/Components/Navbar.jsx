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
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".main",
       //   markers: true,
          scrub: 2,
          start: "10% top",
          end: "40% top",
        },
      });

      tl.to(".vid", {
        scale: 1.5,
        scrub: 1,
        y: 100,
      });
    });

    return () => ctx.revert();
  },[]);

  return (
    <>
      <div className="w-full h-full text-box text-white z-10 main ">
        <div className="flex justify-between w-full items-center navbar py-10 px-20 fixed z-50 ">
          <motion.div
            onMouseEnter={onenter}
            onMouseLeave={onleave}
            className="z-10"
          >
            <h1 className="text-2xl">Jayraj Araj</h1>
          </motion.div>
          <div className="flex gap-20 justify-center items-center z-10">
            <motion.a
              onMouseEnter={onenter}
              onMouseLeave={onleave}
              href="/Project"
              className="text-2xl"
            >
              Projects
            </motion.a>
            <motion.a
              onMouseEnter={onenter}
              onMouseLeave={onleave}
              className="text-2xl"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              className="text-2xl"
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
            <h1 className="text-2xl border-b-2">Email</h1>
          </motion.div>
        </div>

        <div className="w-full py-32 px-20 border-t-2 border-gray-100 relative">
          {["Full", "Stack", "Developer"].map((ele, i) => (
            <div className="flex w-3/4" key={i}>
               {i===2 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.45, 0, 0.55, 1],duration:2,  repeat: Infinity, } } className="w-[9vw] h-[8vw] rounded mr-[1vw] relative top-2">
                  <img src='/personal.jpg' className="w-full h-full " alt="personal"></img>
                </motion.div>)}
              <h1 className="text-[10vw] uppercase leading-[17vh] font-bold tracking-tight">
                {ele}
              </h1>
            </div>
          ))}
          <div className="h-2/6 w-2/12 absolute right-32 top-24">
            <video
              src="vid.mp4"
              autoPlay
              muted
              loop
              className="h-full w-full object-cover rounded-3xl overflow-hidden vid"
            ></video>
          </div>
          <div
            className="absolute w-20 h-20 right-20 bottom-0 z-20 "
            onMouseEnter={onenter}
            onMouseLeave={onleave}>
            <h1 className="text-3xl border-b-2 ">LinkedIn</h1>
          </div>
        </div>

      
      </div>
    </>
  );
};

export default Navbar;
