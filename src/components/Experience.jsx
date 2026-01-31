const JOBS = [
  {
    company: "Gigsama",
    role: "Backend Developer",
    period: "August 2025 – Present",
    bullets: [
      "Develop and maintain scalable Node.js backend services and APIs for marketing and delivery apps.",
      "Build and integrate AI-powered features and automation workflows into core backend systems.",
      "Implemented automated calling solutions using telephony APIs to reduce employee workload.",
    ],
  },
  {
    company: "LaRuche Health",
    role: "Mobile Developer",
    period: "April 2025 – October 2025",
    bullets: [
      "Collaborated with backend engineers, designers, and product stakeholders to ship high-quality Flutter releases on tight timelines.",
      "Performed debugging, performance optimization, and code refactoring to maintain a stable, responsive, and reliable Flutter application across Android and iOS.",
    ],
  },
  {
    company: "Moovon Group",
    role: "Mobile Developer Intern",
    period: "Feb 2024 – May 2024",
    bullets: [
      "Applied advanced Flutter concepts, including state management, animations, and complex widgets to develop a Reddit clone as a capstone project.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" style={styles.section}>
      <h2 style={styles.title} className="stagger-item">
        Experience
      </h2>
      <ul style={styles.list}>
        {JOBS.map((job) => (
          <li
            key={job.company}
            style={styles.item}
            className="stagger-item card-hover"
          >
            <div style={styles.header}>
              <span style={styles.company}>{job.company}</span>
              <span style={styles.date}>{job.period}</span>
            </div>
            <p style={styles.role}>{job.role}</p>
            <ul style={styles.bullets}>
              {job.bullets.map((b, i) => (
                <li key={i} style={styles.bullet}>
                  {b}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

const styles = {
  section: {
    padding: "4rem 2rem",
    maxWidth: "42rem",
    margin: "0 auto",
  },
  title: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.85rem",
    color: "var(--accent)",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: "1.5rem",
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  item: {
    padding: "1.25rem",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    boxShadow: "var(--shadow-sm)",
  },
  header: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: "0.5rem",
    marginBottom: "0.25rem",
  },
  company: {
    fontWeight: 600,
    fontSize: "1rem",
    color: "var(--text)",
  },
  date: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.8rem",
    color: "var(--text-muted)",
  },
  role: {
    margin: "0 0 0.75rem",
    fontSize: "0.9rem",
    color: "var(--text-muted)",
  },
  bullets: {
    margin: 0,
    paddingLeft: "1.25rem",
    fontSize: "0.9rem",
    color: "var(--text-muted)",
    lineHeight: 1.6,
  },
  bullet: {
    marginBottom: "0.35rem",
  },
};

export default Experience;
