import LeftSidebarContainer from "components/Container/LeftSidebar";
import React from "react";
import LayerComponent from "./LayerComponent";
import LayerHead from "./LayerHead";
import Layers from "./Layers";
import Pages from "./Pages";

type Props = {};

const LeftSidebar = (props: Props) => {
  return (
    <LeftSidebarContainer>
      <Pages />
      <Layers />
    </LeftSidebarContainer>
  );
};

export default LeftSidebar;
