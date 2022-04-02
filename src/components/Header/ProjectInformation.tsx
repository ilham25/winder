import ProjectInformationContainer from "components/Container/ProjectInformation";
import React from "react";
import { BiRightArrow } from "react-icons/bi";

type Props = {};

const ProjectInformation = (props: Props) => {
  return (
    <ProjectInformationContainer className="flex items-center gap-2 px-2 py-1">
      <div className="w-6 h-6 text-white bg-blue-400 flex items-center justify-center rounded p-1">
        <BiRightArrow size={20} />
      </div>
      <p className="text-sm text-slate-600">Project 1</p>
    </ProjectInformationContainer>
  );
};

export default ProjectInformation;
