import React, { useState, useEffect } from "react";
import "./Style/ScrollBar.css";

const ScrollBar = (prop) => {
  //   const [scrollPercentage, setScrollPercentage] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
   
        if(window.scrollY > 450){
        const interval = setInterval(() => {
          setProgressPercentage((prevPercentage) => {
            const newPercentage = prevPercentage + 0.5;
            let limit = 0;
            if(prop.percentage == 'Fluent'|| prop.percentage == 'Native'){
limit = 100;
            }else if( prop.percentage == 'Bilingual'){
                limit = 75;
            }else{
                limit =parseInt(prop.percentage);
            }
            return newPercentage > 100 ? 100 : limit;
          });
        }, 1000);
        return () => clearInterval(interval);
        }
    });
  },[]);

  return (
    <div
      className="scroll-container"
      style={{
        height: "8px",
        width: "100%",
        borderRadius:"0.8rem",
        backgroundColor: "blueviolet",
      }}
    >
      <div
        className="scroll-bar"
        style={{
          height: "100%",
          backgroundColor: "yellow",
          borderRadius:"0.8rem",
          width: `${progressPercentage}%`,
        }}
      />
      <div className="content"></div>
    </div>
  );
};

export default ScrollBar;
