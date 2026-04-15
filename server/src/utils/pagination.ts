import {Request} from 'express';
import {PaginatedResponse} from '../types/pagination';

export const createPaginatedResponse = <T>({
  items,
  totalItems,
  page,
  itemsPerPage,
}: {
  items: T[];
  totalItems: number;
  page: number;
  itemsPerPage: number;
}): PaginatedResponse<T> => {
  return {
    items,
    meta: {
      page,
      itemsPerPage,
      totalItems,
      totalPages: Math.ceil(totalItems / itemsPerPage),
    },
  };
};

export const getPageRequest = (req: Request) => {
  const page = Number(req.query.page) || 0;
  const itemsPerPage = Math.min(Number(req.query.itemsPerPage || 20), 100);
  return {
    itemsPerPage,
    page: page,
    skipItems: Math.max(page, 0) * itemsPerPage,
    searchKey: req.query.searchKey || '',
  };
};
