const FEATURES = [
  "Personal AI assistant",
  "OCR & document scanning",
  "Note taking with recording and playback access",
  "Playback controls — pause, speed up, slow down, rewind, and fast-forward",
  "Image and video recognition",
  "Math recognition",
  "Table extraction and parsing",
];

const IMAGES = [
  {
    src: "/projects/smart-glasses/cad-model.png",
    alt: "SolidWorks CAD assembly of the smart glasses frame, camera module, and Raspberry Pi",
    caption: "CAD assembly — frame, camera, and compute module",
  },
  {
    src: "/projects/smart-glasses/prototype.jpg",
    alt: "3D-printed smart glasses prototype with Raspberry Pi 5 and camera mounted on the frame",
    caption: "First physical prototype — 3D printed and assembled",
  },
];

function SmartGlasses() {
  return (
    <article style={styles.featured} className="stagger-item card-hover">
      <div style={styles.header}>
        <div>
          <h3 style={styles.name}>Smart Glasses</h3>
          <p style={styles.subtitle}>Wearable AI · Hardware + Computer Vision</p>
        </div>
        <span style={styles.badge}>Private project</span>
      </div>

      <p style={styles.overview}>
        A pair of AI-powered smart glasses that bring a personal assistant to
        your field of view. The system captures what you see through a
        front-mounted camera and runs on-device intelligence for OCR, math
        recognition, table parsing, and image and video understanding — plus
        full note-taking with rich playback controls.
      </p>

      <div style={styles.gallery}>
        {IMAGES.map((image) => (
          <figure key={image.src} style={styles.figure}>
            <img
              src={image.src}
              alt={image.alt}
              style={styles.image}
              loading="lazy"
            />
            <figcaption style={styles.caption}>{image.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div style={styles.details}>
        <div style={styles.block}>
          <h4 style={styles.blockTitle}>Features</h4>
          <ul style={styles.featureList}>
            {FEATURES.map((feature) => (
              <li key={feature} style={styles.featureItem}>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div style={styles.block}>
          <h4 style={styles.blockTitle}>Hardware & build</h4>
          <p style={styles.blockText}>
            The first prototype runs on a Raspberry Pi 5 with a Pi Camera
            Module mounted on a custom frame. We designed the glasses in CAD,
            then 3D printed the frame and assembled the electronics by hand.
          </p>
          <p style={styles.blockText}>
            Future iterations will miniaturize the hardware so the glasses are
            practical and comfortable for everyday wear.
          </p>
        </div>
      </div>
    </article>
  );
}

const styles = {
  featured: {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    boxShadow: "var(--shadow-sm)",
    padding: "1.75rem",
    marginBottom: "2.5rem",
  },
  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "1rem",
    flexWrap: "wrap",
    marginBottom: "1rem",
  },
  name: {
    margin: "0 0 0.25rem",
    fontSize: "1.35rem",
    fontWeight: 600,
    color: "var(--text)",
  },
  subtitle: {
    margin: 0,
    fontFamily: "var(--font-mono)",
    fontSize: "0.75rem",
    color: "var(--accent)",
  },
  badge: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.7rem",
    color: "var(--text-muted)",
    border: "1px solid var(--border)",
    borderRadius: "999px",
    padding: "0.3rem 0.65rem",
    whiteSpace: "nowrap",
  },
  overview: {
    margin: "0 0 1.5rem",
    fontSize: "0.95rem",
    color: "var(--text-muted)",
    lineHeight: 1.65,
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1rem",
    marginBottom: "1.5rem",
  },
  figure: {
    margin: 0,
  },
  image: {
    display: "block",
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    border: "1px solid var(--border)",
    aspectRatio: "4 / 3",
    objectFit: "cover",
  },
  caption: {
    marginTop: "0.5rem",
    fontSize: "0.8rem",
    color: "var(--text-muted)",
    lineHeight: 1.4,
  },
  details: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1.5rem",
  },
  block: {},
  blockTitle: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.75rem",
    color: "var(--accent)",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    margin: "0 0 0.75rem",
  },
  featureList: {
    margin: 0,
    padding: "0 0 0 1.1rem",
    color: "var(--text-muted)",
    fontSize: "0.9rem",
    lineHeight: 1.7,
  },
  featureItem: {
    marginBottom: "0.35rem",
  },
  blockText: {
    margin: "0 0 0.75rem",
    fontSize: "0.9rem",
    color: "var(--text-muted)",
    lineHeight: 1.6,
  },
};

export default SmartGlasses;
