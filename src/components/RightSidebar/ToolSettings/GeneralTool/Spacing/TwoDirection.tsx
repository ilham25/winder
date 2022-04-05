import React, { useMemo, useState } from "react";

import { BiMoveHorizontal, BiMoveVertical } from "react-icons/bi";
import { Listbox } from "@headlessui/react";

import { useTailwindSize } from "hooks";

type Props = {
  disabled?: boolean;
  direction: "vertical" | "horizontal";
  type?: "padding" | "margin";
};

const TwoDirection = ({ disabled, direction, type = "padding" }: Props) => {
  const { list: sizeList } = useTailwindSize({ type });

  const [value, setValue] = useState<string>("0");

  const DirectionIcon = useMemo(() => {
    const icons = {
      vertical: BiMoveVertical,
      horizontal: BiMoveHorizontal,
    };
    return icons[direction];
  }, [direction]);

  return (
    <Listbox
      as="div"
      className={`relative col-span-3 h-8 rounded border border-slate-200 text-slate-700 hover:bg-slate-50  ${
        disabled ? "bg-slate-50" : ""
      }`}
      value={value}
      onChange={setValue}
      disabled={disabled}
    >
      <Listbox.Button
        className={`w-full flex items-center gap-1  px-1  outline-blue-200 `}
      >
        <div className="h-8 w-6 flex items-center justify-center rounded text-slate-500 mr-1">
          <DirectionIcon size={16} />
        </div>
        <div className="w-full">
          <p className="text-xs">{value}</p>
        </div>
      </Listbox.Button>
      <Listbox.Options className="dropdown-container text-slate-700 flex flex-col ">
        {sizeList.map((size) => (
          <Listbox.Option key={size} value={size}>
            {({ selected, active }) => (
              <button
                className={`bg-white flex p-2 w-full  ${
                  selected ? "bg-blue-100" : "hover:bg-blue-50"
                } ${active ? "bg-blue-50" : ""}`}
              >
                <p className=" text-xs"> {size}</p>
              </button>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default TwoDirection;
