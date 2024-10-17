import styles from "./MainNavigation.module.css";
import NavLink from "./NavLink";

export default function MainNavigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink href="/meals">Home</NavLink>
        </li>
        <li>
          <NavLink href="/community">Foodies Community</NavLink>
        </li>
      </ul>
    </nav>
  );
}
