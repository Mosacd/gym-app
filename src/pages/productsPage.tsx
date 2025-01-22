import FeaturesSection from "@/pageComponents/forHome/featuresSection/featuresSection";
import Filters from "@/pageComponents/forProducts/filter/filter";
import ProductsHeroBanner from "@/pageComponents/forProducts/heroBanner/hero";
import SearchBar from "@/pageComponents/forProducts/search/search";
import SortMenu from "@/pageComponents/forProducts/SortMenu/SortMenu";
import ProductsGrid from "@/pageComponents/forProducts/products/products";
import beltImage from '@/assets/Hoodie.webp'
import FiltersMobile from "@/pageComponents/forProducts/filter/filretMobile";

const sampleProducts = Array.from({ length: 1000 }, (_, i) => ({
  id: `${i + 1}`,
  name: `FuckAss Hoodie ${i + 1}`,
  price: (Math.random() * 100).toFixed(2),
  image: beltImage,
}));

const Products = () => {
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
            <ProductsGrid products={sampleProducts} />
          </main>
        </div>
      </div>

      <FeaturesSection />
    </>
  );
};

export default Products;
