import { DynamicComponent } from "../Dynamic";

export type GenericButton = DynamicComponent & {
  Text: string;
  URL: string;
  newTab: boolean;
};
