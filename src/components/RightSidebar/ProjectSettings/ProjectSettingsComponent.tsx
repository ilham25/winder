import React, { useState } from "react";

import SectionHeader from "../Head";
import { PrimaryColor } from "./PrimaryColor";
import { RoundedCorners } from "./RoundedCorners";

type Props = {};

const ProjectSettingsComponent = (props: Props) => {
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <div className="border-b border-b-slate-200">
      <SectionHeader
        onExpand={() => setExpand((prev) => !prev)}
        expand={expand}
        title="Project Settings"
      />
      {expand && (
        <ul className="pb-2">
          <PrimaryColor />
          <RoundedCorners />
        </ul>
      )}
    </div>
  );
};

export default ProjectSettingsComponent;
