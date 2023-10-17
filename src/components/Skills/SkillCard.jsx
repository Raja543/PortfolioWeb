import React from "react";

const SkillCard = ({ image, title }) => {
  return (
    <div className="bg-[#3D3E42]  hover:bg-[#EFBF6B] hover:cursor-pointer p-4 rounded-2xl ">
      <div className="m-1">
        <img src={image} width={64} height={64} alt="skill" className=" m-auto" />
      </div>
      <div className="my-2">
        <h1 className="text-center text-white font-bold text-xs lg:text-lg py-1">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default SkillCard;
