import { useState, useEffect } from "react";

// Własny hook do śledzenia pozycji kursora
function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    // Clean up po unmount
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []); // Pusty array, więc efekt uruchamia się tylko raz (on mount)

  return position;
}

export default useMousePosition;
