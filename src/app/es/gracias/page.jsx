import { buildMetadata } from "@/lib/seo";
import { ThankYouPage } from "@/views/ThankYouPage";

export const metadata = buildMetadata("thankyou", "es");

export default function SpanishThankYouPage() {
  return <ThankYouPage locale="es" />;
}
