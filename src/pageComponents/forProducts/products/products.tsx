import React, { useRef, useEffect, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Button } from "@/componentsShadcn/ui/button";
import { useGetProductList } from "@/reactQuery/query/products";
import { mapProductTableData } from "@/supabase/products";
import { Link } from "react-router-dom";
import { useCartContext } from "@/context/cart/hooks/useCartContext";
import { motion } from "framer-motion";

const VirtualizedProductGrid: React.FC<{ searchQuery: string }> = ({
  searchQuery,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [columns, setColumns] = useState(4);
  const { addToCart } = useCartContext();

  const handleAddToCart = (product: {
    id: number;
    name: string;
    price: string | number;
    category: string;
    created_at: string;
    description: string;
    image_url: string;
  }) => {
    addToCart({ ...product, quantity: 1 });
  };

  // Fetch products using the react-query hook
  const {
    data: productList = [],
    isLoading,
    isError,
  } = useGetProductList({
    queryOptions: { select: mapProductTableData },
  });

  // Filter the products based on the search query
  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const ROW_HEIGHT = 310;

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 640)
        setColumns(1); // sm
      else if (width < 768)
        setColumns(1); // md
      else if (width < 1024)
        setColumns(2); // lg
      else setColumns(3); // xl and above
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const rowVirtualizer = useVirtualizer({
    count: filteredProducts ? Math.ceil(filteredProducts.length / columns) : 0,
    getScrollElement: () => containerRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 5,
  });

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (isError || !productList) {
    return <div className="text-center py-10">Failed to load products.</div>;
  }

  return (
    <div className="h-[1000px] m-auto max-w-sm sm:max-w-none w-full border-4 pt-5 rounded-lg block-shadow dark:border-neutral-800">
      <div
        ref={containerRef}
        className="h-[900px] overflow-auto scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const firstIndex = virtualRow.index * columns;

            return (
              <div
                key={virtualRow.index}
                className="absolute left-0 right-0 flex gap-4 px-4 mt-5 justify-center"
                style={{
                  top: `${virtualRow.start}px`,
                  height: `${ROW_HEIGHT}px`,
                }}
              >
                {Array.from({ length: columns }).map((_, columnIndex) => {
                  const productIndex = firstIndex + columnIndex;
                  if (productIndex >= filteredProducts.length) return null;

                  const product = filteredProducts[productIndex];
                  return (
                    <Link
                      className="flex-1 mb-4 max-w-80 cursor-pointer"
                      to={`/dashboard/productDetail/${product.id}`}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        key={product.id}
                        className="flex-1 mb-4 max-w-80 cursor-pointer "
                      >
                        <div className="group h-full border-2 min-h-[300px] hover:-translate-y-2 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-gray-100 hover:border-black dark:hover:border-white dark:hover:bg-neutral-900 transiton-shadow duration-200 flex flex-col dark:border-neutral-800 dark:bg-neutral-950 dark:text-white">
                          <div className="w-full h-52 p-4 flex items-center justify-center">
                            <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-50 group-hover:scale-110 transition-transform duration-200">
                              <img
                                src={product.image_url}
                                alt={product.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>
                          <div className="px-4 pb-4 flex-1 flex flex-col justify-between">
                            <h3 className="text-base font-medium flex-wrap truncate mb:max-w-52">
                              {product.name}
                            </h3>
                            <div className="flex justify-between">
                              <p className="mt-1 text-base text-gray-600 dark:text-gray-400">
                                ${product.price}
                              </p>

                              <Button
                                onClick={(e) => {
                                  e.stopPropagation(); // Prevent event from bubbling up to the Link
                                  e.preventDefault();
                                  handleAddToCart(product);
                                }}
                              >
                                Add To Cart
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedProductGrid;
