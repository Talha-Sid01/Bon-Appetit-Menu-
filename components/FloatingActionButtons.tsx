"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Instagram, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function FloatingActionButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkZone, setIsDarkZone] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Show floating actions after scrolling past 300px
      if (scrollPos > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Detect if viewport is in the dark menu zone:
      // Scrolled past Hero (~450px) and before the footer zone (~750px from bottom)
      if (scrollPos > 450 && scrollPos < docHeight - windowHeight - 750) {
        setIsDarkZone(true);
      } else {
        setIsDarkZone(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const interacted = localStorage.getItem("bon_appetit_floating_interacted");
      if (interacted === "true") {
        setHasInteracted(true);
      }
    }
  }, []);

  const handleInteraction = () => {
    localStorage.setItem("bon_appetit_floating_interacted", "true");
    setHasInteracted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // periodic bounce transitions for call and whatsapp to invite interaction
  const callAnimate = !hasInteracted
    ? {
        scale: 1,
        opacity: 1,
        y: [0, -10, 0, -6, 0, 0],
        transition: {
          y: {
            repeat: Infinity,
            repeatDelay: 6.0,
            duration: 1.5,
            ease: "easeInOut" as const,
            delay: 1.5,
          },
          scale: { type: "spring" as const, stiffness: 260, damping: 20 },
          opacity: { duration: 0.2 },
        }
      }
    : { scale: 1, opacity: 1, y: 0 };

  const whatsappAnimate = !hasInteracted
    ? {
        scale: 1,
        opacity: 1,
        y: [0, -10, 0, -6, 0, 0],
        transition: {
          y: {
            repeat: Infinity,
            repeatDelay: 6.0,
            duration: 1.5,
            ease: "easeInOut" as const,
            delay: 2.2, // Staggered relative to Call button
          },
          scale: { type: "spring" as const, stiffness: 260, damping: 20, delay: 0.1 },
          opacity: { duration: 0.2, delay: 0.1 },
        }
      }
    : { scale: 1, opacity: 1, y: 0 };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Back-To-Top Button (Bottom Left) */}
          <motion.button
            key="back-to-top"
            onClick={scrollToTop}
            initial={{ scale: 0, opacity: 0, x: -20 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0, opacity: 0, x: -20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className={`fixed left-4 bottom-6 z-40 flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 cursor-pointer ${
              isDarkZone
                ? "bg-[#1B2A20] border-[#D9B15C]/40 text-[#FAF6EE] shadow-[0_0_15px_rgba(217,177,92,0.25)] hover:shadow-[0_0_22px_rgba(217,177,92,0.45)] hover:border-[#D9B15C]/75"
                : "bg-white border-gold/25 text-forest-green shadow-[0_4px_15px_rgba(27,67,50,0.12)] hover:shadow-[0_4px_22px_rgba(27,67,50,0.22)]"
            }`}
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </motion.button>

          {/* Social CTAs (Bottom Right) */}
          <div className="fixed right-4 bottom-6 z-40 flex flex-col gap-3 select-none">
            
            {/* Call Button */}
            <motion.a
              href="tel:+919892350065"
              onClick={handleInteraction}
              initial={{ scale: 0, opacity: 0 }}
              animate={callAnimate}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center w-12 h-12 bg-forest-green text-cream-bg rounded-full shadow-[0_0_18px_rgba(27,67,50,0.6)] hover:shadow-[0_0_25px_rgba(27,67,50,0.95)] border border-gold/20 hover:bg-[#25684C] transition-all duration-300"
              aria-label="Call Bon Appétit"
            >
              <Phone className="w-5 h-5 fill-current text-cream-bg" />
            </motion.a>

            {/* Instagram Button */}
            <motion.a
              href="https://www.instagram.com/bon_appetit.cafe?igsh=MWFxZXVkeHVwNHF2"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.05 }}
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full shadow-[0_0_15px_rgba(238,42,123,0.6)] hover:shadow-[0_0_22px_rgba(238,42,123,0.9)] transition-all duration-300"
              aria-label="Follow on Instagram"
            >
              <Instagram className="w-5.5 h-5.5 stroke-[2] text-white" />
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/919892350065?text=Hi%20Bon%20Appétit!%20I'm%20browsing%20the%20digital%20menu%20and%20had%20a%20question..."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleInteraction}
              initial={{ scale: 0, opacity: 0 }}
              animate={whatsappAnimate}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center w-12 h-12 rounded-full shadow-[0_0_18px_rgba(37,211,102,0.75)] hover:shadow-[0_0_25px_rgba(37,211,102,1)] transition-all duration-300 overflow-hidden"
              aria-label="Message on WhatsApp"
            >
              <Image
                src="/images/whatsapp-icon.png"
                width={48}
                height={48}
                alt="WhatsApp"
                className="object-cover rounded-full"
              />
            </motion.a>

          </div>
        </>
      )}
    </AnimatePresence>
  );
}
