import React from "react";
import { MarginTool, PaddingTool } from "..";
import ToolName from "../../ToolName";

type Props = {};

const SpacingToolComponent = (props: Props) => {
  return (
    <div>
      <ToolName title="Spacing" />
      <MarginTool />
      <PaddingTool />
    </div>
  );
};

export default SpacingToolComponent;
