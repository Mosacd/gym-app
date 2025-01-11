import React from 'react';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import  ThemeToggle from './mode-toggle';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const Navbar: React.FC = () => {
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Georgian' },
  ];
  return (
    <header className="bg-black text-white py-5 sitcky top-0 z-50 max-h-20">
      <div className="lg:max-w-[1024px] xl:max-w-[1280px] mx-auto flex items-center gap-8 justify-between px-3 md:px-6">


        <div className='flex md:hidden'>
        <Sheet>
      <SheetTrigger className="p-2">
        <h1 className="font-bold text-base sm:text-lg">Menu</h1>
      </SheetTrigger>
      <SheetContent side="left" className="w-full opacity-90 dark:text-white">
        <SheetHeader className="mt-8">
          <SheetTitle className="text-center text-3xl border-b-2 border-black">Menu</SheetTitle>
          <nav className="mt-8">
                   
          <Accordion type="single" collapsible className="w-full">

      <AccordionItem value="item-1">
        <AccordionTrigger className='text-xl'>Language</AccordionTrigger>
        <AccordionContent className='text-lg'>
        <ul className='cursor-pointer'>
              <li  className='hover:text-gray-500  transition-colors'>
               English
              </li>
              <li className='hover:text-gray-500  transition-colors'>
               Georgian
              </li>
            </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className='text-xl'>Theme</AccordionTrigger>
        <AccordionContent className='text-lg'>
        <ul className='cursor-pointer'>
              <li  className='hover:text-gray-500  transition-colors'>
               Dark
              </li>
              <li className='hover:text-gray-500  transition-colors'>
               Light
              </li>
            </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className='text-xl'>Navigation</AccordionTrigger>
        <AccordionContent className='text-lg'>
        <ul className='cursor-pointer'>
              <li>
                <a href="#" className="block py-2 text-lg hover:text-gray-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 text-lg hover:text-gray-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 text-lg hover:text-gray-500 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 text-lg hover:text-gray-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className='text-xl'>Account</AccordionTrigger>
        <AccordionContent className='text-lg'>
        <ul className='cursor-pointer'>
              <li  className='hover:text-gray-500 transition-colors'>
              Sign In
              </li>
              <li className='hover:text-gray-500 transition-colors'>
              Sign Up
              </li>
            </ul>
        </AccordionContent>
      </AccordionItem>

    </Accordion>
         
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
        </div>
        
        {/* Left Section: Logo */}
        <div>
          <h1 className="text-3xl md:text-4xl cursor-pointer font-bold italic hover:text-purple-900">Gymgear</h1>
        </div>
    
      
        {/* Right Section: Language, Login, Cart */}
        <div className="flex items-center gap-5">
          <div className='hidden md:flex'>

          <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='bg-black w-12 pl-3 pr-3 h-9 hover:bg-neutral-900 dark:border-gray-800' variant="outline" size="icon">
        <svg className='w-[20px] h-[20px] fill-white hover:fill-black' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4102 6.64V6.59C18.7056 4.66623 17.4271 3.00529 15.7477 1.83187C14.0683 0.658447 12.0689 0.0291748 10.0202 0.0291748C7.97145 0.0291748 5.97213 0.658447 4.29271 1.83187C2.61328 3.00529 1.3348 4.66623 0.630195 6.59C0.630195 6.59 0.630195 6.59 0.630195 6.64C-0.15668 8.8109 -0.15668 11.1891 0.630195 13.36V13.41C1.3348 15.3338 2.61328 16.9947 4.29271 18.1681C5.97213 19.3416 7.97145 19.9708 10.0202 19.9708C12.0689 19.9708 14.0683 19.3416 15.7477 18.1681C17.4271 16.9947 18.7056 15.3338 19.4102 13.41C19.4102 13.41 19.4102 13.41 19.4102 13.36C20.1971 11.1891 20.1971 8.8109 19.4102 6.64ZM2.2602 12C1.9125 10.6893 1.9125 9.31067 2.2602 8H4.1202C3.95994 9.32852 3.95994 10.6715 4.1202 12H2.2602ZM3.0802 14H4.4802C4.71366 14.8923 5.04921 15.7546 5.4802 16.57C4.49949 15.9019 3.67969 15.0241 3.0802 14ZM4.4802 6H3.0802C3.67107 4.97909 4.48039 4.10147 5.4502 3.43C5.02955 4.24672 4.70409 5.10903 4.4802 6ZM9.0002 17.7C7.77196 16.7987 6.90934 15.4852 6.5702 14H9.0002V17.7ZM9.0002 12H6.1402C5.95411 10.6732 5.95411 9.32684 6.1402 8H9.0002V12ZM9.0002 6H6.5702C6.90934 4.51477 7.77196 3.20132 9.0002 2.3V6ZM16.9202 6H15.5202C15.2867 5.10775 14.9512 4.24539 14.5202 3.43C15.5009 4.09807 16.3207 4.97594 16.9202 6ZM11.0002 2.3C12.2284 3.20132 13.091 4.51477 13.4302 6H11.0002V2.3ZM11.0002 17.7V14H13.4302C13.091 15.4852 12.2284 16.7987 11.0002 17.7ZM13.8602 12H11.0002V8H13.8602C14.0463 9.32684 14.0463 10.6732 13.8602 12ZM14.5502 16.57C14.9812 15.7546 15.3167 14.8923 15.5502 14H16.9502C16.3507 15.0241 15.5309 15.9019 14.5502 16.57ZM17.7402 12H15.8802C15.9619 11.3365 16.002 10.6685 16.0002 10C16.002 9.33148 15.9619 8.66351 15.8802 8H17.7402C18.0879 9.31067 18.0879 10.6893 17.7402 12Z"/>
</svg>          
{/* Select language */}
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
          {/* <Select>
            <SelectTrigger className="w-fit gap-2 border-white">
              <SelectValue placeholder={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4102 6.64V6.59C18.7056 4.66623 17.4271 3.00529 15.7477 1.83187C14.0683 0.658447 12.0689 0.0291748 10.0202 0.0291748C7.97145 0.0291748 5.97213 0.658447 4.29271 1.83187C2.61328 3.00529 1.3348 4.66623 0.630195 6.59C0.630195 6.59 0.630195 6.59 0.630195 6.64C-0.15668 8.8109 -0.15668 11.1891 0.630195 13.36V13.41C1.3348 15.3338 2.61328 16.9947 4.29271 18.1681C5.97213 19.3416 7.97145 19.9708 10.0202 19.9708C12.0689 19.9708 14.0683 19.3416 15.7477 18.1681C17.4271 16.9947 18.7056 15.3338 19.4102 13.41C19.4102 13.41 19.4102 13.41 19.4102 13.36C20.1971 11.1891 20.1971 8.8109 19.4102 6.64ZM2.2602 12C1.9125 10.6893 1.9125 9.31067 2.2602 8H4.1202C3.95994 9.32852 3.95994 10.6715 4.1202 12H2.2602ZM3.0802 14H4.4802C4.71366 14.8923 5.04921 15.7546 5.4802 16.57C4.49949 15.9019 3.67969 15.0241 3.0802 14ZM4.4802 6H3.0802C3.67107 4.97909 4.48039 4.10147 5.4502 3.43C5.02955 4.24672 4.70409 5.10903 4.4802 6ZM9.0002 17.7C7.77196 16.7987 6.90934 15.4852 6.5702 14H9.0002V17.7ZM9.0002 12H6.1402C5.95411 10.6732 5.95411 9.32684 6.1402 8H9.0002V12ZM9.0002 6H6.5702C6.90934 4.51477 7.77196 3.20132 9.0002 2.3V6ZM16.9202 6H15.5202C15.2867 5.10775 14.9512 4.24539 14.5202 3.43C15.5009 4.09807 16.3207 4.97594 16.9202 6ZM11.0002 2.3C12.2284 3.20132 13.091 4.51477 13.4302 6H11.0002V2.3ZM11.0002 17.7V14H13.4302C13.091 15.4852 12.2284 16.7987 11.0002 17.7ZM13.8602 12H11.0002V8H13.8602C14.0463 9.32684 14.0463 10.6732 13.8602 12ZM14.5502 16.57C14.9812 15.7546 15.3167 14.8923 15.5502 14H16.9502C16.3507 15.0241 15.5309 15.9019 14.5502 16.57ZM17.7402 12H15.8802C15.9619 11.3365 16.002 10.6685 16.0002 10C16.002 9.33148 15.9619 8.66351 15.8802 8H17.7402C18.0879 9.31067 18.0879 10.6893 17.7402 12Z" fill="white"/>
</svg>
}/>
            </SelectTrigger>
            <SelectContent className=''>
              <SelectItem className='font-bold text-sm' value="EN">EN</SelectItem>
              <SelectItem className='font-bold text-sm' value="KA">KA</SelectItem>
            </SelectContent>
          </Select> */}
          </div>
          <Button className='hidden md:flex'><svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 4C5.5 2.93913 5.92143 1.92172 6.67157 1.17157C7.42172 0.421427 8.43913 0 9.5 0C10.5609 0 11.5783 0.421427 12.3284 1.17157C13.0786 1.92172 13.5 2.93913 13.5 4C13.5 5.06087 13.0786 6.07828 12.3284 6.82843C11.5783 7.57857 10.5609 8 9.5 8C8.43913 8 7.42172 7.57857 6.67157 6.82843C5.92143 6.07828 5.5 5.06087 5.5 4ZM5.5 10C4.17392 10 2.90215 10.5268 1.96447 11.4645C1.02678 12.4021 0.5 13.6739 0.5 15C0.5 15.7956 0.816071 16.5587 1.37868 17.1213C1.94129 17.6839 2.70435 18 3.5 18H15.5C16.2956 18 17.0587 17.6839 17.6213 17.1213C18.1839 16.5587 18.5 15.7956 18.5 15C18.5 13.6739 17.9732 12.4021 17.0355 11.4645C16.0979 10.5268 14.8261 10 13.5 10H5.5Z" fill="white"/>
</svg>
Log in</Button>
          
          <Button ><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0298 2.41667C10.4965 1.43333 11.5031 0.75 12.6665 0.75H19.3331C20.4965 0.75 21.5015 1.43333 21.9698 2.41667C23.1081 2.42667 23.9965 2.47833 24.7898 2.78833C25.7369 3.15879 26.5605 3.78835 27.1665 4.605C27.7781 5.42833 28.0665 6.48333 28.4598 7.935L29.6965 12.4717L30.1631 13.8733L30.2031 13.9233C31.7048 15.8467 30.9898 18.7067 29.5598 24.425C28.6498 28.0633 28.1965 29.8817 26.8398 30.9417C25.4831 32 23.6081 32 19.8581 32H12.1415C8.39148 32 6.51648 32 5.15981 30.9417C3.80314 29.8817 3.34814 28.0633 2.43981 24.425C1.00981 18.7067 0.29481 15.8467 1.79648 13.9233L1.83648 13.8733L2.30314 12.4717L3.53981 7.935C3.93481 6.48333 4.22314 5.42667 4.83314 4.60333C5.43936 3.7873 6.26297 3.15833 7.20981 2.78833C8.00314 2.47833 8.88981 2.425 10.0298 2.41667ZM10.0331 4.92167C8.92981 4.93333 8.48648 4.975 8.11981 5.11833C7.60975 5.3178 7.16616 5.65685 6.83981 6.09667C6.54648 6.49167 6.37314 7.04333 5.88981 8.82167L4.93981 12.3033C6.63981 12 8.96314 12 12.1398 12H19.8581C23.0365 12 25.3581 12 27.0581 12.3L26.1098 8.81833C25.6265 7.04 25.4531 6.48833 25.1598 6.09333C24.8335 5.65351 24.3899 5.31447 23.8798 5.115C23.5131 4.97167 23.0698 4.93 21.9665 4.91833C21.7298 5.41641 21.3568 5.8372 20.8907 6.1319C20.4247 6.42659 19.8846 6.58312 19.3331 6.58333H12.6665C12.1152 6.58327 11.5753 6.42699 11.1092 6.1326C10.6431 5.83821 10.27 5.41943 10.0331 4.92167Z" fill="white"/>
          </svg></Button>
          <ThemeToggle/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
