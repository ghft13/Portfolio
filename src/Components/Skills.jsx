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
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pinele",
          //      markers: true,
          pin: true,
          start: "top top",
          end: "1500% top",
          scrub: 2,
        },
      });

      tl.to(
        ".react",
        {
          y: -900,
          opacity: 1,
        },
        "a"
      );
      tl.to(
        ".nodejs",
        {
          y: -500,
          opacity: 1,
        },
        "a"
      );
      tl.to(
        ".express",
        {
          y: -500,
          opacity: 1,
        },
        "a"
      );

      tl.to(
        ".connect",
        {
          y: -1200,
          scrub: 1,
        },
        "b"
      );

      tl.to(
        ".workskills ",
        {
          y: -1000,
          scrub: 1,
        },
        "c"
      );

      let t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".workskills ",
          start: "600% top",
          end: "800% bottom",
          scrub: true,
          //    markers: true,
        },
      });

      t2.to(".firstskill", {
        color: " #000000",
        opacity: 0,
      });
    });

    return () => ctx.revert(); // <- cleanup!
  }, []);

  return (
    <div className="w-full bg-black text-white py-20 Skills relative overflow-hidden">
      <div className="w-full pinele relative">
        <h1 className="text-[20vw] text-center tracking-normal title text-gray-800">
          Skills
        </h1>
        <div className="w-full relative">
          <div className="absolute -top-40 left-20 w-[15vw]">
            <img
              src="nodejs.png"
              className="w-full object-contain nodejs opacity-0"
              alt="Node.js"
            />
          </div>
          <div className="absolute -top-40 right-40 w-[15vw]">
            <img
              src="express.png"
              className="w-full object-contain express opacity-0"
              alt="Express.js"
            />
          </div>
          <div className="absolute top-52 left-1/2 w-[15vw]">
            <img
              src="react.png"
              className="w-full object-contain react opacity-0"
              alt="React.js"
            />
          </div>

          <div className="w-full  absolute top-[300px] connect px-10 py-10 rounded-tl-3xl rounded-tr-3xl flex z-20">
            <motion.h1
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
              className=" text-gray-500 uppercase text-center text-[18vw] text-nowrap tracking-tight leading-none border-t-2 border-b-2 pr-5"
            >
              Let's get Connected
            </motion.h1>
            <motion.h1
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
              className="text-gray-500 uppercase text-center text-[18vw] text-nowrap tracking-tight leading-none border-t-2 border-b-2 pr-5"
            >
              Let's get Connected
            </motion.h1>
          </div>

          <div className="w-full absolute top-[190px] px-10 py-20 text-white workskills z-20">
            <div className="border-t-[1px] border-white py-10 flex justify-between items-center firstskill">
              <h2 className="text-xl" style={{ fontFamily: "icomoon" }}>
                [01]
              </h2>
              <h1
                className="text-3xl tracking-wide"
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
                className="w-2/6 text-2xl leading-[25px]"
                style={{ fontFamily: "two" }}
              >
                I love to create and to craft responsive and visually appealing
                websites by Using HTML for structure, CSS for styling, and
                JavaScript for dynamic interactions.
              </h4>
            </div>
            <div className="border-t-[1px] border-white py-10 flex justify-between items-center first">
              <h2 className="text-xl" style={{ fontFamily: "icomoon" }}>
                [02]
              </h2>
              <h1
                className="text-3xl tracking-wide"
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
                className="w-2/6 text-2xl leading-[25px]"
                style={{ fontFamily: "two" }}
              >
                I have a strong command of React, which help me to build
                interactive and efficient user interfaces. With GSAP, I am able
                to create smooth animations. Also Good understanding of git and
                github which help for collaborative project management and also
                to manage my own projects
              </h4>
            </div>
            <div className="border-t-[1px] border-white py-10 flex justify-between items-center first">
              <h2 className="text-xl" style={{ fontFamily: "icomoon" }}>
                [03]
              </h2>
              <h1
                className="text-3xl tracking-wide "
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
                className="w-2/6 text-2xl leading-[25px]"
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
