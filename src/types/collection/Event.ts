export type Event = {
  id: number;
  attributes: attributes;
};

type attributes = {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  locale: string;
  createdAt: Date;
  publishedAt: Date;
  updatedAt: Date;
};
