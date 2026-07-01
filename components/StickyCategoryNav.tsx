"use client";

import { useEffect, useState, useRef } from "react";
import { menuCategories } from "@/data/menu";

interface StickyCategoryNavProps {
  categoryIds: string[];
}

export default function StickyCategoryNav({ categoryIds }: StickyCategoryNavProps) {
  const [activeId, setActiveId] = useState<string>("");
  const navRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);

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

  useEffect(() => {
    // Set initial active state to first category
    if (categoryIds.length > 0) {
      setActiveId(categoryIds[0]);
    }

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px", // Focus observation on upper-middle third of screen
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Avoid shifting active tab if scroll was triggered by button click
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

  // Center active tab inside horizontal scrolling navigation container
  useEffect(() => {
    if (!activeId || !navRef.current) return;

    const activeEl = navRef.current.querySelector(`[data-id="${activeId}"]`);
    if (!activeEl) return;

    const container = navRef.current;
    const containerWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    
    const activeLeft = (activeEl as HTMLElement).offsetLeft;
    const activeWidth = (activeEl as HTMLElement).offsetWidth;

    // Calculate scroll target to center the tab
    const targetScroll = activeLeft - containerWidth / 2 + activeWidth / 2;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  }, [activeId]);

  const handleTabClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    isClickScrolling.current = true;
    setActiveId(id);

    // Smooth scroll to element
    const yOffset = -100; // Account for sticky header + nav height
    const yPosition = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: "smooth",
    });

    // Re-enable IntersectionObserver scroll tracking after scrolling finishes
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  return (
    <div className="sticky top-[73px] z-30 w-full bg-cream-bg/95 backdrop-blur-md border-b border-gold/15 py-3 shadow-sm select-none">
      <div
        ref={navRef}
        className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto px-4 no-scrollbar snap-x-mandatory"
      >
        {categoryIds.map((id) => {
          const isActive = activeId === id;
          return (
            <button
              key={id}
              data-id={id}
              onClick={() => handleTabClick(id)}
              className={`snap-start shrink-0 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                isActive
                  ? "bg-forest-green text-cream-bg shadow-sm border border-forest-green"
                  : "bg-white text-forest-green hover:bg-forest-green/5 border border-gold/15"
              }`}
            >
              {getShortLabel(id)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
