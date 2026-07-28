import { buildMetadata } from "@/lib/seo";

export const metadata = {
  ...buildMetadata("home", "en"),
  alternates: {
    ...buildMetadata("home", "en").alternates,
    canonical: "https://adelsoft.co/en/",
  },
};

export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/en/" />
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <p>
          <a href="/en/">Continue to Adelsoft</a>
        </p>
      </main>
    </>
  );
}
