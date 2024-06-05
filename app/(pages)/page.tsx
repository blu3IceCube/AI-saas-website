import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-4/5 mx-auto pt-12">
        <Hero />
      </div>
    </>
  );
};

export default Home;
