import React, { useCallback, useState, useMemo, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "hooks";

import { ComponentType } from "types/toolSettings";
import { setSelectedComponentId } from "features/components";

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

  const dispatch = useAppDispatch();

  const [child, setChild] = useState<string[]>([]);

  const fetchChild = useCallback(() => {
    const childs = Object.keys(components.data).filter(
      (key) => components.data[key].parentId === id
    );

    setChild(childs);
  }, [components, id]);

  const hasChildren: boolean = useMemo(() => {
    return child.length > 0;
  }, [child]);

  const isText: boolean = useMemo(() => {
    return !!components.data[id].content;
  }, [components, id]);

  const onComponentClick = () => {
    dispatch(setSelectedComponentId(id));
  };

  const isSelected = useMemo(() => {
    return id === components.selectedId;
  }, [components.selectedId, id]);

  useEffect(() => {
    fetchChild();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [components]);

  return (
    <CustomTag
      className={`outline outline-transparent hover:outline-1 hover:outline-blue-400 ${
        isSelected ? "outline-1 outline-blue-400" : ""
      } ${className}`}
      id={id}
      {...rest}
      onClick={onComponentClick}
    >
      {isText && components.data[id].content}
      {hasChildren && !isText && (
        <>
          {child.map((key) => (
            <Component
              key={key}
              as={components.data[key].as}
              {...components.data[key]}
              id={key}
            />
          ))}
        </>
      )}
    </CustomTag>
  );
};

export default Component;
