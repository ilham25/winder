import React from "react";

import ToolbarContainer from "components/Container/Toolbar";
import Tool from "./Tool";

type Props = {};

const Toolbar = (props: Props) => {
  return (
    <ToolbarContainer className="flex flex-col justify-between">
      <div className="flex flex-col">
        <Tool tool="cursor" />
        <Tool tool="layouts" />
        <Tool tool="texts" />
        <Tool tool="regular" />
      </div>

      <Tool tool="settings" />
    </ToolbarContainer>
  );
};

export default Toolbar;
