:root {
  --bg-dark: #101821;
  --bg-mid: rgba(255, 255, 255, 0.04);
  --card: rgba(255, 255, 255, 0.05);
  --card-strong: rgba(255, 255, 255, 0.07);
  --border: rgba(255, 255, 255, 0.12);
  --text: #edf3f8;
  --muted: rgba(237, 243, 248, 0.7);
  --soft: rgba(255, 255, 255, 0.45);
  --shadow: 0 22px 40px rgba(0, 0, 0, 0.25);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top, rgba(255, 255, 255, 0.08), transparent 20%),
    linear-gradient(180deg, #0e171f 0%, #121b22 100%);
  color: var(--text);
  line-height: 1.55;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
  background-size: 22px 22px;
  pointer-events: none;
}

.page-shell {
  position: relative;
  z-index: 1;
  width: min(1200px, calc(100% - 36px));
  margin: 0 auto;
  padding: 64px 0 80px;
}

.content {
  display: grid;
  gap: 28px;
}

.card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: 26px;
  box-shadow: var(--shadow);
  padding: 26px 22px 20px;
}

.intro {
  min-height: 260px;
}

.intro p {
  margin: 0;
  font-size: clamp(1.1rem, 1.6vw, 1.35rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
}

.intro p + p {
  margin-top: 18px;
}

.hire-line {
  display: block;
  margin-top: 18px;
  font-weight: 500;
}

.hire-line span {
  color: rgba(255, 255, 255, 0.8);
}

.mini-points {
  list-style: none;
  padding: 0;
  margin: 18px 0 0;
  display: grid;
  gap: 8px;
}

.mini-points li {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.05rem;
  font-weight: 500;
}

.positions-block {
  display: grid;
  gap: 18px;
}

.positions-block h2 {
  margin: 0;
  font-size: clamp(1.6rem, 2vw, 2.2rem);
  line-height: 1.2;
  letter-spacing: -0.04em;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.position-card {
  min-height: 118px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 20px 18px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);
}

.position-card h3 {
  margin: 0;
  font-size: clamp(1.5rem, 1.8vw, 2rem);
  letter-spacing: -0.05em;
  font-weight: 600;
  color: rgba(255,255,255,0.96);
}

.position-card p {
  margin: 8px 0 0;
  font-size: 1.15rem;
  color: rgba(255,255,255,0.72);
}

.full-width {
  grid-column: 1 / -1;
}

@media (max-width: 760px) {
  .page-shell {
    width: min(100% - 20px, 800px);
    padding-top: 28px;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }

  .intro,
  .position-card {
    border-radius: 16px;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .position-card {
    transition: transform 0.2s ease, border-color 0.2s ease;
  }

  .position-card:hover {
    transform: translateY(-1px);
    border-color: rgba(255,255,255,0.2);
  }
}
