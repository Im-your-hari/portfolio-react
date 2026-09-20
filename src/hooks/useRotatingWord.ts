import { useEffect, useState } from "react";

export function useRotatingWord(words: string[], intervalMs = 2400) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [words, intervalMs]);

  return words[index];
}
