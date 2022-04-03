import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const RightSidebarContainer = ({ children, className }: Props) => {
  return (
    <div
      className={`flex flex-grow min-h-0 overflow-auto bg-white ${className}`}
    >
      {children}
    </div>
  );
};

export default RightSidebarContainer;
