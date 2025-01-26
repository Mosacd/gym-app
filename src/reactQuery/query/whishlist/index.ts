import { Product } from "@/supabase/products";
import { getWishlistedProducts } from "@/supabase/whishlist";
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

export const useGetWhishlistedProducts = <T>(
  {
    queryOptions,
  }: {
    queryOptions?: Omit<UseQueryOptions<Product[], Error, T>, "queryKey">;
  } = {},
  id: string | undefined,
): UseQueryResult<T, Error> => {
  return useQuery<Product[], Error, T>({
    queryKey: ["Whishlist", id],
    queryFn: () => {
      return getWishlistedProducts(id);
    },
    staleTime: 60 * 1000, // Cache for 6 min
    ...queryOptions,
  });
};
