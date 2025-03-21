import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Badge } from "./ui/badge";
import { useCart } from "../context/CartContext";
import { useAuth } from "../hooks/use-auth";
import {
  Search,
  ShoppingCart,
  Menu,
  User,
  LogOut,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "./theme-provider";

export function Header() {
  const location = useLocation();
  const pathname = location.pathname;
  const { itemCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, setTheme } = useTheme();

  console.log(user);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <a
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Platzi Store</span>
              </a>
              <a
                href="/"
                className={`${pathname === "/" ? "text-primary" : ""}`}
              >
                Home
              </a>
              <a
                href="/products"
                className={`${pathname === "/products" ? "text-primary" : ""}`}
              >
                Products
              </a>
              <a
                href="/categories"
                className={`${
                  pathname === "/categories" ? "text-primary" : ""
                }`}
              >
                Categories
              </a>
              <a
                href="/about"
                className={`${pathname === "/about" ? "text-primary" : ""}`}
              >
                About
              </a>
              <a
                href="/contact"
                className={`${pathname === "/contact" ? "text-primary" : ""}`}
              >
                Contact
              </a>
            </nav>
          </SheetContent>
        </Sheet>

        <a href="/" className="mr-6 flex items-center space-x-2">
          <ShoppingCart className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">Platzi Store</span>
        </a>

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={navigationMenuTriggerStyle()}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <a
                        href="/products"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          All Products
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Browse our complete collection of high-quality
                          products.
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/categories/1"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Electronics
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Latest gadgets and electronic devices.
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/categories/2"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Furniture
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Stylish and comfortable furniture for your home.
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/categories/3"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Shoes
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Trendy footwear for all occasions.
                        </p>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="/categories"
                >
                  Categories
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="/about"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <form onSubmit={handleSearch} className="hidden md:flex relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-[200px] lg:w-[300px] pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          {isAuthenticated ? (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <User className="h-5 w-5" />
                    {/* <span className="ml-2 hidden md:inline-block">{user?.split("@")[0]}</span> */}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <li>
                        <a
                          href="/profile"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            My Profile
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            View and edit your profile information.
                          </p>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/orders"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            My Orders
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Track and manage your orders.
                          </p>
                        </a>
                      </li>
                      <li>
                        <button
                          onClick={logout}
                          className="w-full flex items-center space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          <div className="text-sm font-medium leading-none">
                            Logout
                          </div>
                        </button>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ) : (
            <Button variant="ghost" size="sm" asChild>
              <a href="/auth/login">
                <User className="h-5 w-5 mr-2" />
                <span className="hidden md:inline-block">Login</span>
              </a>
            </Button>
          )}

          <Button variant="ghost" size="icon" asChild className="relative">
            <a href="/cart">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {itemCount}
                </Badge>
              )}
              <span className="sr-only">Cart</span>
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mr-2"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
