import { InfoCardVariant1 } from "@/types/cards/InfoCardVariants";

export type OverviewTab = {
  id: number;
  attributes: Attributes;
};

type Attributes = {
  title: string;
  cards: InfoCardVariant1[];
};
