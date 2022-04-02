import React from "react";
import { BiTrash, BiWindows } from "react-icons/bi";

type Props = {};

const PageComponent = (props: Props) => {
  return (
    <li className="group flex flex-grow h-10 bg-white hover:bg-blue-400 hover:text-white cursor-pointer items-center p-2 text-sm text-slate-700">
      <button className="flex flex-grow items-center outline-none gap-1">
        <BiWindows
          size={18}
          className="bg-blue-400 rounded p-0.5 text-white group-hover:bg-white group-hover:text-blue-400"
        />
        Page-1
      </button>

      <button className="outline-none invisible group-hover:visible">
        <BiTrash size={16} />
      </button>
    </li>
  );
};

export default PageComponent;
