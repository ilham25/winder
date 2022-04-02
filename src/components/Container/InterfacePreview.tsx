import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}
const InterfacePreviewContainer = ({ children, className }: Props) => {
  return (
    <div className={`flex-grow min-h-0 bg-slate-100 ${className}`}>
      {children}
    </div>
  );
};

export default InterfacePreviewContainer;
