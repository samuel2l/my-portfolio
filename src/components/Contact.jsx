function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title} className="stagger-item">
        Contact
      </h2>
      <p style={styles.text} className="stagger-item">
        Open to opportunities and collaboration. Reach me at:
      </p>
      <ul style={styles.links}>
        <li className="stagger-item">
          <a
            href="mailto:sama29571@gmail.com"
            style={styles.link}
            className="contact-link"
          >
            sama29571@gmail.com
          </a>
        </li>
        <li className="stagger-item">
          <a
            href="https://github.com/samuel2l"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            className="contact-link"
          >
            GitHub · samuel2l
          </a>
        </li>
      </ul>
    </section>
  );
}

const styles = {
  section: {
    padding: "4rem 2rem 6rem",
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
  text: {
    color: "var(--text-muted)",
    marginBottom: "1rem",
  },
  links: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  link: {
    color: "var(--accent)",
    fontWeight: 500,
  },
};

export default Contact;
