import React, { useMemo } from "react";

import { BiPointer, BiSliderAlt } from "react-icons/bi";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  tool?: "cursor" | "settings";
}

const Tool = ({
  onClick = () => {},
  type = "button",
  tool = "cursor",
  ...rest
}: Props) => {
  const ToolIcon = useMemo(() => {
    const icons: { [key: string]: any } = {
      cursor: BiPointer,
      settings: BiSliderAlt,
    };
    return icons[tool];
  }, [tool]);
  return (
    <button
      className="h-14 w-14 flex items-center justify-center text-slate-700 outline-blue-200 hover:bg-blue-400 hover:text-white"
      type={type}
      onClick={onClick}
      {...rest}
    >
      <ToolIcon size={24} />
    </button>
  );
};

export default Tool;
