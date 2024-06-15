"use client";

import styles from "./header.module.scss";
import Link from "next/link";
import { menu } from "./menu.data";
import cn from "clsx";
import { usePathname } from "next/navigation";
import BurgerMenu from "./burger-menu";
import { useState } from "react";

export default function HeaderPage() {
  const pathname = usePathname();
  const [menuActive, setMenuActive] = useState(false);
  const buttonTrue: string = [styles.burger_btn, styles.active].join(" ");
  const buttonFalse: string = [styles.burger_btn].join(" ");
  const burgerTrue: string = [styles.burger_menu, styles.active].join(" ");
  const burgerFalse: string = [styles.burger_menu].join(" ");

  return (
    <>
      <header className={styles.header}>
        <nav className="flex gap-3 justify-center items-center md:gap-2 md:text-sm sm:hidden">
          {menu.map((item) => (
            <Link
              href={item.link}
              key={item.link}
              className={cn(
                "py-1 px-2 rounded-md hover:cursor-pointer hover:bg-gray",
                pathname === item.link ? "bg-gray" : "bg-transparent"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <button
          className={menuActive ? buttonTrue : buttonFalse}
          onClick={() => {
            setMenuActive(!menuActive);
          }}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={menuActive ? burgerTrue : burgerFalse}>
          {menu.map((item) => (
            <Link href={item.link} key={item.link}>
              {item.name}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
}
