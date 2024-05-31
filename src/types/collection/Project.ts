export type Project = {
  id: number;
  attributes: attributes;
};

type attributes = {
  Title: string;
  Description: string;
  createdAt: Date;
  locale: string;
  publishedAt: Date;
  updatedAt: Date;
};
