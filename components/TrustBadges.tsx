"use client";

import { trustBadges } from "@/data/menu";
import { 
  Dumbbell, 
  Leaf, 
  ShieldCheck, 
  Apple, 
  Activity, 
  Clock, 
  Heart, 
  Sparkles, 
  Smile 
} from "lucide-react";

interface TrustBadgesProps {
  condensed?: boolean;
}

const IconMapper = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case "dumbbell":
      return <Dumbbell className={className} />;
    case "leaf":
      return <Leaf className={className} />;
    case "shield-check":
      return <ShieldCheck className={className} />;
    case "apple":
      return <Apple className={className} />;
    case "activity":
      return <Activity className={className} />;
    case "clock":
      return <Clock className={className} />;
    case "heart":
      return <Heart className={className} />;
    case "sparkles":
      return <Sparkles className={className} />;
    case "smile":
      return <Smile className={className} />;
    default:
      return null;
  }
};

export default function TrustBadges({ condensed = false }: TrustBadgesProps) {
  if (condensed) {
    return (
      <div className="w-full py-4 border-t border-b border-gold/15 bg-forest-green/5 overflow-hidden select-none">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 max-w-7xl mx-auto px-4 text-center">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-1.5">
              <IconMapper name={badge.icon} className="w-3.5 h-3.5 text-gold" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-forest-green">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 bg-white border-y border-gold/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-cream-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h3 className="font-display text-lg md:text-xl font-black text-forest-green tracking-widest uppercase">
            Good Food • Good Mood • Good Life
          </h3>
          <p className="text-xs text-italian-red font-semibold uppercase tracking-widest mt-1">
            Why Bon Appétit
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4 justify-items-center">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center justify-center p-4 bg-cream-bg/40 rounded-xl border border-gold/5 hover:border-gold/20 transition-all duration-300 w-full text-center group"
            >
              <div className="p-3 bg-white rounded-full border border-gold/10 shadow-sm mb-3 group-hover:scale-110 transition-transform duration-300">
                <IconMapper name={badge.icon} className="w-5 h-5 text-forest-green" />
              </div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-forest-green leading-snug">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
