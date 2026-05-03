const links = [
  {
    label: "Email",
    href: "mailto:griffin.t.davis@icloud.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.09-.25L12 11.32l6.91-4.82H5.09Zm13.41 1.22-6.07 4.24a.75.75 0 0 1-.86 0L5.5 7.72v9.53c0 .41.34.75.75.75h11.5c.41 0 .75-.34.75-.75V7.72Z" />
      </svg>
    )
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/griffin-davis/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 8.25A1.75 1.75 0 1 1 6.5 4.75a1.75 1.75 0 0 1 0 3.5ZM5 10h3v9H5v-9Zm5 0h2.88v1.23h.04c.4-.76 1.38-1.56 2.83-1.56 3.03 0 3.59 1.99 3.59 4.58V19h-3v-4.2c0-1-.02-2.29-1.4-2.29-1.4 0-1.61 1.09-1.61 2.22V19h-3v-9Z" />
      </svg>
    )
  },
  {
    label: "GitHub",
    href: "https://github.com/griffindavis",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.6 2 12.27c0 4.54 2.87 8.39 6.84 9.75.5.1.66-.22.66-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.15-4.55-5.1 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.36 1.9-1.34 2.74-1.06 2.74-1.06.56 1.42.21 2.47.1 2.73.64.73 1.03 1.65 1.03 2.78 0 3.96-2.33 4.84-4.56 5.1.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.17.6.67.49A10.29 10.29 0 0 0 22 12.27C22 6.6 17.52 2 12 2Z" />
      </svg>
    )
  }
];

export default function Home() {
  return (
    <main className="site">
      <section>
        <p className="name">Griffin Davis</p>
        <p className="title">Software Engineeer &amp; Team Lead at Epic Systems</p>
        <p className="summary">
          I design and build healthcare software, enjoy building iOS tools, and like
          turning messy workflows into simple experiences.
        </p>

        <div className="actions">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="icon">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
