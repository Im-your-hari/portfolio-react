import { useCallback } from "react";

/**
 * Attaches a mousemove handler that writes the pointer position into
 * CSS custom properties (--px / --py) on the target element, driving
 * a radial glow that follows the cursor purely via CSS.
 */
export function usePointerGlow<T extends HTMLElement>() {
  const onMouseMove = useCallback((event: React.MouseEvent<T>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty("--px", `${x}%`);
    event.currentTarget.style.setProperty("--py", `${y}%`);
  }, []);

  return { onMouseMove };
}
