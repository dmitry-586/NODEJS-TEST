import Link from "next/link";
import { menu } from "./menu.data";
import styles from "./header.module.scss";

export default function BurgerMenu() {
  return (
    <div className={styles.burger_menu}>
      {menu.map((item) => (
        <Link href={item.link} key={item.link}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
