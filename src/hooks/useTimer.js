import { useState, useEffect, useRef } from "react";

/**
 * Custom hook for managing a game timer.
 *
 * The timer starts automatically when `active` is true
 * and increments the elapsed time every second.
 *
 * It can be stopped or reset manually.
 *
 * @param {boolean} active Indicates whether the timer should be running
 * @returns {Object} Timer API
 * @returns {number} seconds Elapsed time in seconds
 * @returns {Function} reset Resets the timer to zero
 * @returns {Function} stop Stops the timer
 */
export function useTimer(active) {
  /**
   * Elapsed time in seconds.
   * @type {[number, Function]}
   */
  const [seconds, setSeconds] = useState(0);
  /**
   * Reference to the timer interval.
   * @type {{ current: number | null }}
   */
  const intervalRef = useRef(null);

  /**
   * Effect responsible for starting and stopping the timer.
   * Runs whenever the `active` flag changes.
   */
  useEffect(() => {
    if (active) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [active]);

  /**
   * Resets elapsed time to zero.
   */
  const reset = () => setSeconds(0);

  /**
   * Stops the timer without resetting elapsed time.
   */
  const stop = () => {
    clearInterval(intervalRef.current);
  }
  return { seconds, reset, stop };
}
