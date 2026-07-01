"use client";

import { MenuItem } from "@/data/menu";
import { motion } from "framer-motion";
import { Sparkles, Heart, Medal, Flame } from "lucide-react";

interface MenuItemCardProps {
  item: MenuItem;
  iconName: string;
}

// Outlined SVG icons matching the item category
const ItemIcon = ({ name }: { name: string }) => {
  const svgClass = "w-4.5 h-4.5 text-[#D9B15C] stroke-[1.5] fill-none shrink-0";

  switch (name) {
    case "sandwich":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M2 12L12 4L22 12L12 20L2 12Z" stroke="currentColor" />
          <path d="M2 14.5L12 22.5L22 14.5" stroke="currentColor" />
          <path d="M6 12L12 17L18 12" stroke="currentColor" />
        </svg>
      );
    case "salad":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M12 22C17.5228 22 22 17.5228 22 12H2C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" />
          <path d="M12 2V6" stroke="currentColor" />
          <path d="M7 3C8 4.5 9 5 11 5" stroke="currentColor" />
          <path d="M17 3C16 4.5 15 5 13 5" stroke="currentColor" />
        </svg>
      );
    case "beverage":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M17 8H19C20.1 8 21 8.9 21 10V12C21 13.1 20.1 14 19 14H17" stroke="currentColor" />
          <path d="M3 8H17V16C17 18.2 15.2 20 13 20H7C4.8 20 3 18.2 3 16V8Z" stroke="currentColor" />
        </svg>
      );
    case "pasta":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M22 12H2C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12Z" stroke="currentColor" />
          <path d="M4 12C4 8 5 4 8 4" stroke="currentColor" />
          <path d="M8 12C8 7 9 4 12 4" stroke="currentColor" />
          <path d="M12 12C12 7 13 4 16 4" stroke="currentColor" />
        </svg>
      );
    case "toast":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M5 6C5 4.3 6.3 3 8 3H16C17.7 3 19 4.3 19 6C19 6.8 18.7 7.5 18.2 8C19.2 9.5 19.5 11.5 19 13.5C18 17.5 15.2 20.3 12 21C8.8 20.3 6 17.5 5 13.5" stroke="currentColor" />
        </svg>
      );
    case "sweet":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M12 21C16.4183 21 20 17.4183 20 13C20 9 17 6 12 6C7 6 4 9 4 13C4 17.4183 7.58172 21 12 21Z" stroke="currentColor" />
          <path d="M12 6C12.5 4 14 2.5 16 2" stroke="currentColor" />
        </svg>
      );
    case "waffle":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" />
          <path d="M9 3V21" stroke="currentColor" />
          <path d="M15 3V21" stroke="currentColor" />
          <path d="M3 9H21" stroke="currentColor" />
        </svg>
      );
    case "dessert":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M2 19.5H22" stroke="currentColor" />
          <path d="M22 19.5L12 4.5L2 19.5" stroke="currentColor" fill="none" />
          <circle cx="12" cy="4.5" r="1.5" stroke="currentColor" fill="currentColor" />
        </svg>
      );
    case "addon":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M7 6V4C7 2.9 7.9 2 9 2H15C16.1 2 17 2.9 17 4V6" stroke="currentColor" />
          <path d="M5 6H19V12C19 16.4 15.4 20 11 20H13C8.6 20 5 16.4 5 12V6Z" stroke="currentColor" />
        </svg>
      );
    case "dumbbell":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M6.5 6.5H4C2.9 6.5 2 7.4 2 8.5V15.5C2 16.6 2.9 17.5 4 17.5H6.5V6.5Z" stroke="currentColor" />
          <path d="M17.5 6.5H20C21.1 6.5 22 7.4 22 8.5V15.5C22 16.6 21.1 17.5 20 17.5H17.5V6.5Z" stroke="currentColor" />
          <path d="M6.5 12H17.5" stroke="currentColor" strokeWidth="3" />
        </svg>
      );
    case "shake":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M6 21L4 7H20L18 21H6Z" stroke="currentColor" />
          <path d="M7 7L8 3H16L17 7" stroke="currentColor" />
          <path d="M12 3V1" stroke="currentColor" />
        </svg>
      );
    case "bolt":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" />
        </svg>
      );
    default:
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" />
        </svg>
      );
  }
};

export default function MenuItemCard({ item, iconName }: MenuItemCardProps) {
  // Determine badge styling based on tag (clean and visible inside dark green cards)
  const getBadgeConfig = (tag: string) => {
    switch (tag.toLowerCase()) {
      case "chef's pick":
        return {
          bg: "bg-[#C89B3C] text-white border border-[#C89B3C]/20 shadow-[0_0_8px_rgba(200,155,60,0.35)]",
          icon: <Sparkles className="w-3 h-3 mr-1 text-white" />,
          label: "Chef's Pick"
        };
      case "best seller":
        return {
          bg: "bg-white/15 text-[#FAF6EE] border border-white/20 shadow-[0_0_8px_rgba(255,255,255,0.15)]",
          icon: <Heart className="w-3 h-3 mr-1 fill-current text-[#D9B15C]" />,
          label: "Best Seller"
        };
      case "most ordered":
        return {
          bg: "bg-white/15 text-[#FAF6EE] border border-white/20 shadow-[0_0_8px_rgba(255,255,255,0.15)]",
          icon: <Medal className="w-3 h-3 mr-1 text-[#D9B15C]" />,
          label: "Most Ordered"
        };
      case "highest protein":
        return {
          bg: "bg-[#C1272D] text-white border border-red-500/20 shadow-[0_0_8px_rgba(193,39,45,0.45)]",
          icon: <Flame className="w-3 h-3 mr-1 animate-pulse text-white" />,
          label: "Highest Protein"
        };
      default:
        return {
          bg: "bg-white/10 text-white border border-white/15",
          icon: null,
          label: tag
        };
    }
  };

  const isCustomShake = item.name === "Custom Protein Shake";

  return (
    <div className="relative group bg-forest-green rounded-2xl p-5 shadow-md hover:shadow-[0_4px_20px_rgba(27,67,50,0.25)] hover:-translate-y-1 transition-all duration-300 border border-gold/25 hover:border-gold/60 flex flex-col justify-between overflow-hidden h-full">
      
      {/* Decorative background accent on hover */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full transition-all duration-500 group-hover:scale-150 -z-0 pointer-events-none" />

      {/* Top Section: Badges & Tags */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 z-10 relative">
        {/* Protein Tag */}
        {item.protein ? (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/10 border border-white/15 text-[#FAF6EE] shadow-sm">
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
                    scale: [1, 1.03, 1],
                    boxShadow: [
                      "0 0 4px rgba(255,255,255,0.05)",
                      "0 0 10px rgba(255,255,255,0.25)",
                      "0 0 4px rgba(255,255,255,0.05)",
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

      {/* Middle Section: Icon, Title, Leader, Price */}
      <div className="z-10 relative mb-2 flex-grow">
        <div className="flex items-baseline justify-between gap-1 w-full">
          <div className="flex items-center gap-2">
            <ItemIcon name={iconName} />
            <h4 className="font-display text-base md:text-lg font-bold text-white tracking-wide group-hover:text-[#D9B15C] transition-colors duration-300">
              {item.name}
            </h4>
          </div>
          <span className="flex-grow border-b border-dotted border-white/20 mx-2 mb-1 group-hover:border-gold/50 transition-colors duration-300" />
          <span className="font-sans text-base md:text-lg font-bold text-[#D9B15C] shrink-0">
            ₹{item.price}
            {isCustomShake && <span className="text-[10px] md:text-xs font-semibold text-white/75 ml-0.5"> onwards</span>}
          </span>
        </div>

        {/* Description */}
        {item.description && (
          <p className="mt-2.5 text-xs md:text-sm text-white/90 leading-relaxed italic font-sans pr-2">
            {item.description}
          </p>
        )}
      </div>

      {/* Accent Line on Card Bottom */}
      <div className="w-12 h-0.5 bg-white/20 group-hover:w-full transition-all duration-500 ease-out mt-4 z-10" />
    </div>
  );
}
