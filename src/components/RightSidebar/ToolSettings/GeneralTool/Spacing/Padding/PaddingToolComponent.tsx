import React, { useState } from "react";

import ToolName from "components/RightSidebar/ToolSettings/ToolName";
import {
  Direction,
  Expand,
  TwoDirection,
} from "components/RightSidebar/ToolSettings/GeneralTool/Spacing";
type Props = {};

const PaddingToolComponent = (props: Props) => {
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <div>
      <ToolName title="Padding" subTool />
      <div className="grid grid-cols-7 gap-1 px-2">
        <TwoDirection direction="vertical" disabled={expand} />
        <TwoDirection direction="horizontal" disabled={expand} />
        <Expand onExpand={() => setExpand((prev) => !prev)} />
      </div>
      {expand && (
        <div className="grid grid-cols-4 gap-1 px-2 mt-1">
          <Direction direction="left" />
          <Direction direction="right" />
          <Direction direction="top" />
          <Direction direction="bottom" />
        </div>
      )}
    </div>
  );
};

export default PaddingToolComponent;
