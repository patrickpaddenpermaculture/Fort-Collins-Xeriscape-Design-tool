import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ maxWidth: 840, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 34, fontWeight: 800 }}>Padden AI Studio</h1>
      <p style={{ opacity: 0.75, marginTop: 8 }}>
        Turn a yard into an ecological concept plan in minutes.
      </p>

      <div style={{ marginTop: 18 }}>
        <Link
          href="/new"
          style={{
            display: "inline-block",
            padding: "12px 16px",
            borderRadius: 12,
            border: "1px solid rgba(0,0,0,0.15)",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Start a concept →
        </Link>
      </div>
    </main>
  );
}

