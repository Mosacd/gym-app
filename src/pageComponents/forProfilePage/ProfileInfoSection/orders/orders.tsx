import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/componentsShadcn/ui/card";
import { Link } from "react-router-dom";
import { useGetUserOrders } from "@/reactQuery/query/order";
import { mapOrdersData } from "@/supabase/order";
import { useAuthContext } from "@/context/auth/hooks/useAuthContext";
import emptyOrdersSvg from "@/assets/undraw_empty_4zx0.svg";

const Orders = () => {
  const { user } = useAuthContext();
  const {
    data: userOrders = [
      {
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
    ],
    isLoading,
  } = useGetUserOrders({ queryOptions: { select: mapOrdersData } }, user?.id);

  const formatTimestamp = (isoString: string) =>
    new Date(isoString).toLocaleString();

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <Card className="border-none shadow-none bg-transparent dark:bg-transparent dark:border-neutral-800">
          <CardHeader>
            <CardTitle className="text-center">
              {userOrders.length} {userOrders.length !== 1 ? "Orders" : "Order"}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            {userOrders.length === 0 ? (
              <img
                src={emptyOrdersSvg}
                alt="No orders"
                className="max-w-72 m-auto"
              />
            ) : (
              userOrders.map((order) => (
                <Link to={`/dashboard/orders/${order.id}`}>
                  <div
                    key={order.id}
                    className="group mb-3 flex flex-col bg-white dark:bg-neutral-950 gap-5 sm:flex-row border-2 px-5 rounded-md dark:border-neutral-800 p-3 justify-between items-center hover:border-black dark:hover:border-white hover:-translate-y-2 transition-all duration-200"
                  >
                    <h1 className="text-xl font-semibold">Order {order.id}</h1>

                    <img
                      className="w-20 h-20 rounded-full"
                      src={order.item[0].image_url[0]}
                      alt=""
                    />
                    <p>Placed on {formatTimestamp(order.created_at)}</p>
                    <div className="flex gap-1">
                      <h1 className="font-semibold">
                        Total: ${order.total_price}
                      </h1>
                      <h1 className="text-gray-500">
                        ({order.item.length}{" "}
                        {order.item.length === 1 ? "item" : "different items"})
                      </h1>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Orders;
