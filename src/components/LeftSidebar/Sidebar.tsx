import React from "react";

import LeftSidebarContainer from "components/Container/LeftSidebar";
import Layers from "./Layers";
import Pages from "./Pages";

type Props = {};

const LeftSidebar = (props: Props) => {
  return (
    <LeftSidebarContainer className="flex flex-col">
      <Pages />
      <Layers />
    </LeftSidebarContainer>
  );
};

export default LeftSidebar;
