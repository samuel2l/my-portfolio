import { useState, useEffect } from "react";

const GITHUB_USER = "samuel2l";
const GITHUB_URL = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`;
// Request raw README body (some endpoints return JSON with base64 content)
const README_ACCEPT = "application/vnd.github.raw";

// Pinned repo names (order preserved) + BTC project
const PINNED_NAMES = [
  "Social-Media-Chat-App",
  "Gesture-Detector",
  "MultiVendorPlatform-Mobile-Application",
  "Instagram-Clone",
  "Liveness-Detector",
  "Video-Caption-Generator",
];

const BTC_PROJECT = {
  name: "BTC Price Predictor",
  description:
    "Bitcoin price prediction using ML or time-series analysis. Built to explore forecasting and data pipelines.",
  url: `https://github.com/${GITHUB_USER}`,
  lang: "Python",
  stars: 0,
  repoName: null,
};

/** Fetch repo README and return plain-text excerpt for description */
async function fetchReadmeExcerpt(owner, repo) {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      { headers: { Accept: README_ACCEPT } },
    );
    if (!res.ok) return null;
    let text = await res.text();
    // If GitHub returns JSON (base64 content), decode it
    if (text.startsWith("{")) {
      try {
        const data = JSON.parse(text);
        if (data.content && data.encoding === "base64") {
          text = atob(data.content);
        }
      } catch {
        return null;
      }
    }
    return excerptFromReadme(text);
  } catch {
    return null;
  }
}

/** Turn README markdown into a short, readable description (2–4 sentences). */
function excerptFromReadme(md) {
  if (!md || typeof md !== "string") return null;
  // Remove code blocks (content between ```)
  let s = md.replace(/```[\s\S]*?```/g, "");
  // Remove headers (# ## ###)
  s = s.replace(/^#{1,6}\s*.+$/gm, "");
  // Remove images and links but keep link text where simple
  s = s.replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1");
  s = s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  // Remove bold/italic markers
  s = s.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1");
  s = s.replace(/__([^_]+)__/g, "$1").replace(/_([^_]+)_/g, "$1");
  // Collapse newlines and trim
  s = s.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
  // Take first ~400 chars, then cut at last sentence or word
  const maxLen = 380;
  if (s.length <= maxLen) return s || null;
  const cut = s.slice(0, maxLen);
  const lastPeriod = cut.lastIndexOf(". ");
  const lastSpace = cut.lastIndexOf(" ");
  const end =
    lastPeriod >= 200 ? lastPeriod + 1 : lastSpace >= 200 ? lastSpace : maxLen;
  return cut.slice(0, end).trim() + "." || null;
}

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchPinned() {
      try {
        const res = await fetch(GITHUB_URL);
        if (!res.ok) throw new Error("Failed to load projects");
        const repos = await res.json();
        if (cancelled) return;

        const byName = {};
        (repos || []).forEach((r) => {
          byName[r.name] = {
            name: r.name,
            description: r.description || "",
            url: r.html_url,
            lang: r.language || "—",
            stars: r.stargazers_count || 0,
            repoName: r.name,
          };
        });

        const btcKey = Object.keys(byName).find(
          (k) => /btc|bitcoin|price.?predict/i.test(k) || /predictor/i.test(k),
        );
        const btcEntry = btcKey
          ? {
              ...byName[btcKey],
              name: "BTC Price Predictor",
              description:
                byName[btcKey].description ||
                "Bitcoin price prediction project.",
            }
          : BTC_PROJECT;

        const pinned = PINNED_NAMES.map((name) => byName[name]).filter(Boolean);
        const list = [...pinned, btcEntry];

        // Enrich with README excerpts where possible
        const enriched = await Promise.all(
          list.map(async (p) => {
            const repoName = p.repoName || (p.url && p.url.split("/").pop());
            if (!repoName || repoName === GITHUB_USER) return p;
            const excerpt = await fetchReadmeExcerpt(GITHUB_USER, repoName);
            if (cancelled) return p;
            return {
              ...p,
              description:
                excerpt && excerpt.length > 80
                  ? excerpt
                  : p.description || "No description.",
            };
          }),
        );

        if (!cancelled) setProjects(enriched);
      } catch (e) {
        if (!cancelled) setError(e.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchPinned();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <section id="projects" style={styles.section}>
        <h2 style={styles.title}>Projects</h2>
        <p style={styles.error}>
          {error}.{" "}
          <a href={`https://github.com/${GITHUB_USER}`}>
            View projects on GitHub
          </a>
          .
        </p>
      </section>
    );
  }

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.title} className="stagger-item">
        Projects
      </h2>

      {loading ? (
        <p style={styles.loading}>Loading projects…</p>
      ) : (
        <>
          <ul style={styles.list}>
            {projects.map((project) => (
              <li
                key={project.name}
                style={styles.card}
                className="stagger-item card-hover"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.cardLink}
                >
                  <div style={styles.cardHeader}>
                    <span style={styles.name}>{project.name}</span>
                    {project.stars > 0 && (
                      <span style={styles.stars}>★ {project.stars}</span>
                    )}
                  </div>
                  <span style={styles.lang}>{project.lang}</span>
                  <p style={styles.desc}>{project.description}</p>
                </a>
              </li>
            ))}
          </ul>

          <div style={styles.moreWrap}>
            <a
              href={`https://github.com/${GITHUB_USER}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.moreBtn}
              className="btn-more"
            >
              View more projects
            </a>
          </div>
        </>
      )}
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
  loading: {
    color: "var(--text-muted)",
    margin: 0,
  },
  error: {
    color: "var(--text-muted)",
    margin: 0,
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1.25rem",
  },
  card: {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    boxShadow: "var(--shadow-sm)",
  },
  cardLink: {
    display: "block",
    padding: "1.5rem",
    color: "var(--text)",
    textDecoration: "none",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "0.35rem",
  },
  name: {
    flex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontWeight: 600,
    fontSize: "1rem",
  },
  stars: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.75rem",
    color: "var(--text-muted)",
  },
  lang: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.75rem",
    color: "var(--accent)",
    display: "block",
    marginBottom: "0.5rem",
  },
  desc: {
    margin: 0,
    fontSize: "0.9rem",
    color: "var(--text-muted)",
    lineHeight: 1.55,
  },
  moreWrap: {
    marginTop: "2rem",
    textAlign: "center",
  },
  moreBtn: {
    display: "inline-block",
    padding: "0.75rem 1.5rem",
    border: "1px solid var(--border)",
    color: "var(--text)",
    fontWeight: 500,
    borderRadius: "8px",
    fontSize: "0.95rem",
  },
};

export default Projects;
