import React from "react";
import Lottie from "react-lottie";
import animationData from "./Animation - 1725028187904.json";


function LottieAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      
  return (
    <div className="w-full h-screen">
        <Lottie options={defaultOptions} />
    </div>
  )
}

export default LottieAnimation