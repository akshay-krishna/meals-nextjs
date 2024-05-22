"use client";
import Link from "next/link";
import styles from "./navlink.module.css";
import { usePathname } from "next/navigation";
const Navlinks = ({ href, children }) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={
        pathName.startsWith(href)
          ? `${styles.link} ${styles.active}`
          : `${styles.link}`
      }
    >
      {children}
    </Link>
  );
};

export default Navlinks;
