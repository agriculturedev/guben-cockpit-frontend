import { Image } from "../generic/Image";
import { StrapiData } from "@/types/generic/StrapiData";

export type Project = {
  id: number;
  attributes: attributes;
};

type attributes = StrapiData & {
  projectId: string;
  title: string;
  description: string;
  image?: Image;
  contact: Contact;
  fullText: string;
  imageUrl: string;
  imageCaption: string;
  imageCredits: string;
};

export type Contact = {
  address: string;
  email: string;
  phone: string;
  fax: string;
};
