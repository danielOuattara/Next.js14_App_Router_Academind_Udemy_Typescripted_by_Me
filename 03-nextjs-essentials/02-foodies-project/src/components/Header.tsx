import Image from "next/image";

export default function Header() {
  return (
    <>
      <Image
        src="/icon.png"
        width={400}
        height={400}
        alt="A server surrounded by magic sparkles."
      />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </>
  );
}
