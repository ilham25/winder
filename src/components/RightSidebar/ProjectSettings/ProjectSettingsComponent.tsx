import React, { useState } from "react";
import ProjectSettingsHead from "./Head";
import { PrimaryColor } from "./PrimaryColor";
import { RoundedCorners } from "./RoundedCorners";

type Props = {};

const ProjectSettingsComponent = (props: Props) => {
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <div className="border-b border-b-slate-200">
      <ProjectSettingsHead
        onExpand={() => setExpand((prev) => !prev)}
        expand={expand}
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
