"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight,
  MessageSquare,
  Compass,
  Instagram
} from "lucide-react";

import { menuCategories } from "@/data/menu";
import Preloader from "@/components/Preloader";
import CategorySection from "@/components/CategorySection";
import StickyCategoryNav from "@/components/StickyCategoryNav";
import TrustBadges from "@/components/TrustBadges";
import FloatingActionButtons from "@/components/FloatingActionButtons";

export default function Home() {
  const [isPreloading, setIsPreloading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Address and Map settings
  const phoneNo = "+919892350065";
  const addressText = "Shop No. 12, Vasant Nagar, Opp Evershine Mall, Chincholi Bunder, Malad (W), Mumbai - 400064";
  const mapEmbedUrl = "https://maps.google.com/maps?q=Shop%20No.%2012,%20Vasant%20Nagar,%20Opp%20Evershine%20Mall,%20Chincholi%20Bunder,%20Malad%20(W),%20Mumbai%20-%20400064&output=embed";
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressText)}`;

  // Header scroll class adjustments
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categoryIds = menuCategories.map((cat) => cat.id);

  return (
    <>
      {/* 1. Preloader Screen */}
      <Preloader onComplete={() => setIsPreloading(false)} />

      {/* Main Website Wrapper */}
      <div className={`transition-opacity duration-700 ${isPreloading ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        
        {/* 2. Sticky Header */}
        <header
          className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-gold/15"
              : "bg-cream-bg/90 backdrop-blur-sm py-4 border-b border-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            {/* Left: Logo & Wordmark */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold/20 bg-white">
                <Image
                  src="/images/logo.png"
                  alt="Bon Appétit Badge"
                  fill
                  sizes="40px"
                  className="object-contain p-0.5 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="font-display text-lg md:text-xl font-black tracking-widest text-forest-green uppercase">
                Bon Appétit
              </span>
            </a>

            {/* Right: Contact Call, Instagram, and Whatsapp Buttons */}
            <div className="flex items-center gap-2">
              <motion.a
                href={`tel:${phoneNo}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider text-cream-bg bg-forest-green hover:bg-forest-green/95 hover:shadow-[0_0_10px_rgba(27,67,50,0.4)] transition-all duration-300 border border-gold/10"
              >
                <Phone className="w-3.5 h-3.5 fill-current text-cream-bg" />
                <span className="hidden md:inline">Call</span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/bon_appetit.cafe?igsh=MWFxZXVkeHVwNHF2"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider text-white bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] transition-all duration-300 shadow-[0_0_10px_rgba(238,42,123,0.5)] hover:shadow-[0_0_15px_rgba(238,42,123,0.85)]"
              >
                <Instagram className="w-3.5 h-3.5 text-white" />
                <span className="hidden md:inline">Instagram</span>
              </motion.a>
              <motion.a
                href={`https://wa.me/${phoneNo.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider text-[#128C7E] bg-white transition-all duration-300 shadow-[0_0_10px_rgba(37,211,102,0.3)] hover:shadow-[0_0_15px_rgba(37,211,102,0.6)] border border-emerald-100"
              >
                <div className="relative w-4.5 h-4.5 shrink-0">
                  <Image
                    src="/images/whatsapp-icon.png"
                    fill
                    sizes="18px"
                    alt="WhatsApp"
                    className="object-contain"
                  />
                </div>
                <span className="hidden md:inline">WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </header>

        {/* 3. Hero Section */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-cream-bg bg-cream-pattern relative overflow-hidden flex flex-col items-center text-center px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60 pointer-events-none" />

          {/* Dumbbells/Café accents decoration on large screens */}
          <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 opacity-[0.03] pointer-events-none">
            <svg className="w-48 h-48 text-forest-green fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
              <path d="M6.5 6.5H4C2.9 6.5 2 7.4 2 8.5V15.5C2 16.6 2.9 17.5 4 17.5H6.5V6.5Z" />
              <path d="M17.5 6.5H20C21.1 6.5 22 7.4 22 8.5V15.5C22 16.6 21.1 17.5 20 17.5H17.5V6.5Z" />
              <path d="M6.5 12H17.5" strokeWidth="3" />
            </svg>
          </div>
          <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 opacity-[0.03] pointer-events-none">
            <svg className="w-48 h-48 text-forest-green fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
              <path d="M17 8H19C20.1 8 21 8.9 21 10V12C21 13.1 20.1 14 19 14H17" />
              <path d="M3 8H17V16C17 18.2 15.2 20 13 20H7C4.8 20 3 18.2 3 16V8Z" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto z-10 relative flex flex-col items-center">
            
            {/* Center Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden bg-white shadow-lg border-2 border-gold/30 p-2 flex items-center justify-center mb-6"
            >
              <Image
                src="/images/logo.png"
                alt="Bon Appétit Brand Emblem"
                fill
                priority
                sizes="(max-width: 768px) 144px, 176px"
                className="object-contain p-1"
              />
            </motion.div>

            {/* Arched text style headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-black text-forest-green tracking-tight leading-none"
            >
              Let's Eat With
              <span className="block mt-2 text-gold font-bold text-3xl md:text-5xl">Bon Appétit</span>
            </motion.h1>

            {/* Sub-tagline from posters */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-sm md:text-base font-extrabold uppercase tracking-widest text-italian-red font-sans"
            >
              Artisan Café • Gourmet Kitchen • Desserts
            </motion.h2>

            {/* Flourished divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center gap-3 w-48 my-4 text-gold"
            >
              <span className="text-sm">»»»</span>
              <span className="font-display italic text-xs font-semibold tracking-widest text-forest-green">Fatto con Amore</span>
              <span className="text-sm">«««</span>
            </motion.div>

            {/* Secondary Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-lg md:text-xl font-medium tracking-wide text-ink/80 italic max-w-lg"
            >
              "Freshly Crafted • Served with Love"
            </motion.p>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  const el = document.getElementById("savouries");
                  if (el) {
                    const yOffset = -120;
                    const yPosition = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: yPosition, behavior: "smooth" });
                  }
                }}
                className="px-8 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase text-cream-bg bg-forest-green border border-gold/30 shadow-md hover:bg-forest-green/90 transition-all duration-300 cursor-pointer animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                View Full Menu
              </motion.button>
            </motion.div>

            {/* Quick Contact & Info Footer row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-col md:flex-row gap-y-4 gap-x-8 text-xs text-ink/70 font-semibold tracking-wider uppercase font-sans border-t border-gold/15 pt-6 w-full max-w-2xl justify-center"
            >
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 hover:text-italian-red transition-colors duration-300"
              >
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>Malad (W), Mumbai</span>
              </a>
              <a
                href={`tel:${phoneNo}`}
                className="flex items-center justify-center gap-1.5 hover:text-italian-red transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>+91 98923 50065</span>
              </a>
              <div className="flex items-center justify-center gap-1.5">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>Open Daily</span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 4. Sticky Category Navigation */}
        <StickyCategoryNav categoryIds={categoryIds} />

        {/* 5. Menu Sections */}
        <main className="bg-[#0F1912] overflow-hidden">
          {menuCategories.map((category, index) => (
            <CategorySection key={category.id} category={category} index={index} />
          ))}
        </main>

        {/* 6. Why Bon Appétit Trust Badges Strip (Mid-page) */}
        <TrustBadges condensed={false} />

        {/* 7. Location & Contact Section */}
        <section id="contact" className="py-16 bg-cream-bg bg-cream-pattern relative border-t border-gold/15">
          <div className="max-w-6xl mx-auto px-4">
            
            <div className="text-center mb-10">
              <h3 className="font-display text-2xl md:text-3xl font-black text-forest-green tracking-wider uppercase">
                Find Our Café
              </h3>
              <p className="text-xs text-italian-red font-bold uppercase tracking-widest mt-1">
                Eat Clean • Fuel Better • Fatto con Amore
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Map Iframe */}
              <div className="w-full h-80 lg:h-auto min-h-[320px] rounded-2xl overflow-hidden border-2 border-gold/20 shadow-md relative bg-white">
                <iframe
                  title="Bon Appétit Café Location"
                  src={mapEmbedUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Contact Card Details */}
              <div className="bg-white rounded-2xl p-8 border border-gold/15 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex gap-3 mb-6 items-start">
                    <MapPin className="w-5 h-5 text-italian-red shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-extrabold text-forest-green text-lg">Address</h4>
                      <p className="text-ink/80 text-sm mt-1 select-all font-sans font-medium leading-relaxed">
                        {addressText}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 mb-6 items-start">
                    <Phone className="w-5 h-5 text-italian-red shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-extrabold text-forest-green text-lg">Contact Number</h4>
                      <p className="text-ink/80 text-sm mt-1 select-all font-sans font-medium">
                        +91 98923 50065
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Clock className="w-5 h-5 text-italian-red shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-extrabold text-forest-green text-lg">Café Availability</h4>
                      <p className="text-ink/80 text-sm mt-1 font-sans font-medium">
                        Dine-in • Takeaway • Fit Nutrition Board
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <motion.a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-forest-green text-cream-bg hover:bg-forest-green/95 border border-gold/25 font-bold text-sm tracking-wider uppercase transition-all duration-300"
                  >
                    <Compass className="w-4 h-4 shrink-0" />
                    Get Directions
                  </motion.a>
                  <motion.a
                    href={`tel:${phoneNo}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-forest-green text-forest-green hover:bg-forest-green/5 font-bold text-sm tracking-wider uppercase transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 shrink-0 fill-current" />
                    Call Café
                  </motion.a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 8. Footer Section */}
        <footer className="bg-forest-green text-cream-bg pt-12 pb-6 border-t-2 border-gold/20 select-none">
          <div className="max-w-7xl mx-auto px-4">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-center md:text-left">
              {/* Col 1: Brand & Logo */}
              <div className="flex flex-col items-center md:items-start">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white shadow-md border border-gold/20 p-2 flex items-center justify-center mb-4">
                  <Image
                    src="/images/logo.png"
                    alt="Bon Appétit Badge Logo"
                    fill
                    sizes="64px"
                    className="object-contain p-1"
                  />
                </div>
                <h4 className="font-display text-xl font-black tracking-widest uppercase">
                  Bon Appétit
                </h4>
                <p className="mt-2 text-xs italic text-cream-bg/70 max-w-xs font-sans">
                  "Let's Eat With Bon Appétit — Fatto con Amore." Handcrafted artisan café blends meeting clean gym-focused nutrition in Mumbai.
                </p>
                {/* Social Links with subtle brand glows */}
                <div className="mt-4 flex items-center justify-center md:justify-start gap-3">
                  <a
                    href="https://www.instagram.com/bon_appetit.cafe?igsh=MWFxZXVkeHVwNHF2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full border border-white/15 transition-all duration-300 hover:shadow-[0_0_10px_rgba(238,42,123,0.5)] hover:scale-105 group"
                    aria-label="Instagram Profile"
                  >
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={`https://wa.me/${phoneNo.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-white/10 hover:bg-white/20 rounded-full border border-white/15 transition-all duration-300 hover:shadow-[0_0_10px_rgba(37,211,102,0.5)] hover:scale-105 group flex items-center justify-center"
                    aria-label="WhatsApp Chat"
                  >
                    <div className="relative w-5 h-5">
                      <Image
                        src="/images/whatsapp-icon.png"
                        fill
                        sizes="20px"
                        alt="WhatsApp"
                        className="object-contain"
                      />
                    </div>
                  </a>
                </div>
              </div>

              {/* Col 2: Categories Nav Quicklinks */}
              <div className="flex flex-col items-center md:items-start">
                <h5 className="font-display font-extrabold text-gold text-sm tracking-widest uppercase mb-4">
                  Quick Navigation
                </h5>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider text-cream-bg/85 font-sans">
                  {menuCategories.slice(0, 8).map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        const el = document.getElementById(cat.id);
                        if (el) {
                          const yOffset = -120;
                          const yPosition = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: yPosition, behavior: "smooth" });
                        }
                      }}
                      className="text-left hover:text-gold transition-colors duration-300 flex items-center gap-1"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-italian-red shrink-0" />
                      <span>{cat.title.split("/")[0].trim()}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Col 3: Outlet Info */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h5 className="font-display font-extrabold text-gold text-sm tracking-widest uppercase mb-4">
                  Outlet Address
                </h5>
                <p className="text-xs text-cream-bg/80 leading-relaxed font-sans font-medium mb-3">
                  Shop No. 12, Vasant Nagar,<br />
                  Opp Evershine Mall, Chincholi Bunder,<br />
                  Malad (W), Mumbai - 400064
                </p>
                <div className="text-xs font-bold text-italian-red uppercase tracking-widest mt-1">
                  Tagline: Eat Right • Live Strong
                </div>
              </div>
            </div>

            {/* Condensed Trust Badges inside footer */}
            <div className="my-6">
              <TrustBadges condensed={true} />
            </div>

            {/* Bottom Copyright and wordmark info */}
            <div className="border-t border-cream-bg/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-cream-bg/60 font-sans">
                © {new Date().getFullYear()} Bon Appétit. All Rights Reserved.
              </span>
              <span className="text-xs font-display italic text-gold tracking-widest font-semibold">
                Fatto con Amore • Freshly Crafted
              </span>
            </div>

          </div>
        </footer>

        {/* 9. Floating Action Buttons (stacked, bottom-right) */}
        <FloatingActionButtons />

      </div>
    </>
  );
}
