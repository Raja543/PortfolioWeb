import React from "react";
import "./Experience.css";

import ExpContent from "./ExpContent";

const Experience = () => {
  return (
    <div className="bg-[#34353A] p-12 lg:p-20">
      <h1 className="text-center text-4xl lg:text-6xl font-bold p-8 text-white">
        Experience
      </h1>
     <ExpContent/>
     <ExpContent/>
    </div>
  );
};

export default Experience;
