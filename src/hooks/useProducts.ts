import APIClient, { FetchResponse } from "../services/api-client";
import Product from "@/entities/Product";
import { ProductQuery } from "@/pages/Dashboard";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Product>('/cgi/search.pl')

const useProducts = (productQuery: ProductQuery) => {

  const params: Record<string, string | number> = {
    search_terms: productQuery.searchText,
    json: 1,
  }

  productQuery.categories?.forEach((category, index) => {
    params[`tagtype_${index}`] = 'categories';
    params[`tag_contains_${index}`] = 'contains';
    params[`tag_${index}`] = category;
  });

  return useQuery<FetchResponse<Product>, Error>({
    queryKey: ['products', productQuery],
    queryFn: () => 
      apiClient.getAll({
          params
      }),
  });
}

export default useProducts;