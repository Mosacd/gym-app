import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../../../components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion';

const Menu = () =>{

    return(
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
    )
}

export default Menu;