"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/en/");
  }, [router]);

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <p>
        <a href="/en/">Continue to Adelsoft</a>
      </p>
    </main>
  );
}
