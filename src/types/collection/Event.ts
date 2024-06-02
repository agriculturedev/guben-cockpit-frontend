export type Event = {
  id: number;
  attributes: attributes;
};

type attributes = {
  Name: string;
  Description: string;
  Date: Date;
  locale: string;
  createdAt: Date;
  publishedAt: Date;
  updatedAt: Date;
};
