import { useEffect } from "react";

export default function MouseTrail() {
  useEffect(() => {
    const trails = [];
    const maxTrails = 30;

    const handleMouseMove = (e) => {
      // Creëer een trail element
      const trail = document.createElement("div");
      trail.className = "mouse-trail";
      trail.style.left = e.clientX + "px";
      trail.style.top = e.clientY + "px";
      trail.style.transform = "translate(-50%, -50%)";

      document.body.appendChild(trail);
      trails.push(trail);

      // Verwijder oude trails
      if (trails.length > maxTrails) {
        const oldTrail = trails.shift();
        oldTrail.remove();
      }

      // Fade out na 800ms (matches animation)
      setTimeout(() => {
        trail.remove();
        const index = trails.indexOf(trail);
        if (index > -1) {
          trails.splice(index, 1);
        }
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      trails.forEach(trail => trail.remove());
    };
  }, []);

  return null;
}
