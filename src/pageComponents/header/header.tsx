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
        <div>
          <h1 className={logoClass()}>Gymgear</h1>
        </div>

        {/* Right Section: Language, Login, Cart */}
        <div className={rightSectionClass()}>
          <div className={languageChangerClass()}>
            <LanguageChanger />
          </div>
          <Button className={loginButtonClass()}>{Icons.man} Log in</Button>
          <Button>{Icons.cart}</Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
