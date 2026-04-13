import styles from "./styles/Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <p className={styles.kicker}>Epic Systems - Tapestry Medical Management</p>
      <h1 id="hero-heading" className={styles.title}>
        Software engineer improving healthcare integrations.
      </h1>
      <p className={styles.description}>
        I&apos;m a software engineer and technical lead at Epic Systems working on products
        that support medical and pharmacy prior authorization workflows. My work spans system
        architecture, workflow design, project execution, and implementation of solutions across the country.
      </p>
      <p className={styles.credibility}>
        Software Engineer • Technical Lead • Epic Systems
      </p>
      <div className={styles.actions}>
        <a href="/resume.pdf" className={styles.primaryCta}>
          View Resume
        </a>
        <a href="#contact" className={styles.secondaryCta}>
          Contact
        </a>
      </div>
    </section>
  );
}
