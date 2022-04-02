import React from "react";

type Props = {
  children?: React.ReactNode;
};

const TooltipComponent = ({ children }: Props) => {
  return (
    <div className="relative z-10">
      <div className="absolute top-0 bottom-0 h-10 w-10 bg-black left-1/2 z-10"></div>
      {children}
    </div>
  );
};

export default TooltipComponent;
