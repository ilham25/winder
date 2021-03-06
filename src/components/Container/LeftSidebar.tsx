import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const LeftSidebarContainer = ({ children, className }: Props) => {
  return (
    <div
      className={`flex-grow min-h-0 bg-white border-l-4 border-slate-100 ${className}`}
    >
      {children}
    </div>
  );
};

export default LeftSidebarContainer;
