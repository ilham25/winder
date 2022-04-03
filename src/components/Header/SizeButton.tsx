import { setScreenSize } from "features/toolbar";
import { useAppDispatch, useAppSelector } from "hooks";
import React, { useMemo } from "react";
import { ScreenSizeType } from "types/toolbar";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  screenSize?: ScreenSizeType;
  type?: "button" | "submit" | "reset";
}

const SizeButton = ({ type = "button", screenSize = "xl", ...rest }: Props) => {
  const toolbar = useAppSelector((state) => state.toolbar);
  const dispatch = useAppDispatch();

  const active: boolean = useMemo(() => {
    return toolbar.screenSize === screenSize;
  }, [toolbar.screenSize, screenSize]);

  return (
    <button
      type={type}
      className={`bg-slate-50 text-xs py-1 px-2 rounded outline-blue-200 uppercase ${
        !active
          ? "text-slate-700 hover:bg-blue-400 hover:text-white"
          : "text-blue-400 font-medium hover:outline outline-blue-100"
      }`}
      onClick={() => dispatch(setScreenSize(screenSize))}
      {...rest}
    >
      {screenSize}
    </button>
  );
};

export default SizeButton;
