import React from "react";
import { PrimaryColorLevel, PrimaryColorPalette } from "types/toolbar";

type Props = {
  palette?: PrimaryColorPalette;
  level?: PrimaryColorLevel;
};

const Color = ({ palette = "red", level = 400 }: Props) => {
  return (
    <li className="w-6 h-5">
      <button
        className={`w-6 h-5 rounded bg-${palette}-${level} outline-blue-200`}
      ></button>
    </li>
  );
};

export default Color;
