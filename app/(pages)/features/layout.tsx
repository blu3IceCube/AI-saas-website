import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <h1>Product features</h1>
        <p>
          Here we will provide a brief overview of the key features of the
          product. For example, we could list the number of features, the types
          of features, add-ons, or the benefits of the features.
        </p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
