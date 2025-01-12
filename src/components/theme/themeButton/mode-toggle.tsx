import { Moon, Sun } from "lucide-react";
import { Button } from '../../ui/button';
import { useTheme } from '../theme-provider';
import { iconClass, iconClassDark, themeToggleButtonClass } from "./mode-toggle.styles";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const isDark = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button
      onClick={toggleTheme}
      className={themeToggleButtonClass()}
      aria-label="Toggle theme"
    >
      <Sun className={iconClass({ theme: isDark ? 'dark' : 'light' })} />
      <Moon className={iconClassDark({ theme: isDark ? 'dark' : 'light' })} />
    </Button>
  );
};

export default ThemeToggle;