import React from "react";

const SkillCard = ({ image, title }) => {
  return (
    <div className="bg-[#3D3E42] hover:bg-[#EFBF6B] hover:cursor-pointer p-8  rounded-2xl ">
      <div className="m-4">
        <img src={image} alt="skill" className=" m-auto" />
      </div>
      <div className="my-8">
        <h1 className="text-center text-white font-bold text-2xl py-4">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default SkillCard;
