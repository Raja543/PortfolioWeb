import React from "react";
import SkillCard from "./SkillCard";
import DesignCard from "../DesignCard/DesignCard";

const Skills = () => {
  return (
    <div className="bg-[#34353A] px-6 md:px-32 pt-4 pb-16 relative">
      <h1 className="text-center text-4xl lg:text-6xl font-bold py-8 md:py-16 text-white">
        Tech Stack
      </h1>
      <p className="text-2xl md:text-3xl font-bold py-6 text-white">
        Frontend :
      </p>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-8 items-center justify-center">
        <SkillCard image="/assets/html.svg" title="HTML" />
        <SkillCard image="/assets/css.svg" title="CSS" />
        <SkillCard image="/assets/javascript.svg" title="JavaScript" />
        <SkillCard image="/assets/bootstrap.svg" title="Bootstrap" />
        <SkillCard image="/assets/react.svg" title="React" />
        <SkillCard image="/assets/tailwindcss.svg" title="TailwindCSS" />
        <SkillCard image="/assets/redux.svg" title="Redux" />
        <SkillCard image="/assets/typescript.svg" title="Typescript" />
        <SkillCard image="/assets/firebase.svg" title="Firebase" />
      </div>

      <div className="my-8">
        <p className="text-2xl md:text-3xl font-bold py-6 text-white">
          Backend :
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-8 items-center justify-center">
          <SkillCard image="/assets/nodejs.svg" title="NodeJS" />
          <SkillCard image="/assets/expressjs.svg" title="ExpressJS" />
          <SkillCard image="/assets/mongodb.png" title="Mongodb" />
          <SkillCard image="/assets/mysql.svg" title="MySQL" />
          <SkillCard image="/assets/nestjs.svg" title="NestJS" />
          <SkillCard image="/assets/prisma.svg" title="Prisma" />
          <SkillCard image="/assets/aws.svg" title="AWS" />
        </div>
      </div>

      <div className="my-8">
        <p className="text-2xl md:text-3xl font-bold py-6 text-white">
          Tools :
        </p>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-8 items-center justify-center">
          <SkillCard image="/assets/git.svg" title="Git" />
          <SkillCard image="/assets/postman.png" title="Postman" />
          <SkillCard image="/assets/jira.svg" title="Jira" />
          <SkillCard image="/assets/figma.svg" title="Figma" />
          <SkillCard image="/assets/docker.svg" title="Docker" />
          <SkillCard image="/assets/google-cloud.svg" title="Google Cloud" />
          <SkillCard image="/assets/vs-code.svg" title="Vs Code" />
          <SkillCard image="/assets/webstorm.svg" title="Webstorm" />
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-0 right-0 mx-32 ">
        <DesignCard />
      </div>
    </div>
  );
};

export default Skills;
