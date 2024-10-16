import Image from "next/image";
import Link from "next/link";
import logoImage from "./../../assets/logo.png";
import styles from "./MainHeader.module.css";
import MainHeaderBackground from "./MainHeaderBackground";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImage} alt="A plate with food in it." priority />
          Next Level Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
