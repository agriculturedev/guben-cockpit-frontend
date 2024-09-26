import { DynamicComponent } from "../Dynamic";

export type GenericButton = DynamicComponent & {
  text: string;
  url: string;
  newTab: boolean;
};
