import { toolbarIcons } from "constants/toolbar";
import React, { useMemo } from "react";

import { ToolType } from "types/toolbar";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  tool?: ToolType;
  active?: boolean;
}

const Tool = ({
  onClick = () => {},
  type = "button",
  tool = "cursor",
  active,
  ...rest
}: Props) => {
  const ToolIcon = useMemo(() => {
    return toolbarIcons[tool];
  }, [tool]);

  const conditionalStyle = useMemo(() => {
    if (!active) return "text-slate-500 hover:bg-blue-400 hover:text-white";
    return "text-blue-400 bg-slate-50";
  }, [active]);

  const title = useMemo(() => {
    const titles: { [key: string]: any } = {
      cursor: "Pointer",
      settings: "Settings",
      layouts: "Layouts",
      texts: "Typography",
      regular: "Regular Components",
    };
    return titles[tool];
  }, [tool]);

  return (
    <button
      title={title}
      className={`h-14 w-14 flex items-center justify-center outline-blue-200 ${conditionalStyle}`}
      type={type}
      onClick={onClick}
      {...rest}
    >
      <ToolIcon size={24} />
    </button>
  );
};

export default Tool;
