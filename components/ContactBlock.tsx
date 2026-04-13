import styles from "./styles/ContactBlock.module.css";

const links = [
  {
    label: "Email",
    value: "griffin.t.davis@icloud.com",
    href: "mailto:griffin.t.davis@icloud.com"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/griffin-davis",
    href: "https://www.linkedin.com/in/griffin-davis/"
  },
  {
    label: "GitHub",
    value: "github.com/griffindavis",
    href: "https://github.com/griffindavis" 
  },
  {
    label: "Resume",
    value: "/resume.pdf",
    href: "/resume.pdf"
  }
];

export function ContactBlock() {
  return (
    <div className={styles.block}>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.label} className={styles.row}>
            <span className={styles.label}>{link.label}</span>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.value}
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.closing}>
        I'm interested in thoughtful teams building useful software.
      </p>
    </div>
  );
}
