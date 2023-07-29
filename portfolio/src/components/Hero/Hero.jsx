import React from "react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-[#34353A] relative flex justify-between items-center p-32">
      <div className="flex flex-col items-left space-x-4 w-1/2 mx-8 my-28">
        <h2 className="text-5xl text-white p-4">
          I'M{" "}
          <span className="text-7xl font-bold text-[#EFBF6B]">Raja Kumar</span>
        </h2>
        <h4 className="text-4xl text-white p-2">Full Stack Web Developer</h4>
        <button className="bg-[tansparent] hover:cursor-pointer px-6 py-4 mx-4 my-8 text-2xl font-extrabold rounded-2xl text-[#EFBF6B]  border-[#EFBF6B] border-4 max-w-fit">
          Contact Me
        </button>
      </div>
      <div className="flex items-center w-1/2">
        <img
          className="w-full cursor-pointer mix-blend-luminosity"
          src="/assets/herop.jpg"
          alt="Logo"
        />
      </div>
      <div className="absolute bottom-0 right-0 flex flex-col justify-center max-w-fit m-auto items-center mt-20 mr-12 ">
        <div className="h-20 w-1 bg-yellow-500 m-3"></div>
        <Facebook color="#fff" size={44} strokeWidth={3} className="m-3" />
        <Twitter color="#fff" size={44} strokeWidth={3} className="m-3" />
        <Github size={44} color="#fff" strokeWidth={3} className="m-3" />
        <Linkedin size={44} color="#fff" strokeWidth={3} className="m-3" />
      </div>
    </div>
  );
};

export default Hero;
