import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Features from "./features/page";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-4/5 mx-auto pt-48">
        <Hero />
        <Partners />
        <Features />
      </div>
    </>
  );
};

export default Home;
