"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Coffee, Leaf, Wheat, Sparkles } from "lucide-react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Re-trigger complete after 1.8 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // Float animation variant for orbiting icons
  const orbitVariants = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: (custom: number) => ({
      opacity: 0.15,
      scale: 1,
      y: [0, -12, 0],
      x: [0, 8, 0],
      transition: {
        opacity: { delay: 1.0, duration: 0.5 },
        scale: { delay: 1.0, duration: 0.5 },
        y: {
          repeat: Infinity,
          duration: 3 + custom,
          ease: "easeInOut" as const,
        },
        x: {
          repeat: Infinity,
          duration: 4 + custom,
          ease: "easeInOut" as const,
        }
      }
    })
  };

  // Preloader main container exit variant (Circle Wipe vs Fade)
  const exitVariant = shouldReduceMotion
    ? { opacity: 0, transition: { duration: 0.4 } }
    : {
        clipPath: "circle(0% at 50% 50%)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }
      };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ clipPath: "circle(100% at 50% 50%)", opacity: 1 }}
          exit={exitVariant}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream-bg bg-cream-pattern pb-8 select-none"
        >
          {/* Orbiting Line Icons */}
          {!shouldReduceMotion && (
            <>
              <motion.div
                custom={0}
                variants={orbitVariants}
                initial="hidden"
                animate="visible"
                className="absolute top-1/4 left-1/4 text-forest-green"
              >
                <Coffee className="w-8 h-8 stroke-[1.2]" />
              </motion.div>
              <motion.div
                custom={0.8}
                variants={orbitVariants}
                initial="hidden"
                animate="visible"
                className="absolute top-1/4 right-1/4 text-forest-green"
              >
                <Wheat className="w-8 h-8 stroke-[1.2]" />
              </motion.div>
              <motion.div
                custom={1.6}
                variants={orbitVariants}
                initial="hidden"
                animate="visible"
                className="absolute bottom-1/3 left-1/5 text-forest-green"
              >
                <Leaf className="w-8 h-8 stroke-[1.2]" />
              </motion.div>
              <motion.div
                custom={2.4}
                variants={orbitVariants}
                initial="hidden"
                animate="visible"
                className="absolute bottom-1/3 right-1/5 text-forest-green"
              >
                <Sparkles className="w-8 h-8 stroke-[1.2]" />
              </motion.div>
            </>
          )}

          {/* Main Logo Container */}
          <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80">
            {/* SVG Tricolor Drawing Ring */}
            <svg
              className="absolute inset-0 w-full h-full rotate-[-90deg]"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer drawing rings painted in sequence */}
              {/* Gold Ring Segment (drawn first) */}
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
                    : { strokeDashoffset: 188 } // Paints 2/3 of ring
                }
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              {/* Green Ring Segment (drawn second) */}
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
                    : { strokeDashoffset: 376 } // Paints 1/3 of ring
                }
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
              />

              {/* Red Ring Segment (drawn third) */}
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
                    : { strokeDashoffset: 0 } // Completes the circle painting
                }
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.8 }}
              />
            </svg>

            {/* Ripple Gold Ring Behind the Logo Card */}
            {!shouldReduceMotion && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0, 0.4, 0],
                  scale: [1, 1.25, 1.45],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeOut",
                  delay: 1.4,
                }}
                className="absolute w-48 h-48 md:w-60 md:h-60 rounded-full border border-gold/45 pointer-events-none shadow-[0_0_20px_rgba(200,155,60,0.3)] bg-gradient-to-tr from-gold/5 via-gold/15 to-transparent flex items-center justify-center -z-10"
              />
            )}

            {/* Inner Logo Image (Springs in during Stage 2) */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                boxShadow: "0 0 15px rgba(200,155,60,0.2)"
              }}
              animate={{
                opacity: 1,
                scale: 1,
                boxShadow: [
                  "0 0 15px rgba(200,155,60,0.25)",
                  "0 0 50px rgba(200,155,60,0.85)",
                  "0 0 15px rgba(200,155,60,0.25)"
                ]
              }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.4, delay: 0.5 }
                  : {
                      scale: { type: "spring", damping: 12, stiffness: 75, delay: 0.9 },
                      opacity: { duration: 0.4, delay: 0.9 },
                      boxShadow: {
                        repeat: Infinity,
                        duration: 2.5,
                        ease: "easeInOut" as const,
                        delay: 1.4
                      }
                    }
              }
              className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden bg-white flex items-center justify-center p-4 border border-gold/35 z-10"
            >
              {/* Image content */}
              <Image
                src="/images/logo.png"
                alt="Bon Appétit Logo"
                fill
                priority
                sizes="(max-width: 768px) 192px, 240px"
                className="object-contain p-2"
              />

              {/* Shimmer / light-sweep overlay (Stage 3) */}
              {!shouldReduceMotion && (
                <div 
                  className="absolute inset-0 pointer-events-none overflow-hidden rounded-full"
                  style={{ maskImage: "radial-gradient(circle, white 100%, transparent 100%)" }}
                >
                  {/* Diagonal shimmer bar sliding across */}
                  <motion.div
                    initial={{ left: "-150%" }}
                    animate={{ left: "150%" }}
                    transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
                    className="absolute top-0 bottom-0 w-2/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg]"
                  />
                </div>
              )}
            </motion.div>
          </div>

          {/* Tagline / Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
            className="mt-8 text-center"
          >
            <h2 className="font-display text-2xl font-bold tracking-wider text-forest-green">
              Bon Appétit
            </h2>
            <p className="mt-2 text-xs md:text-sm font-semibold tracking-[0.25em] text-italian-red uppercase font-sans">
              Fatto con Amore
            </p>
          </motion.div>

          {/* Thin Progress Indicator at the bottom */}
          <div className="absolute bottom-10 left-10 right-10 max-w-xs mx-auto h-[1.5px] bg-gold/15 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="h-full bg-gold"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
