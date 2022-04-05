import React from "react";

type Props = {
  title: string;
  subTool?: boolean;
};

const ToolName = ({ title, subTool }: Props) => {
  return (
    <div
      className={`flex bg-white items-center p-2 ${
        !subTool ? "text-slate-500" : "text-blue-600"
      }`}
    >
      <p
        className={`text-xs ${
          !subTool ? "uppercase font-medium" : "font-medium"
        }`}
      >
        {title}
      </p>
    </div>
  );
};

export default ToolName;
