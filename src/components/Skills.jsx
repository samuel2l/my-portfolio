const SKILLS = [
  "Python",
  "JavaScript",
  "Dart",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "React",
  "Flutter",
  "Express.js",
  "Flask",
  "Django",
  "Git",
  "GitHub",
  "RabbitMQ",
  "Grafana",
  "AWS",
  "Postman",
  "CI/CD",
  "Agile",
];

function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.title} className="stagger-item">
        Skills & proficiencies
      </h2>
      <ul style={styles.list}>
        {SKILLS.map((skill) => (
          <li key={skill} style={styles.item} className="stagger-item skill-tag">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

const styles = {
  section: {
    padding: "4rem 2rem",
    maxWidth: "52rem",
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
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem 1rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  item: {
    padding: "0.5rem 0.9rem",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    fontSize: "0.9rem",
    color: "var(--text-muted)",
    boxShadow: "var(--shadow-sm)",
  },
};

export default Skills;
