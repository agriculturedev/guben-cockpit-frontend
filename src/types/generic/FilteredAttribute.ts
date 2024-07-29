export type FilteredAttribute = {
  id: number | string;
  type: string;
  label?: string;
  values?: any[];
  min?: number;
  max?: number;
  multiselect?: boolean;
};
