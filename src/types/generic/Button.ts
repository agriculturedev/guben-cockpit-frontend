import { DynamicComponent } from "../Dynamic";

export type ButtonProps = {
  Text: string;
  URL: string;
  newTab: boolean;
};

export type GenericButton = DynamicComponent & ButtonProps;
