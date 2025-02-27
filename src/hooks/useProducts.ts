import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchProductsResponse {
   products: Product[];
 }
 
 // interface Nutriments{
 //   energy: number,
 //   proteins: number,
 //   carbohydrates: number,
 //   fat: number,
 // }
 
 interface Product {
   id: string;
   generic_name: string;
   image: string;
   //nutriments: Nutriments;
 }
 

const useProducts = () => {
 const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
   const controller = new AbortController();

    apiClient
      .get<FetchProductsResponse>("?search_terms=szynka&json=1", {signal: controller.signal})
      .then((res) => setProducts(res.data.products))
      .catch((err) => {
         if(err instanceof CanceledError) return;
         setError(err.message)});

      return () => controller.abort();
  }, []);

  return {products, error}
}

export default useProducts