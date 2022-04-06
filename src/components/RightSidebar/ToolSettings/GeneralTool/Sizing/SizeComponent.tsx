import React from "react";

import SizeInput from "./SizeInput";

type Props = {};

const SizeComponent = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-1 px-2">
        <SizeInput direction="vertical" type="height" />
        <SizeInput direction="horizontal" type="width" />
      </div>
    </div>
  );
};

export default SizeComponent;
