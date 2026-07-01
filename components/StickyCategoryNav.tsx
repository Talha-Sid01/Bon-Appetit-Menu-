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

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

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
    <div className="sticky top-[73px] z-30 w-full bg-[#0F1912]/95 backdrop-blur-md border-b border-gold/10 py-3 shadow-md select-none">
      <div className="relative max-w-7xl mx-auto px-4">
        
        {/* Left Gradient Fade Affordance */}
        <div
          className={`absolute left-4 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0F1912] to-transparent pointer-events-none z-20 transition-opacity duration-300 ${
            showLeftFade ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Horizontal Scrollable Container */}
        <div
          ref={navRef}
          className="flex items-center gap-2.5 overflow-x-auto overflow-y-hidden flex-nowrap scroll-smooth no-scrollbar snap-x-proximity"
          style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
        >
          {categoryIds.map((id) => {
            const isActive = activeId === id;
            return (
              <button
                key={id}
                data-id={id}
                onClick={() => handleTabClick(id)}
                className={`relative snap-start shrink-0 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 select-none cursor-pointer focus:outline-none flex items-center justify-center border border-gold/15 overflow-hidden bg-[#1B2A20] active:scale-95`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-forest-green border border-[#D9B15C]/45 rounded-full shadow-[0_0_12px_rgba(27,67,50,0.6)]"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive ? "text-[#FAF6EE]" : "text-[#9BA89B] hover:text-[#FAF6EE]"
                  }`}
                >
                  {getShortLabel(id)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Gradient Fade Affordance */}
        <div
          className={`absolute right-4 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0F1912] to-transparent pointer-events-none z-20 transition-opacity duration-300 ${
            showRightFade ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
