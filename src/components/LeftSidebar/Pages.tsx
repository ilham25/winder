import React, { useState } from "react";
import PageComponent from "./PageComponent";
import PageHead from "./PageHead";

type Props = {};

const Pages = (props: Props) => {
  const [expand, setExpand] = useState<boolean>(true);
  return (
    <div className="border-b border-b-slate-200">
      <PageHead expand={expand} onExpand={() => setExpand((prev) => !prev)} />
      {expand && (
        <ul className="h-44 overflow-auto">
          <PageComponent />
          <PageComponent />
          <PageComponent />
          <PageComponent />
          <PageComponent />
        </ul>
      )}
    </div>
  );
};

export default Pages;
