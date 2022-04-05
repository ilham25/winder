import React, { useEffect } from "react";
import { getTailwindSizing } from "utils/helper";
import Component from "./Component";

type Props = {};

type ComponentType = {
  as: keyof JSX.IntrinsicElements;
  className?: string;
};

const Board = (props: Props) => {
  useEffect(() => {
    getTailwindSizing();
  }, []);
  return (
    <div className="w-[1440px] min-h-[1024px] bg-white scale-90 rounded-lg overflow-hidden p-px">
      {/* {Object.keys(exampleComponents).map((key) => (
        <Component
          key={key}
          as={exampleComponents[key].as}
          {...exampleComponents[key]}
        />
      ))} */}
    </div>
  );
};

export default Board;
