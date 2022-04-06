import React, { useEffect, useMemo } from "react";

import Component from "./Component";

import { useAppSelector } from "hooks";
import { getTailwindSizing } from "utils/helper";
import BoardRoot from "./BoardRoot";

type Props = {};

const Board = (props: Props) => {
  const components = useAppSelector((state) => state.components);

  useEffect(() => {
    getTailwindSizing();
  }, []);

  const parentComponents = useMemo(() => {
    return Object.keys(components.data).filter(
      (key) => !components.data[key].parentId
    );
  }, [components]);

  return (
    <BoardRoot>
      {parentComponents.map((key) => (
        <Component
          key={key}
          as={components.data[key].as}
          {...components.data[key]}
          id={key}
        />
      ))}
    </BoardRoot>
  );
};

export default Board;
