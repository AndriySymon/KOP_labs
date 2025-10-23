import { useState, useEffect } from "react";

export function useTimer(active) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [active]);

  const reset = () => setSeconds(0);

  return { seconds, reset };
}
