import { createLayoutComponent } from "features/components";
import { useAppDispatch, useAppSelector } from "hooks";
import React, { useMemo } from "react";
import { ToolType } from "types/toolbar";
import { v4 as uuidv4 } from "uuid";

type Props = {
  children: React.ReactNode;
  group?: ToolType | "root";
};

const BoardRoot = ({ children, group = "root" }: Props) => {
  const toolbar = useAppSelector((state) => state.toolbar);

  const dispatch = useAppDispatch();
  const isUsingTool: boolean = useMemo(() => {
    return toolbar.tool !== "cursor";
  }, [toolbar.tool]);
  const onComponentAdd = (e: any) => {
    if (!isUsingTool) return;
    const target: {
      getAttribute?: (qualifiedString: string) => ToolType | "root";
    } = e.target;

    const group = target.getAttribute("group");
    const targetId = target.getAttribute("id");

    switch (group) {
      case "root":
      case "layouts":
        dispatch(createLayoutComponent({ id: uuidv4(), parentId: targetId }));
        break;

      default:
        break;
    }
  };

  return (
    <div
      className={`w-[1440px] min-h-[1024px] h-max bg-white scale-90 rounded-lg p-px outline outline-transparent hover:outline-1 hover:outline-blue-400 ${
        isUsingTool ? "cursor-crosshair" : "cursor-default"
      }`}
      onClick={onComponentAdd}
      {...{ group }}
    >
      {children}
    </div>
  );
};

export default BoardRoot;
