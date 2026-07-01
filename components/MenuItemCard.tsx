"use client";

import { MenuItem } from "@/data/menu";
import { motion } from "framer-motion";
import { Sparkles, Heart, Medal, Flame } from "lucide-react";

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  // Determine badge styling based on tag (boosted saturation & glows for dark mode)
  const getBadgeConfig = (tag: string) => {
    switch (tag.toLowerCase()) {
      case "chef's pick":
        return {
          bg: "bg-[#D9B15C] text-[#0F1912] border border-[#D9B15C]/35 shadow-[0_0_10px_rgba(217,177,92,0.35)]",
          icon: <Sparkles className="w-3.5 h-3.5 mr-1 text-[#0F1912]" />,
          label: "Chef's Pick"
        };
      case "best seller":
        return {
          bg: "bg-forest-green text-[#FAF6EE] border border-[#D9B15C]/35 shadow-[0_0_10px_rgba(27,67,50,0.6)]",
          icon: <Heart className="w-3.5 h-3.5 mr-1 fill-current text-[#D9B15C]" />,
          label: "Best Seller"
        };
      case "most ordered":
        return {
          bg: "bg-[#1B4332] text-[#FAF6EE] border border-[#D9B15C]/35 shadow-[0_0_10px_rgba(27,67,50,0.6)]",
          icon: <Medal className="w-3.5 h-3.5 mr-1 text-[#D9B15C]" />,
          label: "Most Ordered"
        };
      case "highest protein":
        return {
          bg: "bg-[#C1272D] text-[#FAF6EE] border border-red-500/35 shadow-[0_0_10px_rgba(193,39,45,0.45)]",
          icon: <Flame className="w-3.5 h-3.5 mr-1 animate-pulse text-[#FAF6EE]" />,
          label: "Highest Protein"
        };
      default:
        return {
          bg: "bg-forest-green/20 text-[#FAF6EE] border border-forest-green/30",
          icon: null,
          label: tag
        };
    }
  };

  const isCustomShake = item.name === "Custom Protein Shake";

  return (
    <div className="relative group bg-[#1B2A20] rounded-2xl p-5 shadow-md hover:shadow-[0_0_22px_rgba(217,177,92,0.2)] hover:-translate-y-1 transition-all duration-300 border border-[rgba(200,155,60,0.25)] hover:border-[#D9B15C]/60 flex flex-col justify-between overflow-hidden h-full">
      
      {/* Decorative background accent on hover */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D9B15C]/5 rounded-bl-full transition-all duration-500 group-hover:scale-150 -z-0 pointer-events-none" />

      {/* Top Section: Badges & Tags */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 z-10 relative">
        {/* Protein Tag */}
        {item.protein ? (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
            {item.protein.includes("PROTEIN") ? item.protein : `${item.protein} PROTEIN`}
          </span>
        ) : (
          <div /> // Spacing spacer
        )}

        {/* Brand Ribbon Badge */}
        {item.tag && (
          <motion.span
            animate={
              ["best seller", "most ordered"].includes(item.tag.toLowerCase())
                ? {
                    scale: [1, 1.04, 1],
                    boxShadow: [
                      "0 0 4px rgba(217,177,92,0.1)",
                      "0 0 12px rgba(217,177,92,0.45)",
                      "0 0 4px rgba(217,177,92,0.1)",
                    ],
                  }
                : {}
            }
            transition={{
              repeat: Infinity,
              duration: 3.2,
              ease: "easeInOut",
            }}
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-sm ${getBadgeConfig(item.tag).bg}`}
          >
            {getBadgeConfig(item.tag).icon}
            {getBadgeConfig(item.tag).label}
          </motion.span>
        )}
      </div>

      {/* Middle Section: Title, Leader, Price */}
      <div className="z-10 relative mb-2 flex-grow">
        <div className="flex items-baseline justify-between gap-1 w-full">
          <h4 className="font-display text-base md:text-lg font-bold text-[#F3EDDD] tracking-wide group-hover:text-[#D9B15C] transition-colors duration-300">
            {item.name}
          </h4>
          <span className="flex-grow border-b border-dotted border-[rgba(200,155,60,0.3)] mx-2 mb-1 group-hover:border-[#D9B15C]/60 transition-colors duration-300" />
          <span className="font-sans text-base md:text-lg font-bold text-[#D9B15C] shrink-0">
            ₹{item.price}
            {isCustomShake && <span className="text-[10px] md:text-xs font-semibold text-[#9BA89B] ml-0.5"> onwards</span>}
          </span>
        </div>

        {/* Description */}
        {item.description && (
          <p className="mt-2.5 text-xs md:text-sm text-[#9BA89B] leading-relaxed italic font-sans pr-2">
            {item.description}
          </p>
        )}
      </div>

      {/* Accent Line on Card Bottom */}
      <div className="w-12 h-0.5 bg-[#D9B15C]/35 group-hover:w-full transition-all duration-500 ease-out mt-4 z-10" />
    </div>
  );
}
