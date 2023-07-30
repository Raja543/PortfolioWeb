import React from "react";
import { HashLink } from "react-router-hash-link";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const gmailLink = "mailto:rajakumarmahto952@gmail.com";
  const phoneLink = "tel:+917903765195";
  const linkedinLink = "https://www.linkedin.com/in/raja-kumar-857a44247/";
  const facebookLink =
    "https://www.facebook.com/profile.php?id=100024325626147";
  const twitterLink = "https://twitter.com/rajakumar952";
  const GithubLink = "https://github.com/Raja543";
  return (
    <div className="bg-[#30333A] md:pt-16 " id="contact">
      <div className="bg-[#3D3E42] flex-col justify-center items-center border-[#EFBF6B] border-y-2">
        <h1 className="text-center custom-bg text-white text-6xl  py-4 px-6 mt-[-50px] max-w-fit m-auto">
          Contact Me
        </h1>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center m-4 lg:mx-12 lg:mt-12 mb-4">
          <HashLink
            to={gmailLink}
            className="flex flex-row bg-[#30333A] lg:m-8 p-4 rounded-2xl justify-center items-center"
          >
            <Mail color="#fff" strokeWidth={3} />
            <p className="text-[#EFBF6B] text-base lg:text-3xl px-4 py-2">
              rajakumarmahto952@gmail.com
            </p>
          </HashLink>
          <HashLink
            to={phoneLink}
            className="flex flex-row bg-[#30333A] lg:m-8 p-4 rounded-2xl justify-center items-center max-w-fit "
          >
            <Phone color="#fff" strokeWidth={3} />
            <p className="text-[#EFBF6B] text-base lg:text-3xl px-4 py-2">
              +91 7903765195
            </p>
          </HashLink>
        </div>

        <div className="flex flex-row bg-[#30333A] m-8 p-4 rounded-2xl items-center justify-center max-w-fit mx-auto mb-16 :mb-28">
          <MapPin color="#fff" strokeWidth={3} />
          <p className="text-[#EFBF6B] text-base lg:text-3xl px-4 py-2">
            New Delhi, India
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center max-w-fit m-auto custom-bg-2  mt-[-40px] py-4 px-4 md:px-8">
        <HashLink to={facebookLink}>
          <Facebook color="#fff" strokeWidth={3} className="m-3" />
        </HashLink>
        <HashLink to={twitterLink}>
          <Twitter color="#fff" strokeWidth={3} className="m-3" />
        </HashLink>
        <HashLink to={GithubLink}>
          <Github color="#fff" strokeWidth={3} className="m-3" />
        </HashLink>
        <HashLink to={linkedinLink}>
          <Linkedin color="#fff" strokeWidth={3} className="m-3" />
        </HashLink>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-[#EFBF6B] text-xl sm:text-5xl p-8 md:p-12">
          " Thanks For Visiting "
        </p>
      </div>
    </div>
  );
};

export default Footer;
