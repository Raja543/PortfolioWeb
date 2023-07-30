import React from "react";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      {/* <Experience />     */}
      <Footer />
    </div>
  );
};

export default Home;
