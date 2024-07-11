"use client";

import * as React from "react";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./modeToggle";
import Sidebar from "./sidebar";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tecnologias",
    href: "/tecnologias",
    description:
      "Ferramentas que uso para construir websites e aplicativos.",
  },
  {
    title: "Hardwares",
    href: "/hardwares",
    description:
      "Conheça as peças que tenho em meu pc.",
  },
  {
    title: "Periféricos",
    href: "/perifericos",
    description:
      "Veja todos meus periféricos que uso no dia a dia.",
  },
];

export default function Header() {
  return (
    <header className="w-[100vw] flex items-center justify-between md:justify-center fixed bg-[--color-white] py-2 px-8 sm:px-12 lg:px-16 border-[#999]/20 border-b">
      <h1 className="font-bold text-xl text-[--textColor]">PGB</h1>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Sobre</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col w-[400px] p-4 md:w-[200px] lg:w-[300px]">
                <ListItem href="/sobre-mim" title="Sobre mim">
                  Conheça mais sobre mim e o que eu faço.
                </ListItem>
                <ListItem href="/projetos" title="Projetos">
                  Todos os meus projetos que venho desenvolvendo.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Setups</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col w-[400px] p-4 md:w-[200px] lg:w-[300px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Startup
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-2"> 
        <ModeToggle />
        <Sidebar />
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
