import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const ProjectInformationContainer = ({ children, className }: Props) => {
  return (
    <div
      className={`flex-grow bg-white border-l-4 border-b-4 border-slate-100 ${className}`}
    >
      {children}
    </div>
  );
};

export default ProjectInformationContainer;
