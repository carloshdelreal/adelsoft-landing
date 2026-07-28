"use client";

import { useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";

export function Providers({ children }) {
  useEffect(() => {
    let scroll;
    let cancelled = false;

    import("smooth-scroll").then((mod) => {
      if (cancelled) return;
      const SmoothScroll = mod.default;
      scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true,
      });
    });

    return () => {
      cancelled = true;
      if (scroll && typeof scroll.destroy === "function") {
        scroll.destroy();
      }
    };
  }, []);

  return <LanguageProvider>{children}</LanguageProvider>;
}
