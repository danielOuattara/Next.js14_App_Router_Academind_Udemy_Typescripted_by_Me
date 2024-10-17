"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";

type TypeProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: TypeProps) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={pathname.startsWith(href) ? styles.active : ""}
    >
      {children}
    </Link>
  );
}
