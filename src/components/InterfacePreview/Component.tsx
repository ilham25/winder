import React, { useCallback, useState, useMemo, useEffect } from "react";

import { useAppSelector } from "hooks";

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
  }, [components, id]);

  const hasChildren: boolean = useMemo(() => {
    return child.length > 0;
  }, [child]);

  const isText: boolean = useMemo(() => {
    return !!components[id].content;
  }, [components, id]);

  useEffect(() => {
    fetchChild();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
