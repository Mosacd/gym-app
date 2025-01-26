import { Input } from "@/componentsShadcn/ui/input";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get("searchedtext") || "");

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchText) {
        setSearchParams({ searchedtext: searchText });
      } else {
        setSearchParams({});
      }
    }, 1000); // Debounce the URL update

    return () => clearTimeout(handler); // Cleanup the timeout on unmount or change
  }, [searchText, setSearchParams]);

  return (
    <Input
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="border-2 flex h-9 sm:min-w-32 max-w-xl rounded-md 
        bg-transparent px-3 py-1 text-base shadow-sm transition-colors 
        disabled:cursor-not-allowed disabled:opacity-50 md:text-base
        placeholder:text-black dark:placeholder:text-white dark:text-white
        placeholder:truncate"
      id="title"
      placeholder="Search the product..."
    />
  );
};

export default SearchBar;
