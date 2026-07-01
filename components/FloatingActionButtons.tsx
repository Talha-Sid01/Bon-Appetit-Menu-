"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Instagram } from "lucide-react";
import Image from "next/image";

export default function FloatingActionButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show buttons after scrolling past 300px (roughly past the Hero)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed right-4 bottom-safe z-40 flex flex-col gap-3 select-none">
          
          {/* Call Button */}
          <motion.a
            href="tel:+919892350065"
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex items-center justify-center w-12 h-12 bg-forest-green text-cream-bg rounded-full shadow-[0_0_15px_rgba(27,67,50,0.5)] hover:shadow-[0_0_20px_rgba(27,67,50,0.8)] border border-gold/20 hover:bg-[#25684C] transition-all duration-300"
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
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
      )}
    </AnimatePresence>
  );
}
