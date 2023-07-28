import React from "react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#30333A] pt-16 pb-16">
      <div className="bg-[#3D3E42] flex-col justify-center items-center border-[#EFBF6B] border-y-2">
        <h1 className="text-center text-white text-6xl z-10 p-4 ">
          Contact Me
        </h1>
        <div className="grid grid-cols-2 max-w-6xl mx-auto m-8">
          <div className="flex flex-row bg-[#30333A] m-4 p-4 rounded-2xl justify-center items-center">
            <Mail color="#fff" size={44} strokeWidth={3} />
            <p className="text-[#EFBF6B] text-3xl px-6 py-2">
              rajakumarmahto952@gmail.com
            </p>
          </div>
          <div className="flex flex-row bg-[#30333A] m-4 p-4 rounded-2xl justify-center items-center max-w-sm">
            <Phone color="#fff" size={44} strokeWidth={3} />
            <p className="text-[#EFBF6B] text-3xl px-6 py-2">+91 7903765195</p>
          </div>
          <div className="flex flex-row bg-[#30333A] m-4 p-4 rounded-2xl justify-center items-center max-w-sm mx-auto">
            <MapPin color="#fff" size={44} strokeWidth={3} />
            <p className="text-[#EFBF6B] text-3xl px-6 py-2">
              New Delhi, India
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Facebook color="#fff" size={44} strokeWidth={3} className="m-3" />
          <Twitter color="#fff" size={44} strokeWidth={3} className="m-3" />
          <Github size={44} color="#fff" strokeWidth={3} className="m-3" />
          <Linkedin size={44} color="#fff" strokeWidth={3} className="m-3" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-[#EFBF6B] text-5xl p-12 m-12">
          " Thanks For Visiting "
        </p>
      </div>
    </div>
  );
};

export default Footer;

