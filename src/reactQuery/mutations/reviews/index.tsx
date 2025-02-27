import { deleteReview, toggleLike, writeReview } from "@/supabase/reviews";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

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

export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation<
    void,
    Error,
    {
      userId: string;
      reviewId: number;
      productId: string;
    }
  >({
    mutationKey: ["deleteReview"],
    mutationFn: async ({ reviewId }) => deleteReview(reviewId),

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
      console.error("Error Deleting review:", error);
    },
  });
};

export const useToggleLike = () => {
  const queryClient = useQueryClient();

  return useMutation<
    { liked: boolean; change: number },
    Error,
    { reviewId: number; userId: string, productId: string }
  >({
    mutationKey: ["toggleLike"],
    mutationFn: ({ reviewId, userId }) => toggleLike(reviewId, userId),

    onSuccess: ({ liked }, { productId, userId, reviewId }) => {
      console.log(`Like toggled: ${liked ? "Liked" : "Unliked"}`);
      console.log("Invalidating query key:", ["productReviews", productId]);


      // Optimistically update the like count in queries
      queryClient.invalidateQueries({
        queryKey: ["userReviews", userId],
        exact: true,
      });
      queryClient.invalidateQueries({
        queryKey: ["productReviews", productId],
        exact: true,
      });
      queryClient.invalidateQueries({
        queryKey: ["liked", userId, reviewId],
        exact: true,
      });
    },

    onError: (error: Error) => {
      console.error("Error toggling like:", error);
      toast("Must be logged in")
    },
  });
};
