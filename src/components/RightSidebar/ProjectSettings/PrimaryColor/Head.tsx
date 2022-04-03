import React from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

type Props = {
  onExpand?: () => any;
  expand?: boolean;
};

const PrimaryColorHead = ({ onExpand = () => {}, expand }: Props) => {
  return (
    <div className="flex justify-between h-10 bg-white items-center p-2 text-slate-500">
      <p className="text-xs uppercase  font-medium">Primary Color</p>
      <div className="flex items-center gap-2">
        <button
          className="flex items-center justify-center outline-blue-200 hover:bg-blue-400 hover:text-white rounded"
          onClick={onExpand}
        >
          {expand && <BiChevronDown size={20} />}
          {!expand && <BiChevronUp size={20} />}
        </button>
      </div>
    </div>
  );
};

export default PrimaryColorHead;
