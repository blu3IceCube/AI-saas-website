import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center fixed inset-x-0">
      <div
        className="flex items-center w-4/5 my-3 py-3 px-6 rounded-3xl bg-neutral-50/[0.4]"
        style={{
          boxShadow:
            "0 4px 6px -1px rgb(29 124 242 / 0.1), 0 2px 4px -2px rgb(29 124 242 / 0.1)",
        }}
      >
        <div className="flex items-center gap-6 grow">
          <h1 className="text-2xl font-medium text-[#1d7cf2]">Voxify.ai</h1>
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
