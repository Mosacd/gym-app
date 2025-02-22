import {
  getProductReviews,
  getUserReviews,
  ProductReviews,
  Reviews,
} from "@/supabase/reviews";
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

export const useGetProductReviews = <T = ProductReviews[],>({
  productId,
  queryOptions,
}: {
  productId: string | undefined;
  queryOptions?: Omit<
    UseQueryOptions<ProductReviews[], Error, T>,
    "queryKey" | "queryFn"
  >;
}): UseQueryResult<T, Error> => {
  return useQuery<ProductReviews[], Error, T>({
    queryKey: ["productReviews", productId],
    queryFn: () => getProductReviews(productId),
    enabled: !!productId, // Only fetch if productId is defined
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    ...queryOptions,
  });
};

export const useGetUserReviews = <T = Reviews[],>({
  userId,
  queryOptions,
}: {
  userId: string | undefined;
  queryOptions?: Omit<
    UseQueryOptions<Reviews[], Error, T>,
    "queryKey" | "queryFn"
  >;
}): UseQueryResult<T, Error> => {
  return useQuery<Reviews[], Error, T>({
    queryKey: ["userReviews", userId],
    queryFn: () => getUserReviews(userId),
    enabled: !!userId, // Only fetch if userId is defined
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    ...queryOptions,
  });
};
