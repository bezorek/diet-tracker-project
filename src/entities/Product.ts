import Nutriments from "./Nutriments";

export default interface Product {
   id: string;
   product_name: string;
   image_small_url: string;
   quantity: number
   brands: string;
   nutriments: Nutriments;
 }