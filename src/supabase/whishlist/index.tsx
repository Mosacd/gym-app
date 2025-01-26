import { Product } from "../products";
import { supabase } from "../supabase";


export const getWishlistedProducts = async (userId: string | undefined):Promise<Product[]> => {
  if (!userId) {
    throw new Error("User ID is required to fetch wishlisted products.");
  }

  const { data, error } = await supabase
    .from("wishlist")
    .select(`
      id,
      product:product_id (
        id,
        name,
        description,
        created_at,
        price,
        category,
        image_url
      )
    `)
    .eq("user_id", userId);
        console.log(data)
  if (error) {
    console.error("Error fetching wishlisted products:", error.message);
    throw new Error(error.message);
  }

  // Transform the response if needed (optional)
  return data?.map((wishlistItem) => ({
    ...wishlistItem.product,
  })) as Product[] || [];
};


export const addToWishlist = async (userId: string, productId: number) => {
  if (!userId || !productId) {
    throw new Error("User ID and Product ID are required to add to the wishlist.");
  }

  const { data, error } = await supabase
    .from("wishlist")
    .insert([{ user_id: userId, product_id: productId }]);

  if (error) {
    console.error("Error adding item to wishlist:", error.message);
    throw new Error(error.message);
  }

  return data;
};