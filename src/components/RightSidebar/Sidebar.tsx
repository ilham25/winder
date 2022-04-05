import React, { useMemo } from "react";

import RightSidebarContainer from "components/Container/RightSidebar";
import { ProjectSettings } from "./ProjectSettings";
import { ToolSettings } from "./ToolSettings";
import { useAppSelector } from "hooks";

type Props = {};

const RightSidebar = (props: Props) => {
  const toolbar = useAppSelector((state) => state.toolbar);

  const isCursor = useMemo(() => {
    return toolbar.tool === "cursor";
  }, [toolbar.tool]);

  return (
    <RightSidebarContainer className="flex flex-col">
      <ProjectSettings />
      {!isCursor && <ToolSettings />}
    </RightSidebarContainer>
  );
};

export default RightSidebar;
