import SectionSubheader from "components/RightSidebar/Subhead";
import { LayoutType } from "types/projectSettings";
import { toolbarTitles } from "constants/toolbar";
import React, { useState } from "react";
import ToolName from "../ToolName";
import LayoutSelect from "./LayoutSelect";

type Props = {};

const LayoutToolComponent = (props: Props) => {
  const [layoutType, setLayoutType] = useState<LayoutType>("block");
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <div>
      <SectionSubheader
        title={toolbarTitles["layouts"]}
        expand={expand}
        onExpand={() => setExpand((prev) => !prev)}
      />
      {expand && (
        <div>
          <ToolName title="Layout type" subTool />
          <div className="px-2">
            <LayoutSelect value={layoutType} onChange={setLayoutType} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LayoutToolComponent;
