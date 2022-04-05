import { toolbarTitles } from "constants/toolbar";
import React from "react";
import ToolName from "../ToolName";

type Props = {};

const LayoutToolComponent = (props: Props) => {
  return (
    <div>
      <ToolName title={toolbarTitles["layouts"]} />
    </div>
  );
};

export default LayoutToolComponent;
