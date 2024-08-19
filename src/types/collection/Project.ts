import { Image } from "../generic/Image";

export type Project = {
  id: number;
  attributes: attributes;
};

type attributes = {
  title: string;
  description: string;
  image?: Image;
  contact: Contact;
  createdAt: Date;
  locale: string;
  publishedAt: Date;
  updatedAt: Date;
};

export type Contact = {
  address: string;
  email: string;
  phone: string;
  fax: string;
};
