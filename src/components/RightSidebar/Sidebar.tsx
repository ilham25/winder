import React, { useMemo } from "react";

import RightSidebarContainer from "components/Container/RightSidebar";
import { ProjectSettings } from "./ProjectSettings";
import { ToolSettings } from "./ToolSettings";
import { useAppSelector } from "hooks";

type Props = {};

const RightSidebar = (props: Props) => {
  const toolbar = useAppSelector((state) => state.toolbar);
  const components = useAppSelector((state) => state.components);

  const isSelectedComponentAvailable: boolean = useMemo(() => {
    return !!components.selectedId;
  }, [components.selectedId]);

  return (
    <RightSidebarContainer className="flex flex-col">
      <ProjectSettings />
      {isSelectedComponentAvailable && <ToolSettings />}
    </RightSidebarContainer>
  );
};

export default RightSidebar;
