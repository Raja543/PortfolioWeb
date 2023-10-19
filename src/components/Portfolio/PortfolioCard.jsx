import React, { useState } from "react";

const PortfolioCard = ({ image, title, para }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className=""
    >
      <img src={image} alt="skill" width={400} height={400} className="m-auto " />
      {isHovering && (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-75 text-white p-4">
          <h2 className="text-3xl font-medium capitalize px-4">{title}</h2>
          <p className="text-center px-8 py-4 ">{para}</p>
          <button className="bg-[#EFBF6B] text-[#000] hover:cursor-pointer px-4 py-2  text-base font-medium rounded-lg">
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioCard;
