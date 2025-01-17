import React from 'react';
import { Button } from '../../components/ui/button';
import ThemeToggle from '../../components/theme/themeButton/mode-toggle';
import Menu from './menu/menu';
import LanguageChanger from './language/language';
import { Icons } from './icon.data';
import { 
  headerClass, 
  containerClass, 
  logoClass, 
  rightSectionClass, 
  languageChangerClass, 
  loginButtonClass 
} from './header.styles';

const Header: React.FC = () => {
  return (
    <header className={headerClass()}>
      <div className={containerClass()}>
        <Menu />

        {/* Left Section: Logo */}
        <div className='flex gap-4 items-center'>
          <h1 className={logoClass()}>Gymgear</h1>
          <svg className='hidden sm:w-10 max-h-10 sm:flex' fill="white" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M957.442 547.84h56.32c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48h-56.32c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zm-630.79 0h389.13c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48h-389.13c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zm-295.932 0h56.32c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H30.72c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48z"></path><path d="M788.48 788.48c-39.471 0-71.68-32.209-71.68-71.68V337.92c0-39.471 32.209-71.68 71.68-71.68s71.68 32.209 71.68 71.68V716.8c0 39.471-32.209 71.68-71.68 71.68zm0-40.96c16.849 0 30.72-13.871 30.72-30.72V337.92c0-16.849-13.871-30.72-30.72-30.72s-30.72 13.871-30.72 30.72V716.8c0 16.849 13.871 30.72 30.72 30.72z"></path><path d="M890.88 650.24c-39.471 0-71.68-32.209-71.68-71.68v-102.4c0-39.471 32.209-71.68 71.68-71.68s71.68 32.209 71.68 71.68v102.4c0 39.471-32.209 71.68-71.68 71.68zm0-40.96c16.849 0 30.72-13.871 30.72-30.72v-102.4c0-16.849-13.871-30.72-30.72-30.72s-30.72 13.871-30.72 30.72v102.4c0 16.849 13.871 30.72 30.72 30.72zM256 747.52c16.849 0 30.72-13.871 30.72-30.72V337.92c0-16.849-13.871-30.72-30.72-30.72s-30.72 13.871-30.72 30.72V716.8c0 16.849 13.871 30.72 30.72 30.72zm0 40.96c-39.471 0-71.68-32.209-71.68-71.68V337.92c0-39.471 32.209-71.68 71.68-71.68s71.68 32.209 71.68 71.68V716.8c0 39.471-32.209 71.68-71.68 71.68z"></path><path d="M153.6 609.28c16.849 0 30.72-13.871 30.72-30.72v-102.4c0-16.849-13.871-30.72-30.72-30.72s-30.72 13.871-30.72 30.72v102.4c0 16.849 13.871 30.72 30.72 30.72zm0 40.96c-39.471 0-71.68-32.209-71.68-71.68v-102.4c0-39.471 32.209-71.68 71.68-71.68s71.68 32.209 71.68 71.68v102.4c0 39.471-32.209 71.68-71.68 71.68z"></path></g></svg>
        </div>

        {/* Right Section: Language, Login, Cart */}
        <div className={rightSectionClass()}>
          <div className={languageChangerClass()}>
            <LanguageChanger />
          </div>
          <Button className={loginButtonClass()}>{Icons.man} Log in</Button>
          <Button>{Icons.cart}</Button>
          <div className='hidden md:flex'>
          <ThemeToggle />
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
