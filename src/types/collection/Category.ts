import { StrapiData } from "@/types/generic/StrapiData";

export type Category = {
  id: number;
  attributes: attributes;
};

type attributes = StrapiData & {
  Name: string;
};
