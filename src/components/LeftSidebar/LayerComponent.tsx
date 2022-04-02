import React, { useState } from "react";
import { BiChevronDown, BiChevronUp, BiText } from "react-icons/bi";

type Props = {
  title?: string;
};

const LayerComponent = ({ title = "Heading-1" }: Props) => {
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <li className="group flex flex-grow h-10 bg-white hover:bg-blue-400 hover:text-white cursor-pointer items-center p-2 text-sm text-slate-700">
      <button className="flex flex-grow items-center outline-none gap-1">
        <BiText
          size={18}
          className="bg-blue-400 rounded p-0.5 text-white group-hover:bg-white group-hover:text-blue-400"
        />
        {title}
      </button>

      <button
        className="outline-none"
        onClick={() => setExpand((prev) => !prev)}
      >
        {!expand && <BiChevronDown size={20} />}
        {expand && <BiChevronUp size={20} />}
      </button>
    </li>
  );
};

export default LayerComponent;
