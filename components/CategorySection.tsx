"use client";

import { MenuCategory, MenuItem } from "@/data/menu";
import MenuItemCard from "./MenuItemCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles } from "lucide-react";

interface CategorySectionProps {
  category: MenuCategory;
  index: number;
}

// Hand-drawn vector outlined SVG icons for categories
const CategoryIcon = ({ name, className = "" }: { name: string; className?: string }) => {
  const svgClass = `w-8 h-8 stroke-[1.5] fill-none ${className || "text-gold"}`;

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
          <path d="M6 12C6 10 7 9 9 9" stroke="currentColor" />
          <path d="M18 12C18 10 17 9 15 9" stroke="currentColor" />
        </svg>
      );
    case "beverage":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M17 8H19C20.1 8 21 8.9 21 10V12C21 13.1 20.1 14 19 14H17" stroke="currentColor" />
          <path d="M3 8H17V16C17 18.2 15.2 20 13 20H7C4.8 20 3 18.2 3 16V8Z" stroke="currentColor" />
          <path d="M6 2C6 2.5 5.5 3 5 3.5" stroke="currentColor" />
          <path d="M10 2C10 2.5 9.5 3 9 3.5" stroke="currentColor" />
          <path d="M14 2C14 2.5 13.5 3 13 3.5" stroke="currentColor" />
        </svg>
      );
    case "pasta":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M22 12H2C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12Z" stroke="currentColor" />
          <path d="M4 12C4 8 5 4 8 4" stroke="currentColor" />
          <path d="M8 12C8 7 9 4 12 4" stroke="currentColor" />
          <path d="M12 12C12 7 13 4 16 4" stroke="currentColor" />
          <path d="M16 12C16 8 17 4 20 4" stroke="currentColor" />
          <path d="M6 15H18" stroke="currentColor" />
        </svg>
      );
    case "toast":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M5 6C5 4.3 6.3 3 8 3H16C17.7 3 19 4.3 19 6C19 6.8 18.7 7.5 18.2 8C19.2 9.5 19.5 11.5 19 13.5C18 17.5 15.2 20.3 12 21C8.8 20.3 6 17.5 5 13.5C4.5 11.5 4.8 9.5 5.8 8C5.3 7.5 5 6.8 5 6Z" stroke="currentColor" />
          <path d="M8 8C9 8.5 10 9 12 9C14 9 15 8.5 16 8" stroke="currentColor" />
          <path d="M7 13C8.5 13.5 9 14.5 12 14.5C15 14.5 15.5 13.5 17 13" stroke="currentColor" />
        </svg>
      );
    case "sweet":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M12 21C16.4183 21 20 17.4183 20 13C20 9 17 6 12 6C7 6 4 9 4 13C4 17.4183 7.58172 21 12 21Z" stroke="currentColor" />
          <path d="M12 6C12.5 4 14 2.5 16 2" stroke="currentColor" />
          <path d="M12 6C11 4.5 9 4.5 8 5" stroke="currentColor" />
        </svg>
      );
    case "waffle":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" />
          <path d="M9 3V21" stroke="currentColor" />
          <path d="M15 3V21" stroke="currentColor" />
          <path d="M3 9H21" stroke="currentColor" />
          <path d="M3 15H21" stroke="currentColor" />
        </svg>
      );
    case "dessert":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M2 19.5H22" stroke="currentColor" />
          <path d="M22 19.5L12 4.5L2 19.5" stroke="currentColor" fill="none" />
          <circle cx="12" cy="4.5" r="1.5" stroke="currentColor" fill="currentColor" />
          <path d="M6 13.5H18" stroke="currentColor" />
          <path d="M8 10H16" stroke="currentColor" />
        </svg>
      );
    case "addon":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M7 6V4C7 2.9 7.9 2 9 2H15C16.1 2 17 2.9 17 4V6" stroke="currentColor" />
          <path d="M5 6H19V12C19 16.4 15.4 20 11 20H13C8.6 20 5 16.4 5 12V6Z" stroke="currentColor" />
          <path d="M5 11H19" stroke="currentColor" />
        </svg>
      );
    case "dumbbell":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M6.5 6.5H4C2.9 6.5 2 7.4 2 8.5V15.5C2 16.6 2.9 17.5 4 17.5H6.5V6.5Z" stroke="currentColor" />
          <path d="M17.5 6.5H20C21.1 6.5 22 7.4 22 8.5V15.5C22 16.6 21.1 17.5 20 17.5H17.5V6.5Z" stroke="currentColor" />
          <path d="M6.5 12H17.5" stroke="currentColor" strokeWidth="3" />
          <path d="M9.5 9H7.5V15H9.5V9Z" stroke="currentColor" />
          <path d="M16.5 9H14.5V15H16.5V9Z" stroke="currentColor" />
        </svg>
      );
    case "shake":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M6 21L4 7H20L18 21H6Z" stroke="currentColor" />
          <path d="M7 7L8 3H16L17 7" stroke="currentColor" />
          <path d="M12 3V1" stroke="currentColor" />
          <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" />
          <line x1="9" y1="16" x2="15" y2="16" stroke="currentColor" />
        </svg>
      );
    case "bolt":
      return (
        <svg className={svgClass} viewBox="0 0 24 24">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" />
        </svg>
      );
    default:
      return null;
  }
};

export default function CategorySection({ category }: CategorySectionProps) {
  const [activeFormat, setActiveFormat] = useState<"waffle" | "pancake" | "crepe">("waffle");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // 50ms stagger cascade
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
  };

  // Special renderer for Waffles, Pancakes, Crepes
  const renderWafflesPancakesCrepes = () => {
    if (!category.collections) return null;

    const signatureCollection = category.collections.find((c) => c.isSignature);
    const standardCollections = category.collections.filter((c) => !c.isSignature);

    return (
      <div className="space-y-8">
        {/* Toggle Selector */}
        <div className="flex justify-center mb-6">
          <div className="bg-forest-green/5 p-1 rounded-full border border-gold/15 flex gap-1 shadow-inner z-10 relative">
            {(["waffle", "pancake", "crepe"] as const).map((format) => (
              <button
                key={format}
                onClick={() => setActiveFormat(format)}
                className={`px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 select-none cursor-pointer ${
                  activeFormat === format
                    ? "bg-forest-green text-cream-bg shadow border border-forest-green"
                    : "text-forest-green hover:bg-forest-green/10"
                }`}
              >
                {format}s
              </button>
            ))}
          </div>
        </div>

        {/* Collections Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {standardCollections.map((col) => {
            const price =
              activeFormat === "waffle"
                ? col.wafflePrice
                : activeFormat === "pancake"
                ? col.pancakePrice
                : col.crepePrice;

            // Form dynamic item object for card renderer
            const dynamicItem: MenuItem = {
              name: `${col.name.replace(" Collection", "")} ${
                activeFormat.charAt(0).toUpperCase() + activeFormat.slice(1)
              }`,
              price: price,
              description: `Our fresh handmade signature ${activeFormat} format.`,
            };

            return (
              <motion.div key={col.name} variants={itemVariants}>
                <MenuItemCard item={dynamicItem} iconName={category.iconName} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Signature Collection Row (Highlighted Tier) */}
        {signatureCollection && (
          <div className="mt-8 border border-italian-red/20 bg-italian-red/5 p-6 md:p-8 rounded-2xl relative overflow-hidden shadow">
            <div className="absolute top-0 right-0 bg-italian-red text-white text-[10px] uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-bl-xl shadow flex items-center">
              <Sparkles className="w-3 h-3 mr-1 fill-current" />
              Signature Tier
            </div>
            
            <div className="text-center md:text-left mb-6">
              <h4 className="font-display text-xl font-extrabold text-forest-green tracking-wide">
                {signatureCollection.name}
              </h4>
              <p className="text-xs md:text-sm text-ink/70 mt-1">
                The ultimate dessert experience — meticulously prepared with premium ingredients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "The Waffle Therapy", price: signatureCollection.wafflePrice },
                { name: "The Pancake Therapy", price: signatureCollection.pancakePrice },
                { name: "The Crepe Therapy", price: signatureCollection.crepePrice }
              ].map((sigItem) => (
                <div
                  key={sigItem.name}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gold/10 flex items-center justify-between hover:border-forest-green/40 transition-all duration-300"
                >
                  <span className="font-display text-sm font-bold text-forest-green">
                    {sigItem.name}
                  </span>
                  <span className="font-sans text-sm font-extrabold text-italian-red">
                    ₹{sigItem.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id={category.id} className="py-12 border-b border-gold/15 last:border-0 scroll-mt-28">
      {/* Category Heading */}
      <div className="flex flex-col items-center mb-10 text-center px-4">
        <div className="p-3 bg-white rounded-full border border-gold/20 shadow-md mb-3 flex items-center justify-center">
          <CategoryIcon name={category.iconName} className="text-gold" />
        </div>
        
        <div className="flex items-center justify-center gap-3 w-full max-w-lg">
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-gold" />
          <h3 className="font-display text-xl md:text-2xl font-black text-forest-green tracking-widest uppercase">
            {category.title}
          </h3>
          <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-gold" />
        </div>

        {category.description && (
          <p className="mt-2 text-xs md:text-sm font-semibold tracking-wider text-italian-red font-sans">
            {category.description}
          </p>
        )}
      </div>

      {/* Category Content */}
      <div className="px-4 max-w-7xl mx-auto">
        {category.collections && category.collections.length > 0 ? (
          renderWafflesPancakesCrepes()
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {category.items.map((item) => (
              <motion.div key={item.name} variants={itemVariants}>
                <MenuItemCard item={item} iconName={category.iconName} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Small inline note for specific sections */}
        {category.id === "protein-shakes" && (
          <p className="mt-6 text-center text-xs text-ink/60 font-semibold italic">
            *We only use milk.
          </p>
        )}
        
        {category.id === "performance-addons" && (
          <p className="mt-8 text-center text-xs text-ink/50 font-sans tracking-wide">
            Protein values are approximate and may vary slightly based on serving size and ingredient availability.
          </p>
        )}
      </div>
    </section>
  );
}
