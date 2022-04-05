import SectionSubheader from "components/RightSidebar/Subhead";
import React, { useState } from "react";
import { MarginTool, PaddingTool } from "..";
import ToolName from "../../ToolName";

type Props = {};

const SpacingToolComponent = (props: Props) => {
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <div>
      <SectionSubheader
        title="Spacing"
        expand={expand}
        onExpand={() => setExpand((prev) => !prev)}
      />
      {expand && (
        <div>
          <MarginTool />
          <PaddingTool />
        </div>
      )}
    </div>
  );
};

export default SpacingToolComponent;
