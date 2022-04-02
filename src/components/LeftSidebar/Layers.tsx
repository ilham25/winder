import React from "react";
import LayerComponent from "./LayerComponent";
import LayerHead from "./LayerHead";

type Props = {};

const Layers = (props: Props) => {
  return (
    <div>
      <LayerHead />
      <ul className="flex flex-col">
        <LayerComponent title="Heading-1" />
        <LayerComponent title="Heading-2" />
        <LayerComponent title="Heading-3" />
      </ul>
    </div>
  );
};

export default Layers;
