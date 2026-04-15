export type PaginatedResponse<T> = {
  items: T[];
  meta: {
    page: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
};
