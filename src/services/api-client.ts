import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
   count: number;
   products: T[];
}

const axiosInstance = axios.create({
   baseURL: 'https://world.openfoodfacts.org',
   headers: {
      'User-Agent': 'diet_tracker - Web - Version 1.0',
    },
})

class APIClient<T>{
   endpoint: string;

   constructor(endpoint: string){
      this.endpoint = endpoint;
   }

   getAll = (config: AxiosRequestConfig) => {
      return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data)
   }
}

export default APIClient;