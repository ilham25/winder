import {
  createLayoutComponent,
  setSelectedComponentId,
} from "features/components";
import { setTool } from "features/toolbar";
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

  const createLayoutHandler = ({
    targetGroup,
    targetId,
  }: {
    targetGroup: ToolType | "root";
    targetId: string;
  }) => {
    if (["root", "layouts"].includes(targetGroup.toLowerCase())) {
      dispatch(createLayoutComponent({ id: uuidv4(), parentId: targetId }));
    }
  };

  const onComponentAdd = (e: any) => {
    const target: {
      getAttribute?: (qualifiedString: string) => ToolType | "root";
    } = e.target;

    const targetGroup = target.getAttribute("group");
    const targetId = target.getAttribute("id");

    switch (toolbar.tool) {
      case "layouts":
        createLayoutHandler({ targetGroup, targetId });
        break;

      default:
        if (targetGroup === "root") {
          dispatch(setSelectedComponentId(""));
        }
        break;
    }
    dispatch(setTool("cursor"));
  };

  // outline outline-transparent hover:outline-1 hover:outline-blue-400

  return (
    <div
      className={`w-[1440px] min-h-[1024px] h-max bg-white scale-90 overflow-hidden rounded-lg  ${
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
