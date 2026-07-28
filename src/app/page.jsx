import { buildRootMetadata } from "@/lib/seo";

export const metadata = buildRootMetadata();

export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/en/" />
      <main
        style={{
          padding: "3rem 1.5rem",
          textAlign: "center",
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <img
          src="/img/logo.svg"
          alt="Adelsoft"
          width="96"
          height="82"
          style={{ marginBottom: "0.5rem" }}
        />
        <h1
          style={{
            fontFamily: "Raleway, sans-serif",
            fontSize: "1.75rem",
            margin: 0,
          }}
        >
          Adelsoft | Custom Software Development for Businesses
        </h1>
        <p style={{ maxWidth: "36rem", color: "#555", margin: 0 }}>
          Custom software development, web applications, cloud solutions and
          AI-powered systems for growing businesses.
        </p>
        <p style={{ marginTop: "0.75rem" }}>
          <a href="/en/" className="btn btn-custom btn-lg">
            Continue to Adelsoft
          </a>
        </p>
      </main>
    </>
  );
}
