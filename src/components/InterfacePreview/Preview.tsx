import InterfacePreviewContainer from "components/Container/InterfacePreview";
import React from "react";
import Board from "./Board";

type Props = {};

const InterfacePreview = (props: Props) => {
  return (
    <InterfacePreviewContainer className="p-5 flex items-start overflow-auto">
      <Board />
    </InterfacePreviewContainer>
  );
};

export default InterfacePreview;
