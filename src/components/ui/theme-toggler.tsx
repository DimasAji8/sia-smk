"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

interface ThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  animationDuration?: number;
  storageKey?: string;
  showLabel?: boolean;
  lightIcon?: React.ReactNode;
  darkIcon?: React.ReactNode;
}

/**
 * Custom Theme Toggler Component
 * Animated theme switcher with smooth transition effect
 *
 * @param animationDuration - Duration of transition animation in ms (default: 400)
 * @param storageKey - LocalStorage key for theme persistence (default: "app-theme")
 * @param showLabel - Show/hide accessible label (default: false)
 * @param lightIcon - Custom icon for light mode
 * @param darkIcon - Custom icon for dark mode
 */
export const ThemeToggler = ({
  className,
  animationDuration = 500,
  storageKey = "app-theme",
  showLabel = false,
  lightIcon,
  darkIcon,
  ...props
}: ThemeTogglerProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const initializeTheme = () => {
      const storedTheme = localStorage.getItem(storageKey);
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const shouldBeDark =
        storedTheme === "dark" || (!storedTheme && systemPrefersDark);

      setIsDarkMode(shouldBeDark);

      if (shouldBeDark) {
        document.documentElement.classList.add("dark");
      }
    };

    initializeTheme();
  }, [storageKey]);

  // Watch for external theme changes
  useEffect(() => {
    const updateTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const handleToggleTheme = useCallback(async () => {
    if (!buttonRef.current || isTransitioning) return;

    setIsTransitioning(true);

    // Check if View Transition API is supported
    const supportsViewTransition = "startViewTransition" in document;

    if (!supportsViewTransition) {
      // Fallback for browsers that don't support View Transition API
      const newTheme = !isDarkMode;
      setIsDarkMode(newTheme);
      document.documentElement.classList.toggle("dark");
      localStorage.setItem(storageKey, newTheme ? "dark" : "light");
      
      // Add a small delay for visual feedback
      setTimeout(() => setIsTransitioning(false), 200);
      return;
    }

    // Get button position before transition
    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );

    // Start the view transition
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        document.documentElement.classList.toggle("dark");
        localStorage.setItem(storageKey, newTheme ? "dark" : "light");
      });
    });

    // Wait for transition to be ready
    await transition.ready;

    // Create the circular reveal animation
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: animationDuration,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );

    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), animationDuration);
  }, [isDarkMode, animationDuration, storageKey, isTransitioning]);

  const LightIcon = lightIcon || <Sun className="h-5 w-5" />;
  const DarkIcon = darkIcon || <Moon className="h-5 w-5" />;

  return (
    <button
      ref={buttonRef}
      onClick={handleToggleTheme}
      disabled={isTransitioning}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "inline-flex items-center justify-center rounded-md p-2",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:opacity-50",
        "transition-colors duration-200",
        className
      )}
      {...props}
    >
      <div className="relative h-5 w-5">
        <div
          className={cn(
            "absolute inset-0 transition-all duration-300",
            isDarkMode
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          )}
        >
          {DarkIcon}
        </div>
        <div
          className={cn(
            "absolute inset-0 transition-all duration-300",
            !isDarkMode
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          )}
        >
          {LightIcon}
        </div>
      </div>
      {showLabel && (
        <span className="ml-2 text-sm font-medium">
          {isDarkMode ? "Dark" : "Light"}
        </span>
      )}
    </button>
  );
};
