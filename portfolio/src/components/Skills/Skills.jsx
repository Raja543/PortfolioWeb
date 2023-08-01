import React from "react";
import SkillCard from "./SkillCard";
import DesignCard from "../DesignCard/DesignCard";

const Skills = () => {
  return (
    <div className="bg-[#30333A] px-10 md:px-32 pt-4 pb-16 relative">
      <h1 className="text-center text-5xl font-bold p-8 text-white">
        MY Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-8 items-center justify-center">
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
      <div className="hidden lg:block absolute bottom-0 right-0 mx-32 ">
        <DesignCard />
      </div>
    </div>
  );
};

export default Skills;
