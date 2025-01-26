import { useCartContext } from "@/context/cart/hooks/useCartContext";
import { placeOrder } from "@/supabase/order";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePlaceOrder = () => {
  const { clearCart } = useCartContext();
  const queryClient = useQueryClient();

  return useMutation<
    void, // Updated to reflect the `void` return type of `mutationFn`
    Error,
    {
      userId: string | undefined;
      items: { productId: number; quantity: number }[];
      totalPrice: number;
    }
  >({
    mutationKey: ["placeOrder"],
    mutationFn: placeOrder,

    // Updated to use the void-returning function
    onSuccess: (_, { userId }) => {
      clearCart();
      console.log("Profile updated successfully!");
      queryClient.invalidateQueries({
        queryKey: ["Orders", userId],
        exact: true, // Ensures only the exact query is invalidated
      });
    },
    onError: (error: Error) => {
      console.error("Error creating user:", error);
    },
  });
};
