import { getWishlistedProducts, WhishlistItem } from "@/supabase/whishlist";
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

export const useGetWhishlistedProducts = <T>(
  {
    queryOptions,
  }: {
    queryOptions?: Omit<UseQueryOptions<WhishlistItem[], Error, T>, "queryKey">;
  } = {},
  id: string | undefined,
): UseQueryResult<T, Error> => {
  return useQuery<WhishlistItem[], Error, T>({
    queryKey: ["Whishlist", id],
    queryFn: () => {
      return getWishlistedProducts(id);
    },
    staleTime: 60 * 1000, // Cache for 6 min
    ...queryOptions,
  });
};
