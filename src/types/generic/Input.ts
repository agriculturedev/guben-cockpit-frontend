import { DynamicComponent } from "../Dynamic";

export type InputProps = {
  name?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value?: string;
  label?: string;
};

export type Input = DynamicComponent & InputProps;
