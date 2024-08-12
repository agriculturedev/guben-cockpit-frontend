import { Pagination } from "@/types/generic/Pagination";

export interface PagedResult<T> {
  data: T[];
  meta: {
    pagination: Pagination;
  };
}
