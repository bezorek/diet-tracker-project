import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import Product from "@/entities/Product";

interface FetchProductsResponse {
   products: Product[];
 }
 
 interface Props{
  selectedCategories: string[]
  searchText: string;
 }

const useProducts = ({selectedCategories, searchText}: Props) => {
 const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
   const controller = new AbortController();

    const params: Record<string, string | number> = {
      search_terms: searchText,
      json: 1,
    }

    selectedCategories.forEach((category, index) => {
      params[`tagtype_${index}`] = 'categories';
      params[`tag_contains_${index}`] = 'contains';
      params[`tag_${index}`] = category;
    });

    apiClient
      .get<FetchProductsResponse>("/cgi/search.pl", {
        signal: controller.signal, 
        params,
      })
      .then((res) => setProducts(res.data.products))
      .catch((err) => {
         if(err instanceof CanceledError) return;
         setError(err.message)});

      return () => controller.abort();
  }, [searchText, selectedCategories]);

  return {products, error}
}

export default useProducts