import { Button } from "@/components/ui/button";
import productImage from "@/assets/Hoodie.webp";

const IdOrder = () =>{

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
        <div className="flex flex-col items-center p-20 min-h-screen">
            <h1 className="text-3xl mb-5 font-semibold dark:text-white">Order 1001</h1>
        <table className="w-full max-w-screen-lg border-separate border-4 rounded-md text-center dark:border-neutral-800 dark:text-gray-400">
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
</div>
    );
}


export default IdOrder;