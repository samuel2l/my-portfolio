function Education() {
  return (
    <section id="education" style={styles.section}>
      <h2 style={styles.title} className="stagger-item">
        Education
      </h2>
      <ul style={styles.list}>
        <li style={styles.item} className="stagger-item card-hover">
          <div style={styles.header}>
            <span style={styles.org}>University of Ghana</span>
            <span style={styles.date}>Jan 2022 – Sept 2025</span>
          </div>
          <p style={styles.degree}>B.Sc. Computer Engineering</p>
          <p style={styles.note}>Ranked 1st in West Africa</p>
        </li>
        <li style={styles.item} className="stagger-item card-hover">
          <div style={styles.header}>
            <span style={styles.org}>Africa to Silicon Valley (A2SV)</span>
            <span style={styles.date}>Jan 2025 – May 2025</span>
          </div>
          <p style={styles.desc}>
            Intensive software engineering program backed by Google, with a 70%
            placement rate at top tech companies.
          </p>
        </li>
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
    marginBottom: "0.35rem",
  },
  org: {
    fontWeight: 600,
    fontSize: "1rem",
    color: "var(--text)",
  },
  date: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.8rem",
    color: "var(--text-muted)",
  },
  degree: {
    margin: "0 0 0.25rem",
    fontSize: "0.95rem",
    color: "var(--text-muted)",
  },
  note: {
    margin: 0,
    fontSize: "0.85rem",
    color: "var(--text-muted)",
    fontStyle: "italic",
  },
  desc: {
    margin: 0,
    fontSize: "0.9rem",
    color: "var(--text-muted)",
    lineHeight: 1.55,
  },
};

export default Education;
