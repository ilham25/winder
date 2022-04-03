import React from "react";

import RightSidebarContainer from "components/Container/RightSidebar";
import { ProjectSettings } from "./ProjectSettings";

type Props = {};

const RightSidebar = (props: Props) => {
  return (
    <RightSidebarContainer className="flex flex-col">
      <ProjectSettings />
    </RightSidebarContainer>
  );
};

export default RightSidebar;
