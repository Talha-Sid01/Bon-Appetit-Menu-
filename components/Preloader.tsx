"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Show the preloader for 1.8 seconds, then hide it
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream-bg bg-cream-pattern pb-8"
        >
          {/* Main Logo Container */}
          <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80">
            {/* SVG Tricolor Drawing Ring */}
            <svg
              className="absolute inset-0 w-full h-full rotate-[-90deg]"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer drawing rings */}
              {/* Green Arc */}
              <motion.circle
                cx="100"
                cy="100"
                r="90"
                stroke="#1B4332"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={565}
                initial={{ strokeDashoffset: 565 }}
                animate={
                  shouldReduceMotion
                    ? { strokeDashoffset: 0 }
                    : { strokeDashoffset: 376 } // Draws 1/3 of the circle
                }
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              {/* Gold/White Arc (Tricolor middle represented by gold for brand style) */}
              <motion.circle
                cx="100"
                cy="100"
                r="90"
                stroke="#C89B3C"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={565}
                initial={{ strokeDashoffset: 565 }}
                animate={
                  shouldReduceMotion
                    ? { strokeDashoffset: 0 }
                    : { strokeDashoffset: 188 } // Draws 2/3
                }
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              />
              {/* Red Arc */}
              <motion.circle
                cx="100"
                cy="100"
                r="90"
                stroke="#C1272D"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={565}
                initial={{ strokeDashoffset: 565 }}
                animate={
                  shouldReduceMotion
                    ? { strokeDashoffset: 0 }
                    : { strokeDashoffset: 0 } // Draws full circle
                }
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
              />
            </svg>

            {/* Inner Logo Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.5 }
                  : { type: "spring", damping: 15, stiffness: 80, delay: 0.1 }
              }
              className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden bg-white shadow-[0_0_35px_rgba(200,155,60,0.45)] flex items-center justify-center p-4 border border-gold/35"
            >
              <Image
                src="/images/logo.png"
                alt="Bon Appétit Logo"
                fill
                priority
                sizes="(max-width: 768px) 192px, 240px"
                className="object-contain p-2"
              />
            </motion.div>
          </div>

          {/* Tagline / Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="mt-8 text-center"
          >
            <h2 className="font-display text-2xl font-bold tracking-wider text-forest-green">
              Bon Appétit
            </h2>
            <p className="mt-2 text-xs md:text-sm font-semibold tracking-[0.25em] text-italian-red uppercase font-sans">
              Fatto con Amore
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
