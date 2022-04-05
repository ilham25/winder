import { useMemo } from "react";
import { getTailwindSizing } from "utils/helper";

interface TailwindSizeProps {
  type: "margin" | "padding" | "width" | "height";
}

const useTailwindSize = ({ type }: TailwindSizeProps) => {
  const specialSize = useMemo(() => {
    return {
      string: ["auto", "full", "screen", "min", "max", "fit"],
      divided: {
        2: ["1/2"],
        3: ["1/2", "2/3"],
        4: ["1/4", "2/4", "3/4"],
        5: ["1/5", "2/5", "3/5", "4/5"],
        6: ["1/6", "2/6", "3/6", "4/6", "5/6"],
        12: [
          "1/12",
          "2/12",
          "3/12",
          "4/12",
          "5/12",
          "6/12",
          "7/12",
          "8/12",
          "9/12",
          "10/12",
          "11/12",
        ],
      },
    };
  }, []);

  const sizeList: string[] = useMemo(() => {
    let sizes: string[] = [];
    switch (type) {
      case "margin":
        sizes = ["auto", ...getTailwindSizing()];
        break;

      case "height":
      case "width":
        let specificSize: string[] = [
          ...specialSize.divided[2],
          ...specialSize.divided[3],
          ...specialSize.divided[4],
          ...specialSize.divided[5],
          ...specialSize.divided[6],
        ];
        if (type === "width") {
          specificSize = [...specificSize, ...specialSize.divided[12]];
        }
        sizes = [
          ...specialSize.string,
          ...getTailwindSizing(),
          ...specificSize,
        ];
        break;
      default:
        sizes = getTailwindSizing();
        break;
    }
    return sizes;
  }, [specialSize, type]);

  return {
    list: sizeList,
    specialSize,
  };
};
export default useTailwindSize;
