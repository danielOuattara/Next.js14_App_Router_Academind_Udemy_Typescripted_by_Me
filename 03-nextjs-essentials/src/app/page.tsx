import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Image
        src="/icon.png"
        width={400}
        height={400}
        alt="A server surrounded by magic sparkles."
      />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
