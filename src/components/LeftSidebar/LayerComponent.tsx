import { toolbarIcons } from "constants/toolbar";
import React, { useMemo, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { ToolType } from "types/toolbar";

type Props = {
  title?: string;
  children?: React.ReactNode;
  componentType?: ToolType;
};

const LayerComponent = ({
  children,
  title = "Heading-1",
  componentType = "regular",
}: Props) => {
  const [expand, setExpand] = useState<boolean>(false);

  const ComponentIcon = useMemo(() => {
    return toolbarIcons[componentType];
  }, [componentType]);

  return (
    <li className="">
      <div className="group flex flex-grow h-10 bg-white hover:bg-blue-400 hover:text-white cursor-pointer items-center p-2 text-slate-700">
        <button className="flex flex-grow items-center outline-none gap-1 text-xs ">
          <ComponentIcon
            size={18}
            className="bg-blue-400 rounded p-0.5 text-white group-hover:bg-white group-hover:text-blue-400"
          />
          {title}
        </button>

        <button
          className={`outline-none ${children ? "visible" : "invisible"}`}
          onClick={() => setExpand((prev) => !prev)}
        >
          {!expand && <BiChevronDown size={20} />}
          {expand && <BiChevronUp size={20} />}
        </button>
      </div>
      {expand && (
        <ul className="ml-4 border-l-2 border-blue-100 flex flex-col">
          {children}
        </ul>
      )}
    </li>
  );
};

export default LayerComponent;
