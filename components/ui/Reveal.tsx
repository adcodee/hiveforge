"use client";

import { useEffect, useRef, useState } from "react";

type RevealState = "below" | "visible" | "above";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealState>("below");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Double RAF: ensures browser paints the invisible state before transitioning
          requestAnimationFrame(() =>
            requestAnimationFrame(() => setState("visible"))
          );
        } else {
          // Exiting from top = scrolled past; exiting from bottom = not yet reached
          setState(entry.boundingClientRect.top < 0 ? "above" : "below");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes: Record<RevealState, string> = {
    below: "opacity-0 translate-y-6",
    visible: "opacity-100 translate-y-0",
    above: "opacity-0 -translate-y-3",
  };

  return (
    <div
      ref={ref}
      className={`${classes[state]} ${className}`}
      style={{
        transition:
          "opacity 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionDelay: state === "visible" ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
