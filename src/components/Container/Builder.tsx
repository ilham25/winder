import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}
const BuilderContainer = (props: Props) => {
  return (
    <div className="flex-grow overflow-hidden min-h-0 bg-blue-300 grid grid-cols-[3.5rem_250px_1fr_250px]"></div>
  );
};

export default BuilderContainer;
