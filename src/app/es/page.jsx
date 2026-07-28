import { buildMetadata } from "@/lib/seo";
import { HomePage } from "@/views/HomePage";

export const metadata = buildMetadata("home", "es");

export default function SpanishHomePage() {
  return <HomePage />;
}
