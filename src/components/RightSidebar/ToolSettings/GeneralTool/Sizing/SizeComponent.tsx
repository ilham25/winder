import { useAppSelector } from "hooks";
import React, { useEffect, useMemo } from "react";
import { getTailwindClassname } from "utils/helper";

import SizeInput from "./SizeInput";

type Props = {};

const SizeComponent = (props: Props) => {
  const components = useAppSelector((state) => state.components);

  const selectedComponentData = useMemo(() => {
    return components.data[components.selectedId];
  }, [components.selectedId]);

  return (
    <div>
      <div className="grid grid-cols-6 gap-1 px-2">
        <SizeInput
          type="height"
          value={selectedComponentData.properties.height}
        />
        <SizeInput
          type="width"
          value={selectedComponentData.properties.width}
        />
      </div>
    </div>
  );
};

export default SizeComponent;
