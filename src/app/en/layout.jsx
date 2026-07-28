import { LanguageProvider } from "@/contexts/LanguageContext";

export default function EnglishLayout({ children }) {
  return <LanguageProvider locale="en">{children}</LanguageProvider>;
}
