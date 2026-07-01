"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface StickyCategoryNavProps {
  categoryIds: string[];
}

export default function StickyCategoryNav({ categoryIds }: StickyCategoryNavProps) {
  const [activeId, setActiveId] = useState<string>("");
  const navRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);

  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  // Short labels mapping to keep tabs readable on small mobile screens
  const getShortLabel = (id: string) => {
    switch (id) {
      case "savouries":
        return "Sandwiches";
      case "salads":
        return "Salads";
      case "beverages":
        return "Beverages";
      case "pasta":
        return "Pasta";
      case "toast":
        return "Toasts";
      case "sweet-salty-spicy":
        return "Sweet & Salty";
      case "waffles-pancakes-crepes":
        return "Waffles & Crepes";
      case "desserts":
        return "Desserts";
      case "addons":
        return "Add-Ons";
      case "protein-diet":
        return "Protein Diet";
      case "protein-shakes":
        return "Protein Shakes";
      case "performance-addons":
        return "Gym Add-Ons";
      default:
        return "Menu";
    }
  };

  // Check whether to show the left/right scroll gradient indicator fades
  const checkScrollFades = () => {
    if (!navRef.current) return;
    const container = navRef.current;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    setShowLeftFade(scrollLeft > 10);
    setShowRightFade(scrollLeft < maxScroll - 10);
  };

  useEffect(() => {
    // Set initial active state to first category
    if (categoryIds.length > 0) {
      setActiveId(categoryIds[0]);
    }

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Focus observation on upper-middle third of viewport
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (isClickScrolling.current) return;

      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setActiveId(visibleEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    categoryIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      categoryIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [categoryIds]);

  // Handle manual scroll fade checks
  useEffect(() => {
    const container = navRef.current;
    if (!container) return;

    container.addEventListener("scroll", checkScrollFades);
    window.addEventListener("resize", checkScrollFades);
    checkScrollFades();

    return () => {
      container.removeEventListener("scroll", checkScrollFades);
      window.removeEventListener("resize", checkScrollFades);
    };
  }, [categoryIds]);

  // Center active tab inside horizontal scrolling navigation container
  useEffect(() => {
    if (!activeId || !navRef.current) return;

    const activeEl = navRef.current.querySelector(`[data-id="${activeId}"]`);
    if (!activeEl) return;

    const container = navRef.current;
    const containerWidth = container.offsetWidth;
    
    const activeLeft = (activeEl as HTMLElement).offsetLeft;
    const activeWidth = (activeEl as HTMLElement).offsetWidth;

    // Calculate scroll target to center the active chip
    const targetScroll = activeLeft - containerWidth / 2 + activeWidth / 2;

    // Only auto-scroll horizontally on desktop where chips are in a single line
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }

    // Recheck fades after smooth scroll ends
    const timer = setTimeout(() => {
      checkScrollFades();
    }, 350);

    return () => clearTimeout(timer);
  }, [activeId]);

  const handleTabClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    isClickScrolling.current = true;
    setActiveId(id);

    // Smooth scroll to target menu category section
    const yOffset = -120; // Account for sticky header + nav height
    const yPosition = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: "smooth",
    });

    // Re-enable IntersectionObserver tracking after scrolling completes
    setTimeout(() => {
      isClickScrolling.current = false;
      checkScrollFades();
    }, 700);
  };

  return (
    <div className="sticky top-[73px] z-30 w-full bg-cream-bg/95 backdrop-blur-md border-b border-gold/15 py-3 shadow-sm select-none">
      <div className="relative max-w-7xl mx-auto px-4">
        
        {/* Left Gradient Fade Affordance (desktop only) */}
        <div
          className={`hidden md:block absolute left-4 top-0 bottom-0 w-8 bg-gradient-to-r from-cream-bg to-transparent pointer-events-none z-20 transition-opacity duration-300 ${
            showLeftFade ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Horizontal Scrollable Container on desktop, Wrap aligned grid on mobile */}
        <div
          ref={navRef}
          className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-2 overflow-x-visible md:overflow-x-auto md:overflow-y-hidden scroll-smooth no-scrollbar snap-x-proximity py-1"
          style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
        >
          {categoryIds.map((id) => {
            const isActive = activeId === id;
            const isProtein = ["protein-diet", "protein-shakes"].includes(id);

            return (
              <motion.button
                key={id}
                data-id={id}
                onClick={() => handleTabClick(id)}
                animate={
                  isProtein && !isActive
                    ? {
                        boxShadow: [
                          "0 0 6px rgba(16,185,129,0.3)",
                          "0 0 14px rgba(16,185,129,0.65)",
                          "0 0 6px rgba(16,185,129,0.3)"
                        ],
                        borderColor: [
                          "rgba(16,185,129,0.3)",
                          "rgba(16,185,129,0.8)",
                          "rgba(16,185,129,0.3)"
                        ]
                      }
                    : {}
                }
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut" as const
                }}
                className={`relative snap-start shrink-0 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 select-none cursor-pointer focus:outline-none flex items-center justify-center border overflow-hidden active:scale-95 ${
                  isActive
                    ? isProtein
                      ? "bg-forest-green text-cream-bg border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.7)]"
                      : "bg-forest-green text-cream-bg border-forest-green shadow-[0_4px_12px_rgba(27,67,50,0.15)]"
                    : isProtein
                    ? "bg-emerald-50/45 border-emerald-500/50 text-emerald-700"
                    : "bg-white border-gold/15 text-forest-green"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className={`absolute inset-0 rounded-full ${
                      isProtein
                        ? "bg-forest-green border border-emerald-400/50"
                        : "bg-forest-green border border-forest-green"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive 
                      ? "text-cream-bg" 
                      : isProtein
                      ? "text-emerald-700 hover:text-emerald-950 font-extrabold"
                      : "text-forest-green hover:text-[#25684C]"
                  }`}
                >
                  {getShortLabel(id)}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Right Gradient Fade Affordance (desktop only) */}
        <div
          className={`hidden md:block absolute right-4 top-0 bottom-0 w-8 bg-gradient-to-l from-cream-bg to-transparent pointer-events-none z-20 transition-opacity duration-300 ${
            showRightFade ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
