import { NotFound } from "@/views/NotFound";

export const metadata = {
  title: "Page not found | Adelsoft",
  description: "The page you’re looking for doesn’t exist or has moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFoundPage() {
  return <NotFound />;
}
