"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const Features = () => {
  const initialContentRef = useRef(data[0].content);
  const [selectedContent, setSelectedContent] = useState<React.ReactNode>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  useEffect(() => {
    setSelectedContent(initialContentRef.current);
    setSelectedIndex(0);
  }, []);

  return (
    <div className="flex items-stretch justify-center gap-12 w-full mb-24 mt-24">
      <div className="flex-1">
        <h1 className="text-4xl">Product features</h1>
        <p className="opacity-70">
          Here we can provide a brief overview of the key features of the
          product. For example, we could list the number of features, the types
          of features, add-ons, or the benefits of the features.
        </p>
        <div className="flex flex-col gap-4 mt-12">
          {data.map((items, index) => (
            <div
              className={`p-4 border rounded-lg cursor-pointer ${
                selectedIndex === index ? "bg-blue-400/20" : ""
              }`}
              onClick={() => {
                setSelectedContent(items.content);
                setSelectedIndex(index);
              }}
            >
              <h1 className="font-medium">{items.title}</h1>
              <p className="opacity-60">{items.discription}</p>
              <span className="text-blue-600">Learn more</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center border rounded-lg flex-1">
        {selectedContent}
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
        className="flex items-center justify-center border rounded text-white bg-neutral-950 w-3/5 h-3/5"
        style={{ boxShadow: "0 0 8px 2px rgb(29 124 242 / 0.2)" }}
      >
        <span className="text-xl opacity-70">Dashboard box</span>
      </div>
    ),
  },
  {
    title: "Mobile integration",
    discription:
      "This item could provide information about the mobile app version of the product.",
    content: (
      <div
        className="flex items-center justify-center border rounded text-white bg-neutral-950 w-3/5 h-3/5"
        style={{ boxShadow: "0 0 8px 2px rgb(29 124 242 / 0.2)" }}
      >
        <span className="text-xl opacity-70">Mobile integration box</span>
      </div>
    ),
  },
  {
    title: "Available on all platforms",
    discription:
      "This item could let users know the product is available on all platforms, such as web, mobile, and desktop.",
    content: (
      <div
        className="flex items-center justify-center border rounded text-white bg-neutral-950 w-3/5 h-3/5"
        style={{ boxShadow: "0 0 8px 2px rgb(29 124 242 / 0.2)" }}
      >
        <span className="text-xl opacity-70">Platforms box</span>
      </div>
    ),
  },
];
