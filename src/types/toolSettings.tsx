import { ToolType } from "./toolbar";

type ComponentGroup = ToolType;

export type ComponentType = {
  as: keyof JSX.IntrinsicElements;
  className?: string;
  children?: ComponentType[];
  parentId?: string;
  content?: string;
  group?: ComponentGroup;
};

export type ComponentsState = {
  data: { [key: string]: ComponentType };
  selectedId: string;
};

export type CreateLayoutComponentPayload = {
  id: string;
  parentId?: string;
};
