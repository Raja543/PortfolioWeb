import React from "react";
import PortfolioCard from "./PortfolioCard";
import DesignCard from "../DesignCard/DesignCard";

const Portfolio = () => {
  return (
    <div className="bg-[#30333A] lg:px-32 pb-16 lg:pb-24 relative "id="portfolio" >
      <h1 className="text-center text-5xl font-bold p-4 text-white">
        Portfolio
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-8 md:p-20 items-center justify-center">
        <PortfolioCard
          image="/assets/javascript.png"
          title="JavaScript"
          para="It is a programming language. It is a programming language
          It is a programming language"
        />
        <PortfolioCard
          image="/assets/javascript.png"
          title="Python"
          para="It is a programming language. It is a programming language
          It is a programming language"
        />
        <PortfolioCard
          image="/assets/javascript.png"
          title="JavaScript"
          para="It is a programming language. It is a programming language
          It is a programming language"
        />
        <PortfolioCard
          image="/assets/javascript.png"
          title="Python"
          para="It is a programming language. It is a programming language
          It is a programming language"
        />
        <PortfolioCard
          image="/assets/javascript.png"
          title="JavaScript"
          para="It is a programming language. It is a programming language
          It is a programming language"
        />
        <PortfolioCard
          image="/assets/javascript.png"
          title="Python"
          para="It is a programming language. It is a programming language
          It is a programming language"
        />
      </div>
      <div className="hidden md:block absolute top-0 right-0 mx-32 ">
        <DesignCard />
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-[#EFBF6B] hover:cursor-pointer px-6 md:px-8 py-4 my-4 md:text-2xl font-bold rounded-2xl">
          View More
        </button>
      </div>
    </div>
  );
};

export default Portfolio;