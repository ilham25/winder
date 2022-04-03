import React from "react";
import LayerComponent from "./LayerComponent";
import LayerHead from "./LayerHead";

type Props = {};

const Layers = (props: Props) => {
  return (
    <div className="flex-grow min-h-0 flex flex-col">
      <LayerHead />
      <ul className="flex-grow min-h-0 overflow-auto">
        <LayerComponent title="Landing">
          <LayerComponent title="Group-1">
            <LayerComponent title="Heading-1" componentType="texts" />
            <LayerComponent title="Heading-1" componentType="texts" />
            <LayerComponent title="Group-2">
              <LayerComponent title="Heading-1" componentType="texts" />
            </LayerComponent>
          </LayerComponent>
          <LayerComponent title="Heading-2" componentType="texts" />
          <LayerComponent title="Heading-3" componentType="texts" />
        </LayerComponent>
        <LayerComponent title="Landing">
          <LayerComponent title="Group-1">
            <LayerComponent title="Heading-1" componentType="texts" />
            <LayerComponent title="Heading-1" componentType="texts" />
            <LayerComponent title="Group-2">
              <LayerComponent title="Heading-1" componentType="texts" />
            </LayerComponent>
          </LayerComponent>
          <LayerComponent title="Heading-2" componentType="texts" />
          <LayerComponent title="Heading-3" componentType="texts" />
        </LayerComponent>
        <LayerComponent title="Landing">
          <LayerComponent title="Group-1">
            <LayerComponent title="Heading-1" componentType="texts" />
            <LayerComponent title="Heading-1" componentType="texts" />
            <LayerComponent title="Group-2">
              <LayerComponent title="Heading-1" componentType="texts" />
            </LayerComponent>
          </LayerComponent>
          <LayerComponent title="Heading-2" componentType="texts" />
          <LayerComponent title="Heading-3" componentType="texts" />
        </LayerComponent>
      </ul>
    </div>
  );
};

export default Layers;
