import Image from "next/image";
import Link from "next/link";

import logoImage from "./../assets/logo.png";
export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <Image
          src={logoImage.src}
          width={100}
          height={100}
          alt="A plate with food in it."
        />
        Next Level Food
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </header>
  );
}
