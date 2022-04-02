import ToolbarContainer from "components/Container/Toolbar";
import React from "react";
import Tool from "./Tool";

type Props = {};

const Toolbar = (props: Props) => {
  return (
    <ToolbarContainer className="flex flex-col justify-between">
      <Tool />

      <Tool tool="settings" />
    </ToolbarContainer>
  );
};

export default Toolbar;
