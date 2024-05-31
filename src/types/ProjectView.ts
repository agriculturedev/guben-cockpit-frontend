import { GenericButton } from "./generic/Button";
import { Project } from "./collection/Project";

export type ProjectView = {
  id: number;
  attributes: attributes;
};

type attributes = {
  Description: string;
  Title: string;
  InfoFromAdmin: GenericButton[];
  projects: {
    data: Project[];
  };
};
