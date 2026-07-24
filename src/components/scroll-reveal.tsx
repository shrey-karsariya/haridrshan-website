import React, { useEffect, useRef, useState, type ReactNode } from "react";

type AnimationVariant = "fade-up" | "fade-down" | "fade-in" | "slide-left" | "slide-right" | "zoom-in";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  staggerIndex?: number;
  staggerStep?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  staggerIndex = 0,
  staggerStep = 100,
  duration = 650,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if element is already inside the viewport on mount
    const checkPosition = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight - 30 && rect.bottom > 0) {
        setIsVisible(true);
        return true;
      }
      return false;
    };

    if (checkPosition() && once) {
      return;
    }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "80px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [once]);

  const totalDelay = delay + staggerIndex * staggerStep;

  const getInitialTransform = () => {
    switch (variant) {
      case "fade-up":
        return "translate3d(0, 36px, 0)";
      case "fade-down":
        return "translate3d(0, -36px, 0)";
      case "slide-left":
        return "translate3d(-45px, 0, 0)";
      case "slide-right":
        return "translate3d(45px, 0, 0)";
      case "zoom-in":
        return "scale(0.92) translate3d(0, 24px, 0)";
      case "fade-in":
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate3d(0, 0, 0) scale(1)" : getInitialTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    transitionDelay: `${totalDelay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
