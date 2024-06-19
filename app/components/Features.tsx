import Link from "next/link";
import React from "react";
import TabsComponent from "./TabsComponent";

const Features = () => {
  return (
    <div className="flex items-center justify-center gap-12 w-full mb-14">
      <div className="flex-1">
        <h1 className="text-4xl">Product features</h1>
        <p className="opacity-70">
          Here we can provide a brief overview of the key features of the
          product. For example, we could list the number of features, the types
          of features, add-ons, or the benefits of the features.
        </p>
        <TabsComponent data={data} />
      </div>
      <div className="flex items-center justify-center border rounded-lg flex-1 h-screen">
        <span>placeholder</span>
      </div>
    </div>
  );
};

export default Features;

const data = [
  {
    title: "Dashboard",
    discription:
      "This item could provide a snapshot of the most important metrics or data points related to the product.",
    content: (
      <div
        className="flex items-center justify-center border rounded h-[48rem] text-white bg-neutral-950"
        style={{ boxShadow: "0 0 8px 2px rgb(29 124 242 / 0.2)" }}
      >
        <span className="text-4xl opacity-70">Dashboard box</span>
      </div>
    ),
  },
  {
    title: "Mobile integration",
    discription:
      "This item could provide information about the mobile app version of the product.",
    content: (
      <div
        className="flex items-center justify-center border rounded h-[48rem] text-white bg-neutral-950"
        style={{ boxShadow: "0 0 8px 2px rgb(29 124 242 / 0.2)" }}
      >
        <span className="text-4xl opacity-70">Mobile integration box</span>
      </div>
    ),
  },
  {
    title: "Available on all platforms",
    discription:
      "This item could let users know the product is available on all platforms, such as web, mobile, and desktop.",
    content: (
      <div
        className="flex items-center justify-center border rounded h-[48rem] text-white bg-neutral-950"
        style={{ boxShadow: "0 0 8px 2px rgb(29 124 242 / 0.2)" }}
      >
        <span className="text-4xl opacity-70">Platforms box</span>
      </div>
    ),
  },
];
