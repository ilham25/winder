import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LayoutComponentDefault } from "constants/generalTool";

import {
  ComponentsState,
  CreateLayoutComponentPayload,
} from "types/toolSettings";

const initialState: ComponentsState = {};

const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    createLayoutComponent: (
      state,
      action: PayloadAction<CreateLayoutComponentPayload>
    ) => {
      state[action.payload.id] = {
        ...LayoutComponentDefault,
        parentId: action.payload.parentId,
      };
    },
  },
});

export const { createLayoutComponent } = componentsSlice.actions;
export const componentsReducer = componentsSlice.reducer;
