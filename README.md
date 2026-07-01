# Bon Appétit — Artisan Café & Gourmet Kitchen Digital Menu

A modern, mobile-first, high-performance digital menu website built for the artisan café **Bon Appétit** ("Let's Eat With Bon Appétit — Fatto con Amore"). This website is designed to be scannable via QR codes on café tables and browsed smoothly on customers' mobile devices.

---

## 🚀 Features

- **Centralized Data Layer**: All menu items, descriptions, prices, protein metrics, and banners are stored in a single typed static file (`/data/menu.ts`) for easy editing.
- **Tricolor Preloader**: A beautiful entry animation featuring the tricolor ring matching the Italian flag drawing itself and loading the brand logo.
- **Sticky Navigation Bar**: A mobile-friendly snap-scroll chip bar that highlights the current category as the user scrolls (scrollspy) and supports tap-to-scroll.
- **Dynamic Waffles Selector**: Interactive toggles between Waffle, Pancake, and Crepe formats displaying live prices.
- **Floating CTAs**: Click-to-Call and WhatsApp pre-filled chat buttons sliding into view when customers scroll down the menu.
- **Responsive Layout**: Designed specifically from 320px width up to fit perfectly on modern iPhone and Android browsers.
- **Zero Configuration Deployment**: Completely static and ready for instant deployment.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router), TypeScript
- **Styling**: Tailwind CSS v4 (configured via CSS theme variables in `app/globals.css`)
- **Animations**: Framer Motion (preloader spring animations, scrollspy observer, card staggered entry)
- **Icons**: Lucide React

---

## 📂 Project Directory Structure

```
├── app/
│   ├── globals.css         # Custom Tailwind v4 theme, preloader animations, base styles
│   ├── layout.tsx          # Fonts loading, SEO metadata, JSON-LD schema
│   └── page.tsx            # Main layout combining all sections (Hero, Menu, Contact, Map, Footer)
├── components/
│   ├── Preloader.tsx       # Scale spring logo + tricolor circle draw animation
│   ├── MenuItemCard.tsx    # Dotted price leaders, badges, and protein labels
│   ├── CategorySection.tsx # Handles categories and specialized waffles layout toggling
│   ├── StickyCategoryNav.tsx # Horizontally scrolling observer nav chips
│   ├── TrustBadges.tsx     # Handles grid badges and footer ticker form
│   └── FloatingActionButtons.tsx # Stacked floating CTAs with safe area logic
├── data/
│   └── menu.ts             # Typed data store for editing items, prices, and tags
├── public/
│   ├── images/             # Media assets (logo, posters)
│   ├── favicon.ico         # Page favicon
│   └── manifest.json       # Basic metadata for mobile shortcut icons
└── package.json            # Scripts and dependencies
```

---

## 📝 How to Edit Menu Items, Prices, or Badges

To change items, prices, or descriptions, simply open [data/menu.ts](file:///data/menu.ts) and update the corresponding array objects. 

- **Items & Prices**: Adjust the `price` field (integer in Rupees) or the `name`.
- **Protein Content**: Add/edit the `protein` property (e.g., `"≈18g"`).
- **Special Ribbons**: Use `tag: "Chef's Pick"`, `tag: "Best Seller"`, `tag: "Most Ordered"`, or `tag: "Highest Protein"` to render a styled colored badge automatically.

---

## 💻 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to: [http://localhost:3000](http://localhost:3000)

---

## ⚡ Deployment to Vercel

The project is fully optimized for static hosting and deployable on Vercel with zero environment variables or configurations.

### Option 1: Vercel CLI (Recommended)

Run the following command from the project root:
```bash
npx vercel --prod
```

### Option 2: Git Import

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Go to the [Vercel Dashboard](https://vercel.com/new).
3. Click **Import** next to your repository.
4. Keep the default settings and click **Deploy**.
