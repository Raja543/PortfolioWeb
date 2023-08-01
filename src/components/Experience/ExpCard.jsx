import React from "react";

const ExpCard = ({ title, location, description }) => {
  return (
    <div className="flex flex-col ">
      <h1 className="text-[#fff] text-3xl lg:text-5xl px-8 py-2">{title}</h1>
      <h2 className="text-[#fff] text-xl lg:text-3xl px-8 py-1 ">{location}</h2>
      <p className="text-[#fff] text-lg  lg:text-xl px-8 py-4 ">
        {description}
      </p>
    </div>
  );
};

export default ExpCard;
