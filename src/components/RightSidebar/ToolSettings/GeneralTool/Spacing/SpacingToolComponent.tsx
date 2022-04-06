import SectionSubheader from "components/RightSidebar/Subhead";

import React, { useState } from "react";
import PaddingTool from "./Padding/PaddingToolComponent";
import MarginTool from "./Margin/MarginToolComponent";

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
