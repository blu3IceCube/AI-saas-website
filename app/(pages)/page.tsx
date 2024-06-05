import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-4/5 mx-auto pt-24">
        <Hero />
      </div>
    </>
  );
};

export default Home;
