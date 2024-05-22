import Link from "next/link";
import logoImg from "../../assets/logo.png";
import styles from "./mainHeader.module.css";
import Image from "next/image";
import MainHeaderBackground from "../MainHeaderBackground/MainHeaderBackground";
import { usePathname } from "next/navigation";
import Navlinks from "./Navlinks";
const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logoImg} alt="logo-image" priority />
          Next Level Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Navlinks href="/meals">Browse Meals</Navlinks>
            </li>
            <li>
              <Navlinks href="/community">Foodies Community</Navlinks>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
