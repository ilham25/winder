import React from "react";
import { BiExpandAlt } from "react-icons/bi";

type Props = {
  onExpand?: () => any;
};

const Expand = ({ onExpand = () => {} }: Props) => {
  return (
    <button
      className="col-span-1 flex items-center justify-center outline-blue-200 hover:bg-slate-100 rounded text-slate-700"
      onClick={onExpand}
    >
      <BiExpandAlt size={16} />
    </button>
  );
};

export default Expand;
