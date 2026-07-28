import { buildMetadata } from "@/lib/seo";
import { Schedule } from "@/views/Schedule";

export const metadata = buildMetadata("schedule", "es");

export default function SpanishSchedulePage() {
  return <Schedule />;
}
