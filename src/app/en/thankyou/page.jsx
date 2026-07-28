import { buildMetadata } from "@/lib/seo";
import { ThankYouPage } from "@/views/ThankYouPage";

export const metadata = buildMetadata("thankyou", "en");

export default function EnglishThankYouPage() {
  return <ThankYouPage locale="en" />;
}
