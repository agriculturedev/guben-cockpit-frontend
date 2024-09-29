import { StrapiData } from "@/types/generic/StrapiData";
import { Category } from "@/types/collection/Category";

type URL = {
  link: string;
  description: string;
};
export type Event = {
  id: number;
  attributes: attributes;
};

type attributes = StrapiData & {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  categories: {
    data: Category[];
  };
  urls: URL[];
};
