import SectionSubheader from "components/RightSidebar/Subhead";

import React, { useState } from "react";
import SizeComponent from "./SizeComponent";

type Props = {};

const SizingToolComponent = (props: Props) => {
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <div>
      <SectionSubheader
        title="Sizing"
        expand={expand}
        onExpand={() => setExpand((prev) => !prev)}
      />
      {expand && (
        <div>
          <SizeComponent />
        </div>
      )}
    </div>
  );
};

export default SizingToolComponent;
