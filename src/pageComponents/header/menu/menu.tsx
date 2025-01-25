import { Button } from '@/componentsShadcn/ui/button';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../../../componentsShadcn/ui/sheet';
import LanguageChanger from '../language/language';
import ThemeToggle from '@/componentsShadcn/theme/themeButton/mode-toggle';
import { Link } from 'react-router-dom';
import { useAuthContext } from '@/context/auth/hooks/useAuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/componentsShadcn/ui/avatar';
const Menu = () =>{

 const {user,profileData} = useAuthContext();

 return (
  <div className="flex md:hidden">
    <Sheet>
      <SheetTrigger className="p-2">
        <h1 className="font-bold text-base sm:text-lg">Menu</h1>
      </SheetTrigger>
      <SheetContent side="left" className="w-full dark:text-white">
        <SheetHeader className="mt-8">
          <SheetTitle className="text-center text-3xl border-b-2 border-black dark:border-white">Menu</SheetTitle>
          {/* Links that automatically close the Sheet */}
          <SheetClose asChild>
            <Link to="/dashboard/products">
              <Button className="w-full">Shop Now</Button>
            </Link>
          </SheetClose>
          <div className={user ? "flex items-center gap-2 justify-center" : "flex flex-col items-center gap-2"}>
            {user ? (
              <SheetClose asChild>
                <Link className="flex" to="/dashboard/profilePage">
                  <Avatar className="h-10 w-10 border-4 border-purple-900">
                    <AvatarImage src={profileData?.avatar_url} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
              </SheetClose>
            ) : (
              <SheetClose asChild>
                <Link className="w-full" to="/auth/signin">
                  <Button className="w-full" variant={"secondary"}>
                    <svg
                      className="fill-purple-900"
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.5 4C5.5 2.93913 5.92143 1.92172 6.67157 1.17157C7.42172 0.421427 8.43913 0 9.5 0C10.5609 0 11.5783 0.421427 12.3284 1.17157C13.0786 1.92172 13.5 2.93913 13.5 4C13.5 5.06087 13.0786 6.07828 12.3284 6.82843C11.5783 7.57857 10.5609 8 9.5 8C8.43913 8 7.42172 7.57857 6.67157 6.82843C5.92143 6.07828 5.5 5.06087 5.5 4ZM5.5 10C4.17392 10 2.90215 10.5268 1.96447 11.4645C1.02678 12.4021 0.5 13.6739 0.5 15C0.5 15.7956 0.816071 16.5587 1.37868 17.1213C1.94129 17.6839 2.70435 18 3.5 18H15.5C16.2956 18 17.0587 17.6839 17.6213 17.1213C18.1839 16.5587 18.5 15.7956 18.5 15C18.5 13.6739 17.9732 12.4021 17.0355 11.4645C16.0979 10.5268 14.8261 10 13.5 10H5.5Z"
                        fill=""
                      />
                    </svg>{" "}
                    Log in
                  </Button>
                </Link>
              </SheetClose>
            )}
            <div className="flex justify-center gap-2">
              <LanguageChanger />
              <ThemeToggle />
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </div>
);
};


export default Menu;