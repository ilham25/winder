import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}
const HeaderContainer = ({ children }: Props) => {
  return (
    <div className="w-screen h-14 bg-red-400 grid grid-cols-[3.5rem_1fr]">
      {children}
    </div>
  );
};

export default HeaderContainer;
