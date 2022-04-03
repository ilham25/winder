import React from "react";
import { RoundedCornersSize } from "types/projectSettings";

type Props = {
  size: RoundedCornersSize;
  active?: boolean;
};

const Corner = ({ size = "base", active }: Props) => {
  return (
    <button
      className={`col-span-1 border-b flex flex-col items-center justify-center gap-1 outline-blue-200 hover:bg-slate-100`}
    >
      <div className="h-3 w-3 overflow-hidden">
        <div
          className={`h-6 w-6 border-t-2 border-l-2 ${
            !active ? "border-slate-400" : "border-blue-400"
          } rounded${size === "base" ? "" : "-" + size}`}
        ></div>
      </div>
      <p className={`text-xs ${!active ? "text-slate-500" : "text-blue-500"}`}>
        {size}
      </p>
    </button>
  );
};

export default Corner;
