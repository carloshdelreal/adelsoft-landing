import { buildMetadata } from "@/lib/seo";
import { HomePage } from "@/views/HomePage";

export const metadata = buildMetadata("home", "en");

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}
