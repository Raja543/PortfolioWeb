import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="bg-[#30333A] px-24 md:px-32 pt-4 pb-20">
      <h1 className="text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold p-8 text-white">
        MY Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12  ">
        <SkillCard image="/assets/javascript.png" title="JavaScript" />
        <SkillCard image="/assets/python.png" title="Python" />
        <SkillCard image="/assets/javascript.png" title="JavaScript" />
        <SkillCard image="/assets/python.png" title="Python" />
        <SkillCard image="/assets/javascript.png" title="JavaScript" />
        <SkillCard image="/assets/python.png" title="Python" />
        <SkillCard image="/assets/javascript.png" title="JavaScript" />
        <SkillCard image="/assets/python.png" title="Python" />
        <SkillCard image="/assets/javascript.png" title="JavaScript" />
        <SkillCard image="/assets/python.png" title="Python" />
      </div>
    </div>
  );
};

export default Skills;
