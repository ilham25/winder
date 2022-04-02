import React from "react";
import { BiChevronDown, BiChevronRight, BiPlus } from "react-icons/bi";

type Props = {
  onExpand?: () => any;
  onAdd?: () => any;
  expand?: boolean;
};

const PageHead = ({ onExpand = () => {}, onAdd = () => {}, expand }: Props) => {
  return (
    <div className="flex justify-between flex-grow h-10 bg-white items-center p-2">
      <p className="text-sm text-blue-400 font-medium">Pages</p>
      <div className="flex items-center gap-2">
        <button
          className="flex items-center justify-center outline-blue-50 hover:bg-blue-400 hover:text-white rounded"
          onClick={onAdd}
        >
          <BiPlus size={20} />
        </button>
        <button
          className="flex items-center justify-center outline-blue-50 hover:bg-blue-400 hover:text-white rounded"
          onClick={onExpand}
        >
          {expand && <BiChevronDown size={20} />}
          {!expand && <BiChevronRight size={20} />}
        </button>
      </div>
    </div>
  );
};

export default PageHead;
