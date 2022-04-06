import React, { useState } from "react";

import SectionHeader from "../Head";
import { SizingTool } from "./GeneralTool";
import { Spacing } from "./GeneralTool/Spacing";

import { LayoutTool } from "./LayoutTool";

type Props = {};

const ToolSettingsComponent = (props: Props) => {
  const [expand, setExpand] = useState<boolean>(true);
  return (
    <div className="border-b border-b-slate-200">
      <SectionHeader
        onExpand={() => setExpand((prev) => !prev)}
        expand={expand}
        title="Tool Settings"
      />
      {expand && (
        <div className="pb-2">
          <LayoutTool />
          <SizingTool />
          <Spacing />
        </div>
      )}
    </div>
  );
};

export default ToolSettingsComponent;
