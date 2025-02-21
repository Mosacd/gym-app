import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/componentsShadcn/ui/card";
import { useAuthContext } from "@/context/auth/hooks/useAuthContext";
import { useGetWhishlistedProducts } from "@/reactQuery/query/whishlist";
import { mapProductTableData } from "@/supabase/products";
import emptyWhishlistsSvg from "@/assets/undraw_wishlist_71gv.svg";
import { Link } from "react-router-dom";

const Whishlist = () => {
  const { user } = useAuthContext();

  const { data: whishlistProducts = [] } = useGetWhishlistedProducts(
    { queryOptions: { select: mapProductTableData } },
    user?.id,
  );

  return (
    
    <Card className="border-4 dark:border-neutral-800">
      <CardHeader>
        <CardTitle className="text-center">
          {whishlistProducts.length} Whishlists
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex gap-4 flex-wrap justify-center">
          {whishlistProducts.length === 0 ? (
            <img
              src={emptyWhishlistsSvg}
              alt="No whishlists"
              className="max-w-72 m-auto"
            />
          ) : (
            whishlistProducts.map((product) => {
              return (
                <Link className="w-60 transform-all duration-200 hover:-translate-y-2" to={`/dashboard/productDetail/${product.id}`}>
                <div
                  key={product.id}
                  className="flex-1 max-w-60  cursor-pointer"
                >
                  <div className="group hover:border-black dark:hover:border-white border-2 bg-white rounded-lg  hover:shadow-md hover:bg-gray-100 dark:hover:bg-neutral-900 transiton-shadow duration-200  dark:border-neutral-800 dark:bg-neutral-950 dark:text-white">
                    <div className="w-full p-4 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-50 group-hover:scale-110 transform-all duration-200">
                        <img
                          src={product.image_url[0]}
                          alt={product.name}
                          className="w-full h-full object-contai"
                        />
                      </div>
                    </div>
                    <div className="px-4 pb-4 flex-1 flex justify-center">
                      <h3 className="text-base font-medium truncate">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </div>
                </Link>
              );
            })
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Whishlist;
