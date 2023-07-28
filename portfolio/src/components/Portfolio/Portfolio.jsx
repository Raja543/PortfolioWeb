import React from "react";
import PortfolioCard from "./PortfolioCard";
import DesignCard from "../DesignCard/DesignCard";

const Portfolio = () => {
  return (
    <div className="bg-[#30333A] px-24 md:px-32 pt-4 pb-24 relative">
      <h1 className="text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold p-8 text-white">
        Portfolio
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-12 items-center justify-center">
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
      <div className="absolute top-0 right-0 mx-32 ">
        <DesignCard />
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-[#EFBF6B] hover:cursor-pointer px-8 py-4 my-4 text-2xl font-medium rounded-2xl">
          View More
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
