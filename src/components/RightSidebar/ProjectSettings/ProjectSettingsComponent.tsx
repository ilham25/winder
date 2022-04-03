import React, { useState } from "react";
import ProjectSettingsHead from "./Head";
import { PrimaryColor } from "./PrimaryColor";

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
        </ul>
      )}
    </div>
  );
};

export default ProjectSettingsComponent;
