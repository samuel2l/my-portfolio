function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav style={styles.nav} className="nav-bar">
      <a href="#" style={styles.logo}>
        Samuel Adams' Portfolio
      </a>
      <ul style={styles.links}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="nav-link" style={styles.link}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    background: "rgba(10, 10, 12, 0.85)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: "1px solid var(--border)",
    zIndex: 100,
  },
  logo: {
    fontFamily: "var(--font-mono)",
    fontWeight: 700,
    fontSize: "1.25rem",
    color: "var(--accent)",
    letterSpacing: "-0.02em",
  },
  links: {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "var(--text-muted)",
    fontSize: "0.9rem",
    fontWeight: 500,
  },
};

export default Nav;
