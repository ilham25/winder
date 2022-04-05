import React, { useMemo } from "react";
import {
  BiDownArrowAlt,
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiUpArrowAlt,
} from "react-icons/bi";

type Props = {
  direction: "top" | "bottom" | "right" | "left";
};

const Direction = ({ direction }: Props) => {
  const DirectionIcon = useMemo(() => {
    const icons = {
      top: BiUpArrowAlt,
      bottom: BiDownArrowAlt,
      left: BiLeftArrowAlt,
      right: BiRightArrowAlt,
    };
    return icons[direction];
  }, [direction]);

  return (
    <div className="col-span-1 h-8 rounded border border-slate-200 overflow-hidden flex items-center gap-1 text-slate-700 px-1">
      <div className="h-8 w-6 flex items-center justify-center rounded text-slate-500">
        <DirectionIcon size={16} />
      </div>
      <div>
        <input type="number" className="w-full bg-white outline-none text-xs" />
      </div>
    </div>
  );
};

export default Direction;
