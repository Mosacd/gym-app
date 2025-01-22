import { Input } from "@/components/ui/input";


const SearchBar = () =>{
    return(
   
     

        <Input
        className="border-2 flex h-9 sm:min-w-32 max-w-xl rounded-md 
          bg-transparent px-3 py-1 text-base shadow-sm transition-colors 
           disabled:cursor-not-allowed disabled:opacity-50 md:text-base
           placeholder:text-black dark:placeholder:text-white dark:text-white
           placeholder: truncate
           "
        id="title"
        placeholder="Search the product..."
        required 
      />

      
    )
}


export default SearchBar;

               
           