import { StrapiData } from "@/types/generic/StrapiData";

export type Event = {
  id: number;
  attributes: attributes;
};

type attributes = StrapiData & {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
};
