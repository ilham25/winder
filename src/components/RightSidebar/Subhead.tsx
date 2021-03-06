import React from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

type Props = {
  onExpand?: () => any;
  expand?: boolean;
  title?: string;
};

const SectionSubheader = ({
  onExpand = () => {},
  expand,
  title = "",
}: Props) => {
  return (
    <div className="flex gap-2 h-10 bg-white items-center p-2 text-slate-500">
      <p className="text-xs uppercase  font-medium">{title}</p>
      <button
        className="flex items-center justify-center outline-blue-200 hover:bg-blue-400 hover:text-white rounded"
        onClick={onExpand}
      >
        {expand && <BiChevronDown size={20} />}
        {!expand && <BiChevronUp size={20} />}
      </button>
    </div>
  );
};

export default SectionSubheader;
