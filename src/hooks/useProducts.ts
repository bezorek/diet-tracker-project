import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchProductsResponse {
   products: Product[];
 }
 
 interface Product {
   id: string;
   product_name: string;
   image_small_url: string;
   brands: string;
   nutriments: {
      'energy-kcal_serving': number,
      proteins_serving: number,
      fat_serving: number,
      carbohydrates_serving: number
   };
 }
 

const useProducts = () => {
 const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
   const controller = new AbortController();

    apiClient
      .get<FetchProductsResponse>("?search_terms=serek&json=1", {signal: controller.signal})
      .then((res) => setProducts(res.data.products))
      .catch((err) => {
         if(err instanceof CanceledError) return;
         setError(err.message)});

      return () => controller.abort();
  }, []);

  return {products, error}
}

export default useProducts