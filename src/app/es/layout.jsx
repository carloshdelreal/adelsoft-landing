import { LanguageProvider } from "@/contexts/LanguageContext";

export default function SpanishLayout({ children }) {
  return <LanguageProvider locale="es">{children}</LanguageProvider>;
}
