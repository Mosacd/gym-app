import beltImage from "@/assets/10mm-lever-belt-black-black-main.webp";
import { Button } from "@/componentsShadcn/ui/button";
import { Icons } from "../header/icon.data";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/componentsShadcn/ui/sheet";
import { X } from "lucide-react";

const ShoppingCart = () => {
  const sampleProducts = Array.from({ length: 2 }, (_, i) => ({
    id: `${i + 1}`,
    name: `FuckAss Hoodie ${i + 1}`,
    price: (Math.random() * 100).toFixed(2),
    image: beltImage,
  }));

  return (
    <Sheet>
      <SheetTrigger>
        <Button>{Icons.cart}</Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-full sm:max-w-md md:max-w-md dark:text-white"
      >
        <SheetHeader className="mt-8">
          <SheetTitle className="text-center text-3xl">Cart</SheetTitle>
        </SheetHeader>

        <div className="w-full max-w-2xl m-auto py-5 items-center sm:p-5 flex flex-col gap-2">
          <div className="w-full border-y-2 py-7 flex gap-2 max-h flex-col items-center border-black dark:border-white">
            {sampleProducts.map((product) => {
              return (
                <div className="flex max-w-sm w-full flex-auto border-2 shadow-sm p-4 rounded-xl items-center gap-4 relative">
                  <Button className="bg-transparent shadow-none p-0 top-0 right-2 hover:bg-nones text-xs absolute text-black dark:text-white opacity-70 hover:opacity-100">
                    <X />
                  </Button>
                  <div className="max-w-20">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={product.image}
                      alt=""
                    />
                  </div>
                  <div className=" w-full flex flex-col items-end">
                    <div className="flex text-xs justify-between items-center w-full gap-2 font-semibold ">
                      <div>
                        <h1>{product.name}</h1>
                        <h1 className=" text-xs font-medium text-gray-700">
                          Black / XS (24-31")
                        </h1>
                      </div>
                      <h1>${product.price}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full gap-4 flex flex-col sm:flex-row items-center justify-between mt-5">
            <h1 className="text-lg font-semibold">Total Price:</h1>
            <Button className="w-full max-w-sm sm:max-w-48 ">Checkout</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
