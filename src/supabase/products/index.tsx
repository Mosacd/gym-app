import { supabase } from "../supabase";

export const getProductList = async () => {
  const { data, error } = await supabase.from("product").select("*"); // Replace "*" with specific columns if needed
  console.log(data);
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
};

export const mapProductTableData = (datalist: Product[]) => {
  return datalist.map((data) => ({
    category: data.category || "",
    created_at: data.created_at || "",
    description: data.description || "",
    image_url: data.image_url || "",
    name: data.name || "",
    price: data.price || "",
    id: data.id,
  }));
};

export const getSingleProduct = async (id: string) => {
  const { data, error } = await supabase
    .from("product")
    .select("*") // Specify the fields to retrieve
    .eq("id", Number(id)) // Match the `id` column
    .single(); // Expect a single record

  if (error) {
    console.error("Error fetching single product:", error.message);
    throw new Error(error.message); // Handle or propagate the error
  }

  return data as Product;
};

export const mapSingleProductTableData = (data: Product) => ({
  category: data.category || "",
  created_at: data.created_at || "",
  description: data.description || "",
  image_url: data.image_url || "",
  name: data.name || "",
  price: data.price || "",
  id: data.id,
});

export const getProductListWithCategory = async (
  productType: string | undefined,
) => {
  const { data, error } = await supabase
    .from("product")
    .select("*")
    .ilike("category", productType || ""); // Replace "*" with specific columns if needed
  console.log(data);
  console.log("this is category:", productType);
  console.log("1");
  if (error) {
    console.error("Error fetching products list:", error.message);
    throw new Error(error.message); // Handle or propagate the error
  }

  return data as Product[];
};

export const getProductListBestSelling = async () => {
  const { data, error } = await supabase
    .from("product")
    .select("*") // Replace "*" with specific columns if needed
    .order("sales_number", { ascending: false }) // Order by sales in descending order
    .limit(5);

  if (error) {
    console.error("Error fetching products list:", error.message);
    throw new Error(error.message); // Handle or propagate the error
  }

  return data as Product[];
};

export const getProductListWorstSelling = async () => {
  const { data, error } = await supabase
    .from("product")
    .select("*") // Replace "*" with specific columns if needed
    .order("sales_number", { ascending: true }) // Order by sales in descending order
    .limit(5);

  if (error) {
    console.error("Error fetching products list:", error.message);
    throw new Error(error.message); // Handle or propagate the error
  }

  return data as Product[];
};
