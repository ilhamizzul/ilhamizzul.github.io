
import * as React from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const isMobile = useIsMobile();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-4 border-b border-slate-200 dark:border-slate-800">
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Ilham Izzul
        </a>

        {!isMobile ? (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#about">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#skills">
                  Skills
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#certifications">
                  Certifications
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#projects">
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#experience">
                  Experience
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#contact">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ) : null}

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
          {isMobile && (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#about" className="block p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">
                            About
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#skills" className="block p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">
                            Skills
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#certifications" className="block p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">
                            Certifications
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#projects" className="block p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">
                            Projects
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#experience" className="block p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">
                            Experience
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#contact" className="block p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">
                            Contact
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
