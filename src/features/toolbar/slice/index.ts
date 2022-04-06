import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ScreenSizeType, ToolbarState, ToolType } from "types/toolbar";

const initialState: ToolbarState = {
  tool: "cursor",
  screenSize: "xl",
};

const toolbarSlice = createSlice({
  name: "toolbar",
  initialState,
  reducers: {
    setTool: (state, action: PayloadAction<ToolType>) => {
      state.tool = action.payload;
    },
    setScreenSize: (state, action: PayloadAction<ScreenSizeType>) => {
      state.screenSize = action.payload;
    },
  },
});

export const { setTool, setScreenSize } = toolbarSlice.actions;
export const toolbarReducer = toolbarSlice.reducer;
