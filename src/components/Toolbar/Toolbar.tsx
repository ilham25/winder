import ToolbarContainer from "components/Container/Toolbar";
import React, { useState } from "react";
import { ToolType } from "types/toolbar";
import Tool from "./Tool";

type Props = {};

const Toolbar = (props: Props) => {
  const [activeTool, setActiveTool] = useState<ToolType>("cursor");
  return (
    <ToolbarContainer className="flex flex-col justify-between">
      <div className="flex flex-col">
        <Tool
          tool="cursor"
          active={activeTool === "cursor"}
          onClick={() => setActiveTool("cursor")}
        />
        <Tool
          tool="layouts"
          active={activeTool === "layouts"}
          onClick={() => setActiveTool("layouts")}
        />
        <Tool
          tool="texts"
          active={activeTool === "texts"}
          onClick={() => setActiveTool("texts")}
        />
        <Tool
          tool="regular"
          active={activeTool === "regular"}
          onClick={() => setActiveTool("regular")}
        />
      </div>

      <Tool
        tool="settings"
        active={activeTool === "settings"}
        onClick={() => setActiveTool("settings")}
      />
    </ToolbarContainer>
  );
};

export default Toolbar;
