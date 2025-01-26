import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/componentsShadcn/ui/card";
import { Link } from "react-router-dom";
import { useGetUserOrders } from "@/reactQuery/query/order";
import { mapOrdersData } from "@/supabase/order";
import { useAuthContext } from "@/context/auth/hooks/useAuthContext";

const Orders = () => {
  const { user } = useAuthContext();
  const { data: userOrders = [] } = useGetUserOrders({ queryOptions: { select: mapOrdersData } }, user?.id);

  return (
    <Card className="border-4 dark:border-neutral-800">
      <CardHeader>
        <CardTitle className="text-center">{userOrders.length} Orders</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {userOrders.map((order) => (
          <div 
            key={order.id} 
            className="flex flex-col gap-5 sm:flex-row border-2 px-5 rounded-md dark:border-neutral-800 p-3 justify-between items-center"
          >
            <div className="flex flex-col gap-5">
              <h1 className="text-xl font-semibold">Order {order.id}</h1>
              <Link 
                className="hover:border-b justify-center dark:text-gray-400 h-2 border-gray-600 text-gray-700 text-sm flex items-end gap-1" 
                to={`/orders/${order.id}`}
              >
                view order 
                <svg 
                  className="w-3 h-4 fill-black dark:fill-white" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.3153 16.6681C15.9247 17.0587 15.9247 17.6918 16.3153 18.0824C16.7058 18.4729 17.339 18.4729 17.7295 18.0824L22.3951 13.4168C23.1761 12.6357 23.1761 11.3694 22.3951 10.5883L17.7266 5.9199C17.3361 5.52938 16.703 5.52938 16.3124 5.91991C15.9219 6.31043 15.9219 6.9436 16.3124 7.33412L19.9785 11.0002L2 11.0002C1.44772 11.0002 1 11.4479 1 12.0002C1 12.5524 1.44772 13.0002 2 13.0002L19.9832 13.0002L16.3153 16.6681Z" fill=""></path>
                </svg>
              </Link>
            </div>
            <p>Placed on {order.created_at}</p>
            <div className="flex items-end gap-1">
              <h1 className="font-semibold">Total: ${order.total_price}</h1>
              <h1 className="text-gray-500">({order.item.length} items)</h1>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        {/* Footer content if needed */}
      </CardFooter>
    </Card>
  );
};

export default Orders;