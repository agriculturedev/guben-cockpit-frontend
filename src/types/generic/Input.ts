import { DynamicComponent } from "../Dynamic";

export type Input = DynamicComponent & {
  name: string;
  placeholder: string;
  required: boolean;
  type: string;
  value: string;
};
