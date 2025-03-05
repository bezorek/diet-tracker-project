import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import Product from "@/entities/Product";

interface FetchProductsResponse {
   products: Product[];
 }
 

const useProducts = () => {
 const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
   const controller = new AbortController();

    apiClient
      .get<FetchProductsResponse>("?search_terms=czekolada&tagtype_0=categories&tag_contains_0=contains&tag_0=snacks&tagtype_1=stores&tag_contains_1=contains&tag_1=biedronka&json=1", {signal: controller.signal})
      .then((res) => setProducts(res.data.products))
      .catch((err) => {
         if(err instanceof CanceledError) return;
         setError(err.message)});

      return () => controller.abort();
  }, []);

  return {products, error}
}

export default useProducts