import { Button } from "@/componentsShadcn/ui/button"; // Assuming you have a reusable button component
import productImage from "@/assets/Hoodie.webp"; // Replace with your actual image
import { Input } from "@/componentsShadcn/ui/input";


const CartPage = () => {
  const products = [
    {
      id: 1,
      name: "FuckAss Hoodie",
      price: 25.0,
      image: productImage,
      quantity: 1,
    },
    {
        id: 1,
        name: "FuckAss Hoodie",
        price: 25.0,
        image: productImage,
        quantity: 1,
      },
      {
        id: 1,
        name: "FuckAss Hoodie",
        price: 25.0,
        image: productImage,
        quantity: 1,
      },
      {
        id: 1,
        name: "FuckAss Hoodie",
        price: 25.0,
        image: productImage,
        quantity: 1,
      },{
        id: 1,
        name: "FuckAss Hoodie",
        price: 25.0,
        image: productImage,
        quantity: 1,
      },
      
  ];

  return (
    <div className="py-24 px-2 sm:px-8">
      <div className="flex flex-col w-full max-w-screen-xl justify-center gap-20 items-center m-auto lg:flex-row">
        {/* Left Section: Product Table */}
        <div className="w-full max-w-3xl md:min-w-[500px] flex-auto">
        <table className="w-full border-separate border-4 rounded-md text-center dark:border-neutral-800 dark:text-gray-400">
  <thead className="bg-gray-200 dark:bg-black dark:text-white text-sm font-semibold uppercase text-gray-600">
    <tr className="*:px-2 *:border-b-2 *:dark:border-neutral-800 *:text-xs sm:*:text-sm md:*:px-4  *:py-2">
      <th>Product</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product) => (
      <tr key={product.id} className="border-y-2 *:px-2 *:py-2 *:text-xs *:font-semibold sm:*:px-4 sm:*:text-sm " >
        <td className="flex items-center gap-4 flex-col sm:flex-row">
          <img
            src={product.image}
            alt={product.name}
            className="w-12 h-12 object-cover rounded-full"
          />
          <div>
            <p className="wrap">{product.name}</p>
          </div>
        </td>
        <td>
          <p>{product.price.toFixed(2)}$</p>
        </td>
        <td >
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <Button className="h-8 w-8 bg-gray-200 text-black hover:bg-gray-300">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12L18 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </Button>
            <div className="text-center">{product.quantity}</div>
            <Button className="h-8 w-8 text-sm bg-gray-200 text-black hover:bg-gray-300">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>            </Button>
          </div>
        </td>
        <td className="">
          {(product.price * product.quantity).toFixed(2)}$
        </td>
      </tr>
    ))}
  </tbody>
</table>


          {/* Coupon and Update Buttons */}
          <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-3">
            <Input
              type="text"
              placeholder="Coupon code"
              className="max-w-sm px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
            <div className="w-full md:max-w-xs flex flex-col md:flex-row items-center gap-4">
              <Button className="w-full max-w-sm text-white">Use Coupon</Button>
              <Button variant={"secondary"} className="w-full max-w-sm">Update Cart</Button>
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
              <span className="font-semibold">11$</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span className="font-semibold text-lg">2$</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total Cost</span>
              <span>13$</span>
            </div>
            <Button className="w-full text-white py-2 mt-4">Make Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
