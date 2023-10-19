import React from "react";
import { HashLink } from "react-router-hash-link";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

const Hero = () => {
  const linkedinLink = "https://www.linkedin.com/in/raja-kumar-857a44247/";
  const facebookLink =
    "https://www.facebook.com/profile.php?id=100024325626147";
  const twitterLink = "https://twitter.com/rajakumar952";
  const GithubLink = "https://github.com/Raja543";
  return (
    <div className="bg-[#34353A] relative flex flex-col md:flex-row justify-between items-center p-4 md:p-20 min-h-[80vh]">
      <div className="flex flex-col items-left space-x-4 w-full md:w-1/2 mx-8 my-6 md:my-24">
        <h2 className="text-3xl md:text-5xl text-white p-4">
          I'M
          <span className="text-5xl md:text-7xl font-bold text-[#EFBF6B]">
            Raja Kumar
          </span>
        </h2>
        <h3 className="text-2xl md:text-4xl text-white py-2">
          Full Stack Web Developer
        </h3>
        <HashLink to="/#contact" smooth={true} duration={300}>
          <button className="bg-[tansparent] hover:cursor-pointer px-3 md:px-6 py-2 md:py-4 my-4 md:my-8 text-lg md:text-2xl font-extrabold rounded-2xl text-[#EFBF6B]  border-[#EFBF6B] border-4 max-w-fit">
            Contact Me
          </button>
        </HashLink>
      </div>
      <div className="flex items-center w-full md:w-1/2 mx-20">
        <img
          className="w-full h-auto mix-blend-luminosity"
          src="/assets/profile.webp"
          alt="Logo"
          width={300}
          height={300}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw "
        />
      </div>
      <div className="absolute bottom-10 right-0 hidden justify-center items-center mt-20 mr-12  md:flex md:flex-col">
        <div className="h-24 w-1 bg-yellow-500 my-4"></div>
        <a href={facebookLink} target="_blank" className="cursor-pointer m-3">
          <span className="sr-only">Facebook</span>
          <Facebook color="#fff" size={44} strokeWidth={3} />
        </a>
        <a href={twitterLink} target="_blank" className="cursor-pointer m-3">
          <span className="sr-only">Twitter</span>
          <Twitter color="#fff" size={44} strokeWidth={3} />
        </a>
        <a href={GithubLink} target="_blank" className="cursor-pointer m-3">
          <span className="sr-only">GitHub</span>
          <Github size={44} color="#fff" strokeWidth={3} />
        </a>
        <a href={Linkedin} target="_blank" className="cursor-pointer m-3">
          <span className="sr-only">LinkedIn</span>
          <Linkedin size={44} color="#fff" strokeWidth={3} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
