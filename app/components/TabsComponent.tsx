import Link from "next/link";
import React from "react";

export type TabsData = {
  title: string;
  discription: string;
  content: React.JSX.Element;
}[];

const TabsComponent = ({ data }: { data: TabsData }) => {
  return (
    <div className="flex flex-col gap-4">
      {data.map((items) => (
        <div className="p-4">
          <h1>{items.title}</h1>
          <p>{items.discription}</p>
          <Link href="/">Learn more</Link>
        </div>
      ))}
    </div>
  );
};

export default TabsComponent;
