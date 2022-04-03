export type ToolType = "cursor" | "settings" | "layouts" | "texts" | "regular";
export type ScreenSizeType = "xl" | "lg" | "md" | "sm" | "xs";
export type ToolbarState = {
  tool: ToolType;
  screenSize: ScreenSizeType;
};
