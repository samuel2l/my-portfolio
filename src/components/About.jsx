function About() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.title} className="stagger-item">
        About
      </h2>
      <div style={styles.content} className="stagger-item">
        <p style={styles.p}>
          I'm a Computer Engineering graduate from the University of Ghana
          (ranked 1st in West Africa) and an Africa to Silicon Valley (A2SV)
          alum.
        </p>
        <p style={styles.p}>
          I work with Node.js, Flutter, Python, React, and tools like RabbitMQ,
          PostgreSQL, and AWS. I'm always open to collaboration or new roles.
        </p>
      </div>
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
    marginBottom: "1rem",
  },
  content: {
    color: "var(--text-muted)",
  },
  p: {
    margin: "0 0 1rem",
    lineHeight: 1.75,
    fontSize: "1rem",
  },
};

export default About;
