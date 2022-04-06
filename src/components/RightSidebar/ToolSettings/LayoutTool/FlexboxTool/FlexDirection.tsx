import Select from "components/Form/Select";
import React, { useMemo, useState } from "react";
import { FlexDirectionType } from "types/projectSettings";
import ToolName from "../../ToolName";

type Props = {};

const FlexDirection = (props: Props) => {
  const [flexDirection, setFlexDirection] = useState<FlexDirectionType>("row");

  const directions: { display: string; value: FlexDirectionType }[] =
    useMemo(() => {
      return [
        {
          display: "Row",
          value: "row",
        },
        {
          display: "Column",
          value: "col",
        },
        {
          display: "Row reversed",
          value: "row-reverse",
        },
        {
          display: "Column reversed",
          value: "col-reverse",
        },
      ];
    }, []);
  return (
    <div>
      <ToolName title="Flex Direction" subTool />
      <Select
        value={flexDirection}
        onChange={setFlexDirection}
        dataSource={directions}
      />
    </div>
  );
};

export default FlexDirection;
