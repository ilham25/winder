import React, { useState } from "react";

interface Props {
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className: string;
}

const Component = ({ children, as = "span", className, ...rest }: Props) => {
  const CustomTag = `${as}` as keyof JSX.IntrinsicElements;

  const [child, setChild] = useState();

  return (
    <CustomTag
      className={`outline outline-transparent hover:outline-1 hover:outline-blue-400 ${className}`}
      {...rest}
    />
  );
};

export default Component;
