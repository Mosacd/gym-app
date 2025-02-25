import { writeReview } from "@/supabase/reviews";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useWriteReview = () => {
  const queryClient = useQueryClient();

  return useMutation<
    void,
    Error,
    {
      userId: string;
      rating: number;
      productId: string;
      comment: string;
    }
  >({
    mutationKey: ["writeReview"],
    mutationFn: writeReview,

    onSuccess: (_, { userId, productId }) => {
      console.log("Review submitted successfully!");
      queryClient.invalidateQueries({
        queryKey: ["userReviews", userId],
        exact: true,
      });
      queryClient.invalidateQueries({
        queryKey: ["productReviews", productId],
        exact: true,
      });
    },

    onError: (error: Error) => {
      console.error("Error submitting review:", error);
    },
  });
};
