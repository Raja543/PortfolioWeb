import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, e.g., sending data to a server.
  };

  const linkedinLink = "https://www.linkedin.com/in/raja-kumar-857a44247/";
  const facebookLink =
    "https://www.facebook.com/profile.php?id=100024325626147";
  const twitterLink = "https://twitter.com/rajakumar952";
  const githubLink = "https://github.com/Raja543";

  return (
    <>
      <div
        className="bg-[#30333A] px-4 md:px-20 py-10 border-[#EFBF6B] border-y-2"
        id="contact"
      >
        <h1 className="text-center custom-bg text-white text-4xl lg:text-5xl z-10 py-4 px-6 mt-[-80px] max-w-fit m-auto rounded-xl">
          Contact Me
        </h1>
        <div className="flex flex-col my-8 md:flex-row">
          <div className="p-4 w-full  md:w-1/2 bg-[#3D3E42] text-white rounded-xl shadow-md">
            <h1 className="text-2xl md:text-2xl py-4 font-bold">
              Get in touch :
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium ">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 text-sm border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium ">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 text-sm border rounded-md"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 text-sm border rounded-md"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className=" px-6 md:px-8 md:py-4 py-2 mx-auto my-2  md:text-2xl font-bold rounded-2xl text-black bg-[#EFBF6B]"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="flex flex-col w-full md:w-1/2 mt-8"></div>
        </div>
      </div>
      <div className="flex justify-center bg-[#30333A] items-center p-8 ">
        <p className="text-[#EFBF6B] text-xl sm:text-4xl ">
          "Thanks For Visiting"
        </p>
      </div>
    </>
  );
};

export default Footer;

