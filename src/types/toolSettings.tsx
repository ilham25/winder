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
  [key: string]: ComponentType;
};

export type CreateLayoutComponentPayload = {
  id: string;
  parentId?: string;
};
