import { useSearchParams } from "react-router-dom";
import FeaturesSection from "@/pageComponents/forHome/featuresSection/featuresSection";
import Filters from "@/pageComponents/forProducts/filter/filter";
import ProductsHeroBanner from "@/pageComponents/forProducts/heroBanner/hero";
import SearchBar from "@/pageComponents/forProducts/search/search";
import SortMenu from "@/pageComponents/forProducts/SortMenu/SortMenu";
import VirtualizedProductGrid from "@/pageComponents/forProducts/products/products";
import FiltersMobile from "@/pageComponents/forProducts/filter/filretMobile";

const Products = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("searchedtext") || "";

  return (
    <>
      <ProductsHeroBanner />

      <div>
        <div className="flex p-6 max-w-full gap-4 justify-between mt-10">
          <aside className="hidden sm:block border-2 bg-gray-100 p-4 rounded-md shadow-sm min-w-36 max-w-52 flex-auto h-fit dark:bg-transparent dark:text-white dark:border-neutral-800">
            <Filters />
          </aside>
          <main className="flex flex-col flex-auto max-w-screen-xl">
            <div className="flex items-center mb-6 justify-evenly min-w-fit gap-4">
              <SearchBar />
              <SortMenu />
              <FiltersMobile />
            </div>
            <VirtualizedProductGrid searchQuery={searchQuery} />
          </main>
        </div>
      </div>

      <FeaturesSection />
    </>
  );
};

export default Products;
