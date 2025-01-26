import { getProductList, Product } from "@/supabase/products";
import {
    useQuery,
    UseQueryOptions,
    UseQueryResult,
  } from "@tanstack/react-query";

export const useGetProductList = <T>({
    queryOptions,
  }: {
    queryOptions?: Omit<UseQueryOptions<Product[], Error, T>, "queryKey">;
  } = {}): UseQueryResult<T, Error> => {
    return useQuery<Product[], Error, T>({
      queryKey: ["products"],
      queryFn: getProductList,
      ...queryOptions,
    });
  };