import SectionSubheader from "components/RightSidebar/Subhead";
import { LayoutType } from "types/projectSettings";
import { toolbarTitles } from "constants/toolbar";
import React, { useCallback, useMemo, useState } from "react";
import ToolName from "../ToolName";
import LayoutSelect from "./LayoutSelect";
import { FlexboxTool } from "./FlexboxTool";
import { GridTool } from "./GridTool";

type Props = {};

const LayoutToolComponent = (props: Props) => {
  const [layoutType, setLayoutType] = useState<LayoutType>("block");
  const [expand, setExpand] = useState<boolean>(true);

  const DisplayedTool = useCallback(() => {
    switch (layoutType) {
      case "flexbox":
      case "inline-flex":
        return <FlexboxTool />;

      case "grid":
      case "inline-grid":
        return <GridTool />;

      default:
        return <></>;
    }
  }, [layoutType]);

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
          <LayoutSelect value={layoutType} onChange={setLayoutType} />
          <DisplayedTool />
        </div>
      )}
    </div>
  );
};

export default LayoutToolComponent;
