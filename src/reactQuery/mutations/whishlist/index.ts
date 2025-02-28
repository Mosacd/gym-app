import { addToWishlist, deleteFromWishlist } from "@/supabase/whishlist";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddToWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation<
    void, // Updated to reflect the `void` return type of `mutationFn`
    Error,
    { userId: string | undefined; productId: string | undefined }
  >({
    mutationKey: ["addToWishlist"],
    mutationFn: addToWishlist,

    // Updated to use the void-returning function
    onSuccess: (_, { userId }) => {
      console.log("Profile updated successfully!");
      queryClient.invalidateQueries({
        queryKey: ["Whishlist", userId],
        exact: true, // Ensures only the exact query is invalidated
      });
    },
    onError: (error: Error) => {
      console.error("Error creating user:", error);
    },
  });
};

export const useDeleteWhishlistItem = () => {
  const queryClient = useQueryClient();

  return useMutation<
    void,
    Error,
    {
      userId: string;
      productId: number;
    }
  >({
    mutationKey: ["deleteWhishlistItem"],
    mutationFn: deleteFromWishlist,

    onSuccess: (_, { userId }) => {
      console.log("Item deleted from wishlist successfully!");
      queryClient.invalidateQueries({
        queryKey: ["Whishlist", userId],
        exact: true,
      });
    },

    onError: (error: Error) => {
      console.error("Error deleting item from wishlist:", error);
    },
  });
};
