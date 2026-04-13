import styles from "./styles/ExperienceList.module.css";

const experienceItems = [
  {
    role: "Software Developer Team Lead",
    company: "Epic Systems",
    dates: "[Year]-Present",
    detail:
      "Lead product initiatives; partner with product and operations to prioritize roadmap; delivered [X] major releases with [X%] improvement in key workflow metrics."
  },
  {
    role: "Software Developer",
    company: "Epic Systems",
    dates: "[Year]-[Year]",
    detail:
      "Built platform and product capabilities across health plan domains, including reporting and data model improvements; improved data quality and reduced manual analysis effort by [X] hours/week."
  },
  {
    role: "Technical Services Engineer Team Lead",
    company: "Epic Systems",
    dates: "[Year]-[Year]",
    detail:
      "Led customer-facing technical teams through implementation and go-live; coordinated cross-team issue resolution and improved delivery predictability for high-priority milestones."
  },
  {
    role: "Technical Services Engineer",
    company: "Epic Systems",
    dates: "[Year]-[Year]",
    detail:
      "Implemented and supported large healthcare deployments in production environments; translated operational requirements into system configurations and durable support playbooks."
  }
];

export function ExperienceList() {
  return (
    <ol className={styles.list}>
      {experienceItems.map((item) => (
        <li key={`${item.role}-${item.dates}`} className={styles.item}>
          <p className={styles.heading}>
            <span>{item.company}</span>
            <span className={styles.separator} aria-hidden="true">
              -
            </span>
            <strong>{item.role}</strong>
            <span className={styles.separator} aria-hidden="true">
              -
            </span>
            <span>{item.dates}</span>
          </p>
          <p className={styles.detail}>{item.detail}</p>
        </li>
      ))}
    </ol>
  );
}
