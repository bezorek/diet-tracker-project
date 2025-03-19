import APIClient, { FetchResponse } from "../services/api-client";
import Product from "@/entities/Product";
import { ProductQuery } from "@/pages/Dashboard";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Product>('/cgi/search.pl')

interface SearchParams{
  [key: string]: string | number;
}

const useProducts = (productQuery: ProductQuery) => {
  const PAGE_SIZE = 30;

  const params: SearchParams = {}

  if (productQuery.categories?.length) {
    productQuery.categories.forEach((category, index) => {
      params[`tagtype_${index}`] = 'categories';
      params[`tag_contains_${index}`] = 'contains';
      params[`tag_${index}`] = category;
    });
  }

  return useInfiniteQuery<FetchResponse<Product>, Error>({
    queryKey: ['products', productQuery],
    queryFn: ({ pageParam }) => 
      apiClient.getAll({
          params: {
            ...params,
            search_terms: productQuery.searchText,
            page: pageParam,
            page_size: PAGE_SIZE,
            json: 1,
          }
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.count > allPages.length * PAGE_SIZE ? allPages.length + 1 : undefined;
    }
  });
}

export default useProducts;