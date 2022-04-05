import SectionSubheader from "components/RightSidebar/Subhead";
import { cornerList } from "constants/projectSettings";
import React, { useState } from "react";
import Corner from "./Corner";

type Props = {};

const RoundedCornersComponent = (props: Props) => {
  const [expand, setExpand] = useState<boolean>(true);

  return (
    <li>
      <SectionSubheader
        title="Rounded Corners"
        expand={expand}
        onExpand={() => setExpand((prev) => !prev)}
      />
      {expand && (
        <div className="m-2 grid grid-rows-2 rounded overflow-hidden border">
          <div className="h-24 row-span-2 grid grid-cols-4 divide-x">
            {cornerList.map((corner) => (
              <Corner key={corner} size={corner} />
            ))}
          </div>
          <button className="h-10 row-span-1 flex items-center justify-center gap-2 outline-blue-200 hover:bg-slate-100">
            <div className="w-8 h-3 border-2 border-slate-400 rounded-full"></div>
            <p className="text-xs text-slate-500">full</p>
          </button>
        </div>
      )}
    </li>
  );
};

export default RoundedCornersComponent;
