import { useState, useEffect, useRef } from "react";

export function useTimer(active) {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (active) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [active]);

  const reset = () => setSeconds(0);

  const stop = () => {
    clearInterval(intervalRef.current);
  }
  return { seconds, reset, stop };
}
