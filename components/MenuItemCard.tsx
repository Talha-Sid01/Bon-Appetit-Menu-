"use client";

import { MenuItem } from "@/data/menu";
import { motion } from "framer-motion";
import { Sparkles, Heart, Medal, Flame } from "lucide-react";

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  // Determine badge styling based on tag
  const getBadgeConfig = (tag: string) => {
    switch (tag.toLowerCase()) {
      case "chef's pick":
        return {
          bg: "bg-[#C89B3C] text-white",
          icon: <Sparkles className="w-3.5 h-3.5 mr-1" />,
          label: "Chef's Pick"
        };
      case "best seller":
        return {
          bg: "bg-[#1B4332] text-[#FAF6EE] border border-gold/20",
          icon: <Heart className="w-3.5 h-3.5 mr-1 fill-current text-gold" />,
          label: "Best Seller"
        };
      case "most ordered":
        return {
          bg: "bg-forest-green text-white",
          icon: <Medal className="w-3.5 h-3.5 mr-1 text-gold" />,
          label: "Most Ordered"
        };
      case "highest protein":
        return {
          bg: "bg-[#C1272D] text-white",
          icon: <Flame className="w-3.5 h-3.5 mr-1 animate-pulse" />,
          label: "Highest Protein"
        };
      default:
        return {
          bg: "bg-forest-green/10 text-forest-green",
          icon: null,
          label: tag
        };
    }
  };

  const isCustomShake = item.name === "Custom Protein Shake";

  return (
    <div className="relative group bg-white rounded-2xl p-5 shadow-md hover:shadow-[0_0_20px_rgba(200,155,60,0.15)] transition-all duration-300 border border-gold/30 hover:border-forest-green/45 flex flex-col justify-between overflow-hidden">
      
      {/* Decorative background accent on hover */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full transition-all duration-500 group-hover:scale-150 -z-0" />

      {/* Top Section: Badges & Tags */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 z-10 relative">
        {/* Protein Tag */}
        {item.protein ? (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-50 border border-emerald-100 text-emerald-800 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
            {item.protein.includes("PROTEIN") ? item.protein : `${item.protein} PROTEIN`}
          </span>
        ) : (
          <div /> // Spacing spacer
        )}

        {/* Brand Ribbon Badge */}
        {item.tag && (
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-sm ${getBadgeConfig(item.tag).bg}`}>
            {getBadgeConfig(item.tag).icon}
            {getBadgeConfig(item.tag).label}
          </span>
        )}
      </div>

      {/* Middle Section: Title, Leader, Price */}
      <div className="z-10 relative mb-2">
        <div className="flex items-baseline justify-between gap-1 w-full">
          <h4 className="font-display text-base md:text-lg font-bold text-forest-green tracking-wide group-hover:text-italian-red transition-colors duration-300">
            {item.name}
          </h4>
          <span className="flex-grow border-b border-dotted border-gold/40 mx-2 mb-1 group-hover:border-gold transition-colors duration-300" />
          <span className="font-sans text-base md:text-lg font-bold text-gold shrink-0">
            ₹{item.price}
            {isCustomShake && <span className="text-[10px] md:text-xs font-semibold text-ink/60 ml-0.5"> onwards</span>}
          </span>
        </div>

        {/* Description */}
        {item.description && (
          <p className="mt-2 text-xs md:text-sm text-ink/75 leading-relaxed italic font-sans pr-4">
            {item.description}
          </p>
        )}
      </div>

      {/* Accent Line on Card Bottom */}
      <div className="w-12 h-0.5 bg-gold/30 group-hover:w-full transition-all duration-500 ease-out mt-3" />
    </div>
  );
}
