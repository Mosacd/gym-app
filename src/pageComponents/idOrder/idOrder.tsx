import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/componentsShadcn/ui/card";

import { useGetUserSingleOrder } from "@/reactQuery/query/order";
import { mapSingleOrdersData } from "@/supabase/order";
import { useParams } from "react-router-dom";

const IdOrder = () => {
  const { OrderId } = useParams();
  const {
    data: userOrder = {
      status: "idk",
      created_at: "idk",
      total_price: 0,
      updated_at: "idk",
      user_id: "0",
      id: 0,
      item: [
        {
          productId: 0,
          name: "",
          price: 0,
          quantity: 0,
          category: "",
          created_at: "",
          description: "",
          image_url: [""],
        },
      ],
    },
    isLoading,
  } = useGetUserSingleOrder(
    { queryOptions: { select: mapSingleOrdersData } },
    OrderId,
  );

  const formatTimestamp = (isoString: string) =>
    new Date(isoString).toLocaleString();

  return (
    <div className="flex flex-col items-center p-10 sm:p-20 min-h-screen">
      {!isLoading && (
        <>
          <h1 className="text-3xl mb-5 font-semibold dark:text-white font-mono">
            ORDER {userOrder.id}
          </h1>
          <h1 className="text-gray-700 dark:text-gray-400 mb-4">
            placed on {formatTimestamp(userOrder.created_at)}
          </h1>
          <table className="w-full max-w-screen-md bg-white dark:bg-neutral-950 border-separate border-4 rounded-md text-center dark:border-neutral-800 dark:text-gray-400 hidden sm:table">
            <thead className="bg-gray-200 dark:bg-black dark:text-white text-sm font-semibold uppercase text-gray-600">
              <tr className="*:px-2 *:border-b-2 *:dark:border-neutral-800 *:text-xs sm:*:text-base md:*:px-4  *:py-2">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {userOrder.item.map((product) => (
                <tr className="border-y-2 *:px-2 *:py-2 *:text-xs *:font-semibold sm:*:px-4 sm:*:text-base ">
                  <td className="flex items-center gap-4 flex-col sm:flex-row">
                    <img
                      src={product.image_url[0]}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                    <div>
                      <p className="wrap">{product.name}</p>
                    </div>
                  </td>
                  <td>
                    <p>{Number(product.price).toFixed(2)}$</p>
                  </td>
                  <td>
                    <div className="flex items-center justify-center gap-2 sm:gap-4">
                      <div className="text-center">{product.quantity}</div>
                    </div>
                  </td>
                  <td className="">
                    {(Number(product.price) * product.quantity).toFixed(2)}$
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Card View */}
          <div className="sm:hidden space-y-4 w-full">
            {userOrder.item.map((product) => (
              <Card key={product.productId} className="w-full">
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                  <img
                    src={product.image_url[0]}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div>
                    <CardTitle className="text-base">{product.name}</CardTitle>
                    <p className="text-sm text-gray-500">
                      {Number(product.price).toFixed(2)}$
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <h1>amount:</h1>
                      <div>{product.quantity}</div>
                    </div>
                    <div className="font-semibold">
                      {(Number(product.price) * product.quantity).toFixed(2)}$
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <h1 className="text-gray-700 dark:text-gray-400 mb-4 text-xl mt-4 font-semibold">
            Total Price: {userOrder.total_price}$
          </h1>
        </>
      )}
    </div>
  );
};

export default IdOrder;
