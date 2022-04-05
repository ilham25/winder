import React, { useMemo } from "react";
import { BiMoveHorizontal, BiMoveVertical } from "react-icons/bi";

type Props = {
  disabled?: boolean;
  direction: "vertical" | "horizontal";
};

const TwoDirection = ({ disabled, direction }: Props) => {
  const DirectionIcon = useMemo(() => {
    const icons = {
      vertical: BiMoveVertical,
      horizontal: BiMoveHorizontal,
    };
    return icons[direction];
  }, [direction]);
  return (
    <div
      className={`col-span-3 h-8 rounded border border-slate-200 overflow-hidden flex items-center gap-1 text-slate-700 px-1 ${
        disabled ? "bg-slate-50" : ""
      }`}
    >
      <div className="h-8 w-6 flex items-center justify-center rounded text-slate-500 mr-1">
        <DirectionIcon size={16} />
      </div>
      <div>
        <input
          type="number"
          className="w-full outline-none text-xs"
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default TwoDirection;
