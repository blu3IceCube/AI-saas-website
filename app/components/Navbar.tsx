import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center w-4/5 my-3">
        <h1 className="text-2xl font-normal">Voxify.ai</h1>
        <div>
          <ul className="flex items-center gap-3">
            <li>Features</li>
            <li>Testimonials</li>
            <li>Highlights</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <div>light/dark</div>
          <div>auth</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
