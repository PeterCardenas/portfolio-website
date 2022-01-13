import { useEffect, useState } from "react";

const prefixToQuery = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  mobile: "(max-width: 1023px)",
};

type Prefix = keyof typeof prefixToQuery;

const useMediaQuery = (prefix: Prefix) => {
  const query = prefixToQuery[prefix];
  const [matches, setMatches] = useState(query !== "mobile");

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    mediaQueryList.addEventListener("change", listener);

    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

export default useMediaQuery;
