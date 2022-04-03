import React from "react";
import { ScreenSizeType } from "types/toolbar";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  screenSize?: ScreenSizeType;
  type?: "button" | "submit" | "reset";
  active?: boolean;
}

const SizeButton = ({
  type = "button",
  onClick = () => {},
  screenSize = "xl",
  active,
  ...rest
}: Props) => {
  return (
    <button
      type={type}
      className={`bg-slate-50 text-xs py-1 px-2 rounded outline-blue-200 uppercase ${
        !active
          ? "text-slate-700 hover:bg-blue-400 hover:text-white"
          : "text-blue-400 font-medium hover:outline outline-blue-100"
      }`}
      onClick={onClick}
      {...rest}
    >
      {screenSize}
    </button>
  );
};

export default SizeButton;
