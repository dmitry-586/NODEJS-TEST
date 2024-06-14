'use client'

import styles from "./header.module.scss";
import Link from "next/link";
import { menu } from "./menu.data";
import cn from "clsx";
import { usePathname } from "next/navigation";

export default function HeaderPage() {
  const pathname = usePathname()
  return (
    <>
      <header className="bg-black text-white px-4 py-2">
        <nav className='flex gap-3 justify-center'>
          {menu.map((item) => (
            <Link
              href={item.link}
              key={item.link}
              className={cn(
                "py-1 px-2 rounded-md hover:cursor-pointer hover:bg-gray",
                pathname === item.link ? 'bg-gray' : 'bg-transparent'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
