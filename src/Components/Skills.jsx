import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // For large screens
      mm.add("(min-width:768px)", () => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".pinele",
            //  markers: true, // Disable markers
            pin: true,
            start: "top top",
            end: "1600% top", // Reduced scroll distance
            scrub: 1,
          },
        });

        tl.to(".react", { y: -900, opacity: 1 }, "start");
        tl.to(".nodejs", { y: -800, opacity: 1 }, "start");
        tl.to(".express", { y: -800, opacity: 1 }, "start");

        // Additional animations (without overlap)
        tl.to(".connect", { y: -1300, opacity: 1 }, "mid");
        tl.to(".workskills", { y: -1400, opacity: 1 }, "end");
      });
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width:320px) and (max-width:767px)", () => {
        let t2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".pinele",
            pin: true,
            //markers: true,
            start: "top 50%",
            end: "1500% top", // Reduced scroll distance
            scrub: 1,
          },
        });

        t2.to(".react", { y: -900, opacity: 1 }, "start");
        t2.to(".nodejs", { y: -800, opacity: 1 }, "start");
        t2.to(".express", { y: -800, opacity: 1 }, "start");

        t2.to(".connect", { y: -1100, opacity: 1,scrub:5 }, "mid");
        t2.to(".workskills", { y: -1200, opacity: 1 }, "end");
      });
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div className="w-full bg-black text-white py-20 Skills relative overflow-hidden">
      <div className="w-full pinele relative">
        <h1 className="text-[20vw] text-center tracking-normal title text-gray-800">
          Skills
        </h1>
        <div className="w-full relative">
          <div className="absolute left-5 w-20 top-40   xl:-top-40 xl:left-[1200px] xl:w-[15vw] lg:left-20 lg:w-[15vw] md:left-20 md:w-[15vw] sm:left-[20px] sm:w-[15vw] ">
            <img
              src="nodejs.png"
              className="w-full object-contain nodejs"
              alt="Node.js"
            />
          </div>
          <div className="absolute w-20  top-40 left-80 xl:-top-40  xl:w-[15vw] lg:top-40 lg:left-[1000px] lg:w-[15vw] md:left-[650px] md:w-[15vw] sm:left-[500px] sm:w-[15vw] ">
            <img
              src="express.png"
              className="w-full object-contain express "
              alt="Express.js"
            />
          </div>
          <div className="absolute w-20 top-80 left-44 xl:top-52 xl:left-1/2  xl:w-[15vw] lg:top-40 lg:left-[500px] lg:w-[15vw] md:left-[350px] md:w-[15vw] sm:left-[280px] sm:w-[15vw]  ">
            <img
              src="react.png"
              className="w-full object-contain react "
              alt="React.js"
            />
          </div>

          <div className="w-full  absolute top-[200px] md:top-[300px] lg:top-[300px] xl:top-[300px] connect px-10 py-10 rounded-tl-3xl rounded-tr-3xl flex z-20">
            <motion.h1
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
              className=" text-gray-500 uppercase text-center text-[16vw] xl:text-[18vw] text-nowrap tracking-tight leading-none border-t-2 border-b-2 pr-5"
            >
              Let's get Connected
            </motion.h1>
            <motion.h1
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
              className="text-gray-500 uppercase text-center text-[16vw] xl:text-[18vw] text-nowrap tracking-tight leading-none border-t-2 border-b-2 pr-5"
            >
              Let's get Connected
            </motion.h1>
          </div>

          <div className="w-full absolute xl:top-[300px] md:top-[300px] top-[100px] px-2 xl:px-10 py-20 text-white workskills z-20">
            {/* Skill 01 */}
            <div className="border-t-[1px] border-white py-10 flex flex-col sm:flex-col md:flex-row md:justify-between xl:flex-row justify-center xl:justify-between items-center gap-4 firstskill ">
              <h2
                className="text-lg xl:text-xl"
                style={{ fontFamily: "icomoon" }}
              >
                [01]
              </h2>
              <h1
                className="text-xl xl:text-2xl tracking-wide"
                style={{ fontFamily: "neueMontreal1" }}
              >
                <Typewriter
                  words={["HTML, CSS, JS"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <h4
                className="text-center w-full xl:w-2/6 lg:w-2/6 md:w-2/6  text-xl xl:text-2xl xl:leading-[25px]"
                style={{ fontFamily: "two" }}
              >
                I love to create and to craft responsive and visually appealing
                websites by Using HTML for structure, CSS for styling, and
                JavaScript for dynamic interactions.
              </h4>
            </div>

            {/* Skill 02 */}
            <div className="border-t-[1px] border-white py-10 flex flex-col sm:flex-col md:flex-row md:justify-between xl:flex-row justify-center xl:justify-between items-center gap-4 first">
              <h2
                className="text-lg xl:text-xl"
                style={{ fontFamily: "icomoon" }}
              >
                [02]
              </h2>
              <h1
                className="text-lg xl:text-2xl tracking-wide"
                style={{ fontFamily: "neueMontreal1" }}
              >
                <Typewriter
                  words={["REACT, GSAP, GIT, AND GITHUB"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h1>
              <h4
                className="text-center w-full xl:w-2/6  lg:w-2/6  md:w-2/6 text-lg xl:text-2xl xl:leading-[25px]"
                style={{ fontFamily: "two" }}
              >
                I have a strong command of React, which help me to build
                interactive and efficient user interfaces. With GSAP, I am able
                to create smooth animations. Also Good understanding of git and
                github which help for collaborative project management and also
                to manage my own projects.
              </h4>
            </div>

            {/* Skill 03 */}
            <div className="border-t-[1px] border-white py-10 flex flex-col sm:flex-col md:flex-row md:justify-between xl:flex-row justify-center xl:justify-between items-center gap-4 first">
              <h2 className="text-xl" style={{ fontFamily: "icomoon" }}>
                [03]
              </h2>
              <h1
                className="text-lg tracking-wide"
                style={{ fontFamily: "neueMontreal1" }}
              >
                <Typewriter
                  words={["NODEJS, EXPRESS, MONGODB"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={3000}
                />
              </h1>
              <h4
                className="text-center w-full xl:w-2/6  lg:w-2/6 md:w-2/6  text-lg xl:text-2xl  xl:leading-[25px]"
                style={{ fontFamily: "two" }}
              >
                I have a good understanding of backend processes, including how
                requests flow from the client to the server and how to handle
                those requests effectively. I am skilled in ensuring that
                requests are processed efficiently and that responses are
                delivered accurately.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
