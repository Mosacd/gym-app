import { supabase } from "../supabase";


export const getProductList = async () => {
    const { data, error } = await supabase.from("product").select("*"); // Replace "*" with specific columns if needed
  
    if (error) {
      console.error("Error fetching products list:", error.message);
      throw new Error(error.message); // Handle or propagate the error
    }
  
    return data as Product[];
  };

 export type Product = {
    category: string | null;
    created_at: string;
    description: string | null;
    id: number;
    image_url: string | null;
    name: string | null;
    price: number | null;
  }