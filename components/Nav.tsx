"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pcNavLinks } from "@/lib/data";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {pcNavLinks.map((link, i) => {
        return (
          <Link 
            key={i}
            className={
              `${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`
            } 
            href={link.path} 
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
};

export default Nav;