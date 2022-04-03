import { primaryColorPalettes } from "constants/toolbar";
import React, { useState } from "react";
import { PrimaryColorLevel, PrimaryColorPalette } from "types/toolbar";
import Color from "./Color";
import ColorList from "./ColorList";
import PrimaryColorHead from "./Head";

type Props = {};

const PrimaryColorComponent = (props: Props) => {
  const [expand, setExpand] = useState<boolean>(true);
  const [selectedPalette, setSelectedPalette] = useState<
    PrimaryColorPalette | null | undefined
  >();
  const paletteLevels: PrimaryColorLevel[] = [
    100, 200, 300, 400, 500, 600, 700,
  ];
  return (
    <li>
      <PrimaryColorHead
        expand={expand}
        onExpand={() => setExpand((prev) => !prev)}
      />
      {expand && (
        <div className="pt-2 pb-4">
          <div className="grid grid-cols-6 gap-2 px-2">
            {primaryColorPalettes.map((palette) => (
              <ColorList
                key={palette}
                palette={palette}
                onClick={() => setSelectedPalette(palette)}
              />
            ))}
          </div>
          {!!selectedPalette && (
            <div className="flex flex-col px-2 mt-3">
              <p
                className={`text-xs font-medium mb-2 text-${
                  selectedPalette ? selectedPalette : "slate"
                }-500`}
              >
                Shades
              </p>
              <ul className="flex items-center gap-2">
                {paletteLevels.map((level) => (
                  <Color key={level} palette={selectedPalette} level={level} />
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </li>
  );
};

export default PrimaryColorComponent;
