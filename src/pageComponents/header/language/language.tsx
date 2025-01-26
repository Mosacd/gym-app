import { Button } from "@/componentsShadcn/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/componentsShadcn/ui/dropdown-menu";
import { Icons } from "../icon.data";

const LanguageChanger = () =>{
    const languages = [
        { code: 'en', label: 'English' },
        { code: 'es', label: 'Georgian' },
      ];
    return(

      
<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='text-white hover:text-black bg-black w-fit md:w-12 pl-3 pr-3 h-9 hover:bg-white *:hover:fill-black  dark:border-gray-800' variant="outline" size="icon">
        {Icons.globe}<span className="md:hidden">select language</span>       
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code} className='cursor-pointer'
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>

//      <Select>
//             <SelectTrigger className="w-fit gap-2 border-white">
//               <SelectValue placeholder={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M19.4102 6.64V6.59C18.7056 4.66623 17.4271 3.00529 15.7477 1.83187C14.0683 0.658447 12.0689 0.0291748 10.0202 0.0291748C7.97145 0.0291748 5.97213 0.658447 4.29271 1.83187C2.61328 3.00529 1.3348 4.66623 0.630195 6.59C0.630195 6.59 0.630195 6.59 0.630195 6.64C-0.15668 8.8109 -0.15668 11.1891 0.630195 13.36V13.41C1.3348 15.3338 2.61328 16.9947 4.29271 18.1681C5.97213 19.3416 7.97145 19.9708 10.0202 19.9708C12.0689 19.9708 14.0683 19.3416 15.7477 18.1681C17.4271 16.9947 18.7056 15.3338 19.4102 13.41C19.4102 13.41 19.4102 13.41 19.4102 13.36C20.1971 11.1891 20.1971 8.8109 19.4102 6.64ZM2.2602 12C1.9125 10.6893 1.9125 9.31067 2.2602 8H4.1202C3.95994 9.32852 3.95994 10.6715 4.1202 12H2.2602ZM3.0802 14H4.4802C4.71366 14.8923 5.04921 15.7546 5.4802 16.57C4.49949 15.9019 3.67969 15.0241 3.0802 14ZM4.4802 6H3.0802C3.67107 4.97909 4.48039 4.10147 5.4502 3.43C5.02955 4.24672 4.70409 5.10903 4.4802 6ZM9.0002 17.7C7.77196 16.7987 6.90934 15.4852 6.5702 14H9.0002V17.7ZM9.0002 12H6.1402C5.95411 10.6732 5.95411 9.32684 6.1402 8H9.0002V12ZM9.0002 6H6.5702C6.90934 4.51477 7.77196 3.20132 9.0002 2.3V6ZM16.9202 6H15.5202C15.2867 5.10775 14.9512 4.24539 14.5202 3.43C15.5009 4.09807 16.3207 4.97594 16.9202 6ZM11.0002 2.3C12.2284 3.20132 13.091 4.51477 13.4302 6H11.0002V2.3ZM11.0002 17.7V14H13.4302C13.091 15.4852 12.2284 16.7987 11.0002 17.7ZM13.8602 12H11.0002V8H13.8602C14.0463 9.32684 14.0463 10.6732 13.8602 12ZM14.5502 16.57C14.9812 15.7546 15.3167 14.8923 15.5502 14H16.9502C16.3507 15.0241 15.5309 15.9019 14.5502 16.57ZM17.7402 12H15.8802C15.9619 11.3365 16.002 10.6685 16.0002 10C16.002 9.33148 15.9619 8.66351 15.8802 8H17.7402C18.0879 9.31067 18.0879 10.6893 17.7402 12Z" fill="white"/>
// </svg>
// }/>
//             </SelectTrigger>
//             <SelectContent className=''>
//               <SelectItem className='font-bold text-sm' value="EN">EN</SelectItem>
//               <SelectItem className='font-bold text-sm' value="KA">KA</SelectItem>
//             </SelectContent>
//           </Select>
    
    )
}


export default LanguageChanger;