// import React from "react";
// import {motion} from 'framer-motion'
// import { useAnimation } from "framer-motion";
// import { useRef } from "react";
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
// const Header = () => {

//     const movingdiv = useRef(null);
//     const controls = useAnimation(); // Animation controls
  
//     function onenter() {
//       controls.start({ scale: 3, backgroundColor: "#6b7280" });
//     }
  
//     function onleave() {
//       controls.start({ scale: 1, backgroundColor: "white" });
//     }
//   return (
//     <div className="flex justify-between w-full items-center navbar py-10 px-20  text-white">
//       <motion.div
//         onMouseEnter={onenter}
//         onMouseLeave={onleave}
//         className="z-20"
//       >
//         <h1 className="text-2xl">Jayraj Araj</h1>
//       </motion.div>
//       <div className="flex gap-20 justify-center items-center z-10">
//         <motion.a
//           onMouseEnter={onenter}
//           onMouseLeave={onleave}
//           href="/Project"
//           className="text-2xl"
//         >
//           Projects
//         </motion.a>
//         <motion.a
//           onMouseEnter={onenter}
//           onMouseLeave={onleave}
//           className="text-2xl"
//         >
//           <FaGithub />
//         </motion.a>
//         <motion.a
//           className="text-2xl"
//           onMouseEnter={onenter}
//           onMouseLeave={onleave}
//         >
//           <FaLinkedin />
//         </motion.a>
//       </div>

//       <motion.div
//         onMouseEnter={onenter}
//         onMouseLeave={onleave}
//         className="z-10"
//       >
//         <h1 className="text-2xl border-b-2">Email</h1>
//       </motion.div>
//     </div>
//   );
// };

// export default Header;
