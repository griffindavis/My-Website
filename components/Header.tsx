import styles from "./styles/Header.module.css";

const navItems = [
  { href: "#core-work", label: "Core Work" },
  { href: "#how-i-work", label: "How I Work" },
  { href: "#experiments", label: "Experiments" },
  { href: "#contact", label: "Contact" }
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.name} aria-label="Go to top">
          Griffin Davis
        </a>
        <nav aria-label="Primary">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
