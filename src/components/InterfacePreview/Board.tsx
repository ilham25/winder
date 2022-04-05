import React, { useEffect } from "react";
import { getTailwindSizing } from "utils/helper";
import Component from "./Component";

type Props = {};

type ComponentType = {
  as: keyof JSX.IntrinsicElements;
  className?: string;
};

const exampleComponents: { [key: string]: any } = {
  awoekoaewk: {
    as: "div",
    className: "w-52 h-52 mx-auto bg-slate-200",
  },
  aowkwaoh1: {
    as: "h1",
    className: "text-6xl text-slate-500",
    children: "awkeokaweoakwe",
  },
  aowkwaoh2: {
    as: "h2",
    className: "text-5xl text-slate-500",
    children: "awkeokaweoakwe",
  },
};

const Board = (props: Props) => {
  useEffect(() => {
    getTailwindSizing();
  }, []);
  return (
    <div className="w-[1440px] min-h-[1024px] bg-white scale-90 rounded-lg overflow-hidden p-px">
      {Object.keys(exampleComponents).map((key) => (
        <Component
          key={key}
          as={exampleComponents[key].as}
          {...exampleComponents[key]}
        />
      ))}
    </div>
  );
};

export default Board;
