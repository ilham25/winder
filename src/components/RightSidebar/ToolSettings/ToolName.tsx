import React from "react";

type Props = {
  title: string;
};

const ToolName = ({ title }: Props) => {
  return (
    <div className="flex h-10 bg-white items-center p-2 text-slate-500">
      <p className="text-xs uppercase font-medium">{title}</p>
    </div>
  );
};

export default ToolName;
