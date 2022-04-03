import ProjectInformationContainer from "components/Container/ProjectInformation";
import React from "react";
import { BiRightArrow } from "react-icons/bi";
import Account from "./Account";
import SizeButton from "./SizeButton";

type Props = {};

const ProjectInformation = (props: Props) => {
  return (
    <ProjectInformationContainer className="grid grid-cols-3 px-2 py-1">
      <div className="grid-col-1 flex items-center gap-2 ">
        <div className="w-6 h-6 text-white bg-blue-400 flex items-center justify-center rounded p-1">
          <BiRightArrow size={20} />
        </div>
        <p className="text-xs text-slate-600 uppercase">Project 1</p>
      </div>
      <div className="flex items-center justify-center gap-2 grid-col-1 ">
        <SizeButton screenSize="xl" />
        <SizeButton screenSize="lg" />
        <SizeButton screenSize="md" />
        <SizeButton screenSize="sm" />
        <SizeButton screenSize="xs" />
      </div>
      <div className="flex items-center justify-end gap-2 grid-col-1 ">
        <Account />
      </div>
    </ProjectInformationContainer>
  );
};

export default ProjectInformation;
