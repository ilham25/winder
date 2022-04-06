import React, { useState } from "react";

import ToolName from "components/RightSidebar/ToolSettings/ToolName";
import {
  Direction,
  Expand,
  TwoDirection,
} from "components/RightSidebar/ToolSettings/GeneralTool/Spacing";

type Props = {};

const MarginToolComponent = (props: Props) => {
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <div>
      <ToolName title="Margin" subTool />
      <div className="grid grid-cols-7 gap-1 px-2">
        <TwoDirection direction="vertical" disabled={expand} type="margin" />
        <TwoDirection direction="horizontal" disabled={expand} type="margin" />
        <Expand onExpand={() => setExpand((prev) => !prev)} />
      </div>
      {expand && (
        <div className="grid grid-cols-4 gap-1 px-2 mt-1">
          <Direction direction="left" type="margin" />
          <Direction direction="right" type="margin" />
          <Direction direction="top" type="margin" />
          <Direction direction="bottom" type="margin" />
        </div>
      )}
    </div>
  );
};

export default MarginToolComponent;
