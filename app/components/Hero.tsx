import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 items-center w-3/5">
      <h1 className="text-7xl font-medium">
        Our latest <span className="text-[#1d7cf2]">products</span>
      </h1>
      <p className="text-center opacity-70">
        Explore our cutting-edge AI customer care, delivering high-quality
        assistance tailored to your needs. Elevate your experience with top-tier
        features and services.
      </p>
      <button
        className="bg-[#1856a3] hover:bg-[#1d74cf2] text-neutral-50 py-1.5 px-2.5 text-lg"
        style={{
          boxShadow:
            "0 4px 6px -1px rgb(24 86 163 / 0.3), 0 2px 4px -2px rgb(24 86 163 / 0.3)",
        }}
      >
        Get started
      </button>
    </div>
  );
};

export default Hero;
