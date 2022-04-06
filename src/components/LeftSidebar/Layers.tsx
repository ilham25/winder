import { useAppSelector } from "hooks";
import React, { useMemo } from "react";
import LayerComponent from "./LayerComponent";
import LayerHead from "./LayerHead";

type Props = {};

const Layers = (props: Props) => {
  const components = useAppSelector((state) => state.components);

  const parentComponents = useMemo(() => {
    return Object.keys(components).filter((key) => !components[key].parentId);
  }, [components]);

  return (
    <div className="flex-grow min-h-0 flex flex-col">
      <LayerHead />
      <ul className="flex-grow min-h-0 overflow-auto">
        {parentComponents.map((key) => (
          <LayerComponent
            key={key}
            id={key}
            group={components[key].group}
            title={components[key].group}
          />
        ))}
      </ul>
    </div>
  );
};

export default Layers;
