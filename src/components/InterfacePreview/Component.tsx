import React from "react";

interface Props {
  children?: React.ReactNode;
  as: keyof JSX.IntrinsicElements;
  className: string;
}

const Component = ({ children, as, className, ...rest }: Props) => {
  const CustomTag = `${as}` as keyof JSX.IntrinsicElements;
  return (
    <CustomTag
      className={`outline outline-transparent hover:outline-1 hover:outline-blue-400 ${className}`}
      {...rest}
    >
      {children}
    </CustomTag>
  );
};

export default Component;
