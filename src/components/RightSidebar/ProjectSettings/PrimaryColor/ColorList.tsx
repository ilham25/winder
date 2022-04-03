import React from "react";

import { PrimaryColorPalette } from "types/projectSettings";

type Props = {
  palette: PrimaryColorPalette;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ColorList = ({ palette, onClick = () => {} }: Props) => {
  return (
    <button
      className={`col-span-1 bg-${palette}-500 h-6 rounded flex items-center justify-center outline-blue-200`}
      onClick={onClick}
      title={palette.toUpperCase()}
    ></button>
  );
};

export default ColorList;
