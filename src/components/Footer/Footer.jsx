import React, { useState } from "react";
// import { HashLink } from "react-router-hash-link";
// import { Facebook } from "lucide-react";
// import { Twitter } from "lucide-react";
// import { Linkedin } from "lucide-react";
// import { Github } from "lucide-react";
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
        className="bg-[#30333A] px-4 md:px-20 pt-20 pb-8 border-[#EFBF6B] border-y-2"
        id="contact"
      >
        <h1 className="text-center custom-bg text-white text-4xl lg:text-5xl z-10 py-4 px-6 mt-[-120px] max-w-fit m-auto rounded-xl">
          Contact Me
        </h1>
        <div className="flex flex-col my-8 md:flex-row gap-x-12">
          <div className="p-4 w-full items-center justify-center md:w-1/2 bg-[#3D3E42] text-white rounded-xl shadow-md">
            <h1 className="text-2xl md:text-2xl py-4 font-bold">
              Get in touch :
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block  text-[#cfcccc] font-medium "
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 border bg-transparent border-[#636363] rounded-md focus:border-none focus:outline-none focus:ring-1 focus:ring-[#a1a1a1]"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-[#cfcccc] font-medium "
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1  border bg-transparent border-[#636363] rounded-md focus:border-none focus:outline-none focus:ring-1 focus:ring-[#a1a1a1]"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block  text-[#cfcccc] font-medium"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1  border-2 rounded-md resize-none border-[#636363] bg-transparent focus:border-none focus:outline-none focus:ring-1 focus:ring-[#a1a1a1]"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className=" px-4 md:px-6 md:py-3 py-2 mx-auto md:text-xl font-bold rounded-2xl text-black bg-[#EFBF6B]"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="flex justify-center items-center overflow-hidden rounded-xl py-8 px-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8455.270051014279!2d77.09529468680024!3d28.637585192598355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0360d6360023%3A0x21674fae476109fa!2sAshok%20Nagar%2C%20Delhi%2C%20110018!5e0!3m2!1sen!2sin!4v1697632249927!5m2!1sen!2sin"
              width={600}
              height={400}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ashok Nagar , New-Delhi , India"
            />
          </div>
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
