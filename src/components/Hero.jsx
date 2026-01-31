function Hero() {
  return (
    <section style={styles.section}>
      <p style={styles.greeting} className="hero-line">
        About me
      </p>
      <h1 style={styles.name} className="hero-line">
        Samuel Adams
      </h1>
      <p style={styles.tagline} className="hero-line">
        Mobile & Backend Developer · B.Sc. Computer Engineering · Accra, Ghana
      </p>
      <div style={styles.bio} className="hero-line">
        <p style={styles.bioP}>
          I'm a mobile and backend developer. I build solutions with Flutter,
          Python, JavaScript, Node.js, and the tools that fit the job.
        </p>
        <p style={styles.bioP}>
          I like creating real-world solutions to real problems.
        </p>
      </div>
      <div style={styles.cta} className="hero-line">
        <a href="#projects" style={styles.primary} className="btn-primary">
          View my work
        </a>
        <a
          href="https://github.com/samuel2l"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.secondary}
          className="btn-secondary"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "6rem 2rem 4rem",
    maxWidth: "42rem",
    margin: "0 auto",
  },
  greeting: {
    color: "var(--accent)",
    fontFamily: "var(--font-mono)",
    fontSize: "0.95rem",
    marginBottom: "0.5rem",
  },
  name: {
    fontSize: "clamp(2.5rem, 6vw, 4rem)",
    fontWeight: 700,
    margin: "0 0 0.5rem",
    letterSpacing: "-0.02em",
    color: "var(--text)",
  },
  tagline: {
    color: "var(--text-muted)",
    fontSize: "1.1rem",
    marginBottom: "1.5rem",
  },
  bio: {
    color: "var(--text-muted)",
    marginBottom: "2rem",
    lineHeight: 1.75,
    fontSize: "1.05rem",
  },
  bioP: {
    margin: "0 0 0.75rem",
  },
  cta: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
  primary: {
    display: "inline-block",
    padding: "0.75rem 1.5rem",
    background: "var(--accent)",
    color: "#0a0a0c",
    fontWeight: 600,
    borderRadius: "10px",
  },
  secondary: {
    display: "inline-block",
    padding: "0.75rem 1.5rem",
    border: "1px solid var(--border)",
    color: "var(--text)",
    fontWeight: 500,
    borderRadius: "10px",
  },
};

export default Hero;
