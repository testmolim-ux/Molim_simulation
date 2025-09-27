import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia(query);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    if (typeof m.addEventListener === "function") {
      m.addEventListener("change", listener as any);
    } else if (typeof (m as any).addListener === "function") {
      (m as any).addListener(listener as any);
    }
    setMatches(m.matches);
    return () => {
      if (typeof m.removeEventListener === "function") {
        m.removeEventListener("change", listener as any);
      } else if (typeof (m as any).removeListener === "function") {
        (m as any).removeListener(listener as any);
      }
    };
  }, [query]);

  return matches;
};
