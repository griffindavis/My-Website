import type { ReactNode } from "react";
import styles from "./styles/Section.module.css";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className={styles.headingRow}>
        <h2 id={`${id}-title`} className={styles.title}>
          {title}
        </h2>
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
