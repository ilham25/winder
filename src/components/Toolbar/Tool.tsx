import { toolbarIcons, toolbarTitles } from "constants/toolbar";
import { setTool } from "features/toolbar";
import { useAppDispatch, useAppSelector } from "hooks";
import React, { useMemo } from "react";

import { ToolType } from "types/toolbar";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  tool?: ToolType;
}

const Tool = ({ type = "button", tool = "cursor", ...rest }: Props) => {
  const toolbar = useAppSelector((state) => state.toolbar);

  const active = useMemo(() => {
    return toolbar.tool === tool;
  }, [toolbar.tool, tool]);
  const dispatch = useAppDispatch();

  const ToolIcon = useMemo(() => {
    return toolbarIcons[tool];
  }, [tool]);

  const conditionalStyle = useMemo(() => {
    if (!active) return "text-slate-500 hover:bg-blue-400 hover:text-white";
    return "text-blue-400 bg-slate-50";
  }, [active]);

  const title = useMemo(() => {
    return toolbarTitles[tool];
  }, [tool]);

  return (
    <button
      title={title}
      className={`h-14 w-14 flex items-center justify-center outline-blue-200 ${conditionalStyle}`}
      type={type}
      onClick={() => dispatch(setTool(tool))}
      {...rest}
    >
      <ToolIcon size={24} />
    </button>
  );
};

export default Tool;
