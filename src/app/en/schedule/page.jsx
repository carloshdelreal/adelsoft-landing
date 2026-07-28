import { buildMetadata } from "@/lib/seo";
import { Schedule } from "@/views/Schedule";

export const metadata = buildMetadata("schedule", "en");

export default function EnglishSchedulePage() {
  return <Schedule />;
}
