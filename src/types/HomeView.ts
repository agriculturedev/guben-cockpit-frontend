import { OverviewTab } from "@/types/collection/OverviewTab";

export type HomeView = {
  id: number;
  attributes: Attributes;
};

type Attributes = {
  description: string;
  title: string;
  tabs: {
    data: OverviewTab[];
  };
};
