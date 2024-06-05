import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-medium">
        Our latest <span className="text-[#1d7cf2]">products</span>
      </h1>
      <p>
        Explore our cutting-edge AI customer care, delivering high-quality
        assistance tailored to your needs. Elevate your experience with top-tier
        features and services.
      </p>
      <button>Get started</button>
    </div>
  );
};

export default Hero;
