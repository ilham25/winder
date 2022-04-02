import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const ToolbarContainer = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={`flex-grow min-h-0 overflow-auto bg-white ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ToolbarContainer;
