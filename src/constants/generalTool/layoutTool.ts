import { LayoutType } from "types/projectSettings";
import { ComponentType } from "types/toolSettings";

export const LayoutTypes: LayoutType[] = [
  "block",
  "flexbox",
  "grid",
  "inline",
  "inline-block",
  "inline-flex",
  "inline-grid",
];

export const LayoutComponentDefault: ComponentType = {
  as: "div",
  className: "h-32 w-full bg-slate-200",
  group: "layouts",
};
