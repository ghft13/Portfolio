import "./App.css";
import "./index.css";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";

import Workskills from "./Components/Workskills";
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const movingdiv = useRef(null);
  const controls = useAnimation(); 
  const scrollRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    function handleMouseMove(e) {
      if (movingdiv.current) {
        const circleWidth = movingdiv.current.offsetWidth;
        const circleHeight = movingdiv.current.offsetHeight;
        movingdiv.current.style.left = `${e.clientX - circleWidth / 2}px`;
        movingdiv.current.style.top = `${e.clientY - circleHeight / 2}px`;
      }
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      locomotiveScroll.destroy(); // Clean up Locomotive Scroll
    };
  }, []);

  return (
    <>
      <div className="relative h-full w-full bg-black overflow-x-hidden">
        <motion.div
          className="h-10 w-10 bg-white rounded-full fixed top-0 left-0 z-10"
          ref={movingdiv}
          animate={controls}
        ></motion.div>

        <div ref={scrollRef} data-scroll-container>
          <Navbar controls={controls} movingdiv={movingdiv}/>
          <Skills />
          <Workskills />
        </div>
      </div>
    </>
  );
}

export default App;
