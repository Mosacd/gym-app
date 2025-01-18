import React, { useRef, useEffect, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

const VirtualizedProductGrid: React.FC<{ products: Product[] }> = ({ products }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [columns, setColumns] = useState(4);
  
  // Constants for sizing
  const ROW_HEIGHT = 310;

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 640) setColumns(1);        // sm
      else if (width < 768) setColumns(1);   // md
      else if (width < 1024) setColumns(2);  // lg
      else setColumns(3);                    // xl and above
    };
    
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(products.length / columns),
    getScrollElement: () => containerRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 5,
  });

  return (
    <div className="h-[1000px]  border pt-5 rounded-lg block-shadow dark:border-neutral-800">
    <div
      ref={containerRef}
      className="h-[900px] overflow-auto scrollbar-hide"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
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
                if (productIndex >= products.length) return null;
                
                const product = products[productIndex];
                return (
                  <div
                    key={product.id}
                    className="flex-1 mb-4 max-w-80 cursor-pointer"
                  >
                    <div className="h-full border-2 min-h-[300px] bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-gray-100 dark:hover:bg-neutral-900 transiton-shadow duration-200 flex flex-col dark:border-neutral-800 dark:bg-neutral-950 dark:text-white">
                      <div className="w-full h-52 p-4 flex items-center justify-center">
                        <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-50">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="px-4 pb-4 flex-1 flex flex-col justify-between">
                        <h3 className="text-base font-medium flex-wrap truncate mb:max-w-52">
                          {product.name}
                        </h3>
                        <div className='flex justify-between'>
                        <p className="mt-1 text-base text-gray-600 dark:text-gray-400">
                          ${product.price}
                        </p>
                
                        <Button>Add To Cart</Button>
                        </div>
                      </div>
                    </div>
                  </div>
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