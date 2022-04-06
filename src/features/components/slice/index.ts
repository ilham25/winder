import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LayoutComponentDefault } from "constants/generalTool";

import {
  ComponentsState,
  CreateLayoutComponentPayload,
} from "types/toolSettings";

const initialState: ComponentsState = {
  data: {},
  selectedId: "",
};

const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    createLayoutComponent: (
      state,
      action: PayloadAction<CreateLayoutComponentPayload>
    ) => {
      state.data[action.payload.id] = {
        ...LayoutComponentDefault,
        parentId: action.payload.parentId,
      };
    },
  },
});

export const { createLayoutComponent } = componentsSlice.actions;
export const componentsReducer = componentsSlice.reducer;
