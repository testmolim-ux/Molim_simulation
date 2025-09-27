import React, { useEffect } from "react";

export const ScrollToHashElement: React.FC = () => {
  useEffect(() => {
    const onHashChange = () => {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0 });
      }
    };

    if (typeof window !== "undefined") {
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    }

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
};
