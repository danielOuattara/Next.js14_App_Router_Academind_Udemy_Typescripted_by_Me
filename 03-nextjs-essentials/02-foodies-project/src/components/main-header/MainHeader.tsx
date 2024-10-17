import Image from "next/image";
import Link from "next/link";
import logoImage from "./../../assets/logo.png";
import styles from "./MainHeader.module.css";
import MainHeaderBackground from "./MainHeaderBackground";
import MainNavigation from "./MainNavigation";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImage} alt="A plate with food in it." priority />
          Next Level Food
        </Link>
        <MainNavigation />
      </header>
    </>
  );
}
