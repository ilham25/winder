import React from "react";

import { Header } from "components/Header";
import { Toolbar } from "components/Toolbar";
import { RightSidebar } from "components/RightSidebar";
import { InterfacePreview } from "components/InterfacePreview";
import { LeftSidebar } from "components/LeftSidebar";

function App() {
  return (
    <div className="h-screen overflow-auto flex flex-col min-h-0">
      <Header />
      <div className="flex-grow overflow-hidden min-h-0 grid grid-cols-[3.5rem_250px_1fr_250px]">
        <Toolbar />
        <LeftSidebar />
        <InterfacePreview />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
