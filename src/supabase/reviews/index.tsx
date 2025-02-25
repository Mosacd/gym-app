import { supabase } from "../supabase";

export const getProductReviews = async (
  productId: string | undefined,
): Promise<ProductReviews[]> => {
  if (productId === undefined) {
    throw new Error("User ID is required to fetch orders.");
  }

  const { data, error } = await supabase
    .from("reviews")
    .select(
      `
      *,
      profiles!reviews_user_id_fkey ( avatar_url, username )
    `,
    )
    .eq("product_id", Number(productId))
    .order("like", { ascending: false });

  if (error) {
    console.error("Error fetching orders:", error.message);
    throw new Error(error.message);
  }

  return (data as ProductReviews[]) || [];
};

export const writeReview = async ({
  userId,
  productId,
  rating,
  comment,
}: {
  userId: string;
  rating: number;
  productId: string;
  comment: string;
}): Promise<void> => {
  // Validate input
  console.log("userId: ", userId);
  console.log("productId: ", productId);
  console.log("comment: ", comment);

  const { error } = await supabase.from("reviews").insert([
    {
      user_id: userId,
      product_id: Number(productId),
      rating: rating,
      comment: comment,
    },
  ]);

  // Handle any errors
  if (error) {
    console.error("Error writing review:", error.message);
    throw new Error("Failed to write the review. Please try again later.");
  }
};

export const getUserReviews = async (
  id: string | undefined,
): Promise<Reviews[]> => {
  if (id === undefined) {
    throw new Error("User ID is required to fetch orders.");
  }
  console.log("id: ", id);
  const { data, error } = await supabase
    .from("reviews")
    .select(
      `
      *,
      product!reviews_product_id_fkey ( image_url, name )
    `,
    ).order("created_at", { ascending: false })
    .eq("user_id", id);

  if (error) {
    console.error("Error fetching orders:", error.message);
    throw new Error(error.message);
  }

  return (data as Reviews[]) || [];
};


export const mapUserReviewsData = (datalist: Reviews[]) => {
  return datalist.map((data) => ({
    comment: data.comment || "",
    created_at: data.created_at || "",
    dislike: data.dislike || "",
    like: data.like || "",
    product_id: data.product_id || "",
    user_id: data.user_id || "",
    rating: data.rating || "",
    product: {
      image_url: data.product.image_url || [""],
      name: data.product.name || "",
    },
    id: data.id,
  }));
};

export type Reviews = {
  comment: string | null;
  created_at: string;
  dislike: number | null;
  id: number;
  like: number | null;
  product_id: number | null;
  user_id: string | null;
  rating: string | null;
  product:{
    image_url: string[] | null;
    name: string | null;
  }
};

export type ProductReviews = {
  comment: string | null;
  created_at: string;
  dislike: number | null;
  id: number;
  like: number | null;
  product_id: number | null;
  user_id: string | null;
  rating: string | null;
  profiles: {
    avatar_url: string | null;
    username: string | null;
  };
};
