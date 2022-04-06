import { toolbarIcons } from "constants/toolbar";
import { useAppSelector } from "hooks";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { ToolType } from "types/toolbar";

type Props = {
  id: string;
  title?: string;
  group?: ToolType;
};

const LayerComponent = ({
  id,
  title = "Heading-1",
  group = "regular",
}: Props) => {
  const components = useAppSelector((state) => state.components);

  const [expand, setExpand] = useState<boolean>(false);

  const [child, setChild] = useState<string[]>([]);

  const fetchChild = useCallback(() => {
    const childs = Object.keys(components).filter(
      (key) => components[key].parentId === id
    );

    setChild(childs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [components]);

  const hasChildren: boolean = useMemo(() => {
    return child.length > 0;
  }, [child]);

  const ComponentIcon = useMemo(() => {
    return toolbarIcons[group];
  }, [group]);

  useEffect(() => {
    fetchChild();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [components]);

  return (
    <li className="">
      <div className="group flex flex-grow h-10 bg-white hover:bg-blue-400 hover:text-white cursor-pointer items-center p-2 text-slate-700">
        <button className="flex flex-grow items-center outline-none gap-1 text-xs capitalize">
          <ComponentIcon
            size={18}
            className="bg-blue-400 rounded p-0.5 text-white group-hover:bg-white group-hover:text-blue-400"
          />
          {title.toLowerCase()}
        </button>

        <button
          className={`outline-none ${hasChildren ? "visible" : "invisible"}`}
          onClick={() => setExpand((prev) => !prev)}
        >
          {!expand && <BiChevronDown size={20} />}
          {expand && <BiChevronUp size={20} />}
        </button>
      </div>
      {expand && hasChildren && (
        <ul className="ml-4 border-l-2 border-blue-100 flex flex-col">
          {child.map((key) => (
            <LayerComponent
              key={key}
              id={key}
              group={components[key].group}
              title={components[key].group}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default LayerComponent;
