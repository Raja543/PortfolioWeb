import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="bg-[#34353A] p-20">
      <h1 className="text-center text-6xl font-bold p-8 text-white">
        Experience
      </h1>
      <div className="flex flex-row m-10">
        <div className="box-shape bg-[#4a4b53] w-28 py-6 px-4 items-center justify-center ">
          <p className="text-[#fff] pr-6 py-4 text-3xl">2023</p>
          
        </div>
        <div className="flex flex-col ">
          <div className=" w-8 h-8 my-4 mx-6 rounded-full bg-[#e5b96d] custom-shadow "></div>
          {/* <div className="h-72 w-1 bg-[#fff] m-8"></div> */}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Experience;
