import { Button } from "@/componentsShadcn/ui/button";
import { Input } from "@/componentsShadcn/ui/input";
import { useCartContext } from "@/context/cart/hooks/useCartContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/componentsShadcn/ui/card";

const CartPage = () => {
  const { cart, removeFromCart, clearCart,  changeQuantity  } = useCartContext();

  // Calculate total and other costs
  const totalCost = cart.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );
  const deliveryCost = 2; // Example delivery fee
  const finalCost = totalCost + deliveryCost;

  return (
    <div className="py-24 px-2 sm:px-8">
      <div className="flex flex-col w-full max-w-screen-xl justify-center gap-20 items-center m-auto lg:flex-row">
        {/* Left Section: Product Display */}
        <div className="w-full max-w-3xl md:min-w-[600px] flex-auto">
          {/* Desktop Table View */}
          <table className="w-full border-separate border-4 rounded-md text-center dark:border-neutral-800 dark:text-gray-400 hidden sm:table">
            <thead className="bg-gray-200 dark:bg-black dark:text-white text-sm font-semibold uppercase text-gray-600">
              <tr className="*:px-2 *:border-b-2 *:dark:border-neutral-800 *:text-xs sm:*:text-sm md:*:px-4 *:py-2">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 ? (
                cart.map((product) => (
                  <tr
                    key={product.id}
                    className="border-y-2 *:px-2 *:py-2 *:text-xs *:font-semibold sm:*:px-4 sm:*:text-sm"
                  >
                    <td className="flex items-center gap-4 flex-col sm:flex-row">
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-full"
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
                        <Button onClick={() => changeQuantity(product.id.toString(), "decrement")} className="h-8 w-8 bg-gray-200 text-black hover:bg-gray-300">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 12L18 12"
                              stroke="#000000"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </Button>
                        <div className="text-center">{product.quantity}</div>
                        <Button onClick={() => changeQuantity(product.id.toString(), "increment")} className="h-8 w-8 text-sm bg-gray-200 text-black hover:bg-gray-300">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 12H18M12 6V18"
                              stroke="#000000"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </Button>
                      </div>
                    </td>
                    <td>
                      {(Number(product.price) * product.quantity).toFixed(2)}$
                    </td>
                    <td>
                      <Button
                        onClick={() => removeFromCart(product.id.toString())}
                        variant="destructive"
                        className="bg-red-500 text-white hover:bg-red-600"
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-4 font-semibold">
                    Your cart is empty
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Mobile Card View */}
          <div className="sm:hidden space-y-4">
            {cart.length > 0 ? (
              cart.map((product) => (
                <Card key={product.id} className="w-full">
                  <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                    <div>
                      <CardTitle className="text-base">{product.name}</CardTitle>
                      <p className="text-sm text-gray-500">{Number(product.price).toFixed(2)}$</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Button className="h-8 w-8 bg-gray-200 text-black hover:bg-gray-300">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 12L18 12"
                              stroke="#000000"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </Button>
                        <div>{product.quantity}</div>
                        <Button className="h-8 w-8 text-sm bg-gray-200 text-black hover:bg-gray-300">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 12H18M12 6V18"
                              stroke="#000000"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </Button>
                      </div>
                      <div className="font-semibold">
                        {(Number(product.price) * product.quantity).toFixed(2)}$
                      </div>
                      <Button
                        onClick={() => removeFromCart(product.id.toString())}
                        variant="destructive"
                        className="bg-red-500 text-white hover:bg-red-600"
                      >
                        Remove
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-4">Your cart is empty.</div>
            )}
          </div>

          {/* Coupon and Update Buttons */}
          <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-3">
            <Input
              type="text"
              placeholder="Coupon code"
              className="max-w-sm px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
            <div className="w-full md:max-w-xs flex flex-col md:flex-row items-center gap-4">
              <Button className="w-full max-w-sm text-white">
                Use Coupon
              </Button>
              <Button
                variant={"secondary"}
                onClick={clearCart}
                className="w-full max-w-sm"
              >
                Clear Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Right Section: Cost Summary */}
        <div className="border-2 flex-auto border-gray-200 rounded-lg p-4 w-full max-w-md dark:text-white dark:border-neutral-800">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">
            Full Cost
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Total</span>
              <span className="font-semibold">{totalCost.toFixed(2)}$</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span className="font-semibold text-lg">
                {deliveryCost.toFixed(2)}$
              </span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total Cost</span>
              <span>{finalCost.toFixed(2)}$</span>
            </div>
            <Button className="w-full text-white py-2 mt-4">Make Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;