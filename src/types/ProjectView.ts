import { GenericButton } from "./generic/Button";
import { Project } from "./collection/Project";

export type ProjectView = {
  id: number;
  attributes: Attributes;
};

type Attributes = {
  Description: string;
  Title: string;
  InfoFromAdmin: GenericButton[];
  projects: {
    data: Project[];
  };
};
