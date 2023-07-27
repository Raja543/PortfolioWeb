import React from "react";

const SkillCard = ({ image, title }) => {
  return (
    <div className="bg-[#3D3E42] hover:bg-[#EFBF6B] hover:cursor-pointer p-16  rounded-2xl">
      <div className="">
        <img src={image} alt="skill" className="p-4 m-auto" />
        <h1 className="text-center text-white font-bold text-2xl py-4">{title}</h1>
      </div>
    </div>
  );
};

export default SkillCard;
