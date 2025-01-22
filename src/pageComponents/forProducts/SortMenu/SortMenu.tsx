import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const SortMenu = () =>{

    return(
        <Select>
        <SelectTrigger className="w-40 border-2 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-900 transition">
          <SelectValue placeholder="Sort By"/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="asc">Accending</SelectItem>
            <SelectItem value="desc">Descending</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="old">Old</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
}


export default SortMenu;