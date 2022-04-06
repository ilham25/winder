import { useAppSelector } from "hooks";
import React, { useCallback, useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { ComponentType } from "types/toolSettings";

interface Props extends ComponentType {
  id: string;
}

const Component = ({
  id,
  children,
  as = "span",
  className,
  ...rest
}: Props) => {
  const CustomTag = `${as}` as keyof JSX.IntrinsicElements;

  const components = useAppSelector((state) => state.components);

  const [child, setChild] = useState<string[]>([]);

  const fetchChild = useCallback(() => {
    const childs = Object.keys(components).filter(
      (key) => components[key].parentId === id
    );

    setChild(childs);
  }, [components]);

  const hasChildren: boolean = useMemo(() => {
    return child.length > 0;
  }, [child]);

  const isText: boolean = useMemo(() => {
    return !!components[id].content;
  }, [components[id]]);

  useEffect(() => {
    fetchChild();
  }, [components]);

  return (
    <CustomTag
      className={`outline outline-transparent hover:outline-1 hover:outline-blue-400 ${className}`}
      id={id}
      {...rest}
    >
      {isText && components[id].content}
      {hasChildren && !isText && (
        <>
          {child.map((key) => (
            <Component
              key={key}
              as={components[key].as}
              {...components[key]}
              id={key}
            />
          ))}
        </>
      )}
    </CustomTag>
  );
};

export default Component;
