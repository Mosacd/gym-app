import { writeReview } from "@/supabase/reviews";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useWriteReview = () => {
  const queryClient = useQueryClient();

  return useMutation<
    void,
    Error,
    {
      userId: string | undefined;
      productId: string | undefined;
      comment: string | undefined;
    }
  >({
    mutationKey: ["writeReview"],
    mutationFn: writeReview,

    onSuccess: (_, { userId, productId }) => {
      console.log("Review submitted successfully!");
      queryClient.invalidateQueries({
        queryKey: ["Reviews", userId, productId],
        exact: true,
      });
    },

    onError: (error: Error) => {
      console.error("Error submitting review:", error);
    },
  });
};
