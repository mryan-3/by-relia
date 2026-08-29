# By.Relia — Editorial Fashion Apparel Ecommerce

> *Form, Silence, and Movement.*

An editorial fashion apparel brand website engineered to turn browsers into buyers through minimalist luxury aesthetics, high-tonal monochrome photography, and intentional spacing.

---

## Brand Architecture & Sections

### 1. 3-Panel Editorial Hero
- **3-Column Grid**: Dynamic split layout pairing portrait model profiles, center outerwear hero photography, and dynamic movement framing.
- **Overlaid Navigation**: Seamless typography header featuring brand logo, seasonal badge (*Autumn/Winter Collection*), and custom Phosphor-style utility actions.
- **Floating Product Rail**: Vertical quick-preview thumbnail stack on the right column.

### 2. Curated Collection Grid
- **Category Navigation**: Indexed category triggers (`Best Sellers [1]`, `New Arrivals [2]`, `Everyday Essentials [3]`, `Limited Edition [4]`).
- **Editorial Philosophy Statement**: Brand statement accompanying product discovery.
- **Expansive 4-Column Packshots**: Fluid full-width gallery showcasing garments on clean neutral packshot canvases with wishlist interaction.

### 3. Brand Philosophy & Craft
- **16:9 Panoramic Base Photo**: High-fashion coastal landscape composition (`aspect-video`) paired with a right-overlapping studio profile portrait.
- **Pillars of Craft**: 4 numbered design principles (*Timeless Design, Premium Materials, Responsible Production, Everyday Versatility*) separated by generous editorial whitespace.

### 4. Our Most Loved Pieces & Interactive Silhouette Drawer
- **12-Item Editorial Grid**: 4-column rhythm interleaving product cards, bracket interstitial statements (`[ Everyday Essentials ]`, `[ Limited Edition ]`), and full-bleed editorial art pieces.
- **Interactive "Complete the Silhouette" Drawer**: Clicking any garment opens a slide-over drawer breaking down the piece and displaying its curated coordinate pieces (*Styled Coordinates*) to explore full outfits without losing scroll context.

### 5. Pre-Footer CTA & Ambient Footer
- **Overhead Editorial Invitation Banner**: Top-down bird's-eye photography with a floating white invitation card (*"Build a Wardrobe You'll Reach for Every Day" · "Contact Us ↗"*).
- **Matrix Perimeter Lettermarks**: Deep matte black canvas framed by ambient architectural lettermarks (`B`, `Y`, `R`, `E`, `L`, `A`).
- **Navigation & Subscription**: Large index navigation links, underline newsletter input with SSR hydration protections, and utility footer links.

---

## Technical Stack & Standards

- **Framework**: Next.js (App Router, React 19)
- **Styling**: Tailwind CSS v4 (Canonical fractional utilities: `w-4.5`, `h-4.5`, `max-w-140`, `bg-linear-to-t`)
- **Typography**: `Plus Jakarta Sans` (body, tags, prices) + `Syne` (editorial headlines and lettermarks)
- **Iconography**: Lightweight custom Phosphor-style SVGs (`@/components/ui/icons`, `@/components/ui/social-icons`)
- **Code Modularity**: 100% of frontend React components are modularized under **80 lines of code** with strict kebab-case file naming.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css              # Editorial tokens & typography variables
│   ├── layout.tsx               # Root layout & Google Fonts config
│   └── page.tsx                 # Composed landing page
├── components/
│   ├── ui/
│   │   ├── icons.tsx            # Custom Phosphor icons (Heart, Search, User)
│   │   └── social-icons.tsx     # Social and arrow icons (Instagram, LinkedIn, X)
│   ├── navigation/
│   │   └── header-nav.tsx       # Overlaid editorial navigation
│   ├── hero/
│   │   ├── hero-panel-left.tsx  # Left portrait with caption
│   │   ├── hero-panel-center.tsx# Center centerpiece headline
│   │   ├── hero-panel-right.tsx # Right dynamic panel & floating rail
│   │   ├── hero-product-rail.tsx# Vertical product thumbnails
│   │   └── hero-section.tsx     # 3-panel container
│   ├── curated/
│   │   ├── curated-nav.tsx      # Category tabs
│   │   ├── curated-quote.tsx    # Philosophy quote
│   │   ├── product-card.tsx     # Luxury packshot card
│   │   └── curated-section.tsx  # Full-width 4-column grid
│   ├── philosophy/
│   │   ├── philosophy-header.tsx# Header label & headline
│   │   ├── philosophy-visual.tsx# 16:9 base + overlapping inset portrait
│   │   ├── philosophy-list.tsx  # Numbered craft pillars
│   │   └── philosophy-section.tsx# Philosophy container
│   ├── community-pieces/
│   │   ├── community-header.tsx # Section quote and label
│   │   ├── piece-card.tsx       # Interactive product card
│   │   ├── interstitial-card.tsx# Minimalist bracket category card
│   │   ├── editorial-card.tsx   # Art photograph card
│   │   ├── coordinate-item.tsx  # Drawer coordinate thumbnail
│   │   ├── silhouette-drawer.tsx# Slide-over lookbook drawer
│   │   └── community-section.tsx# 12-item grid container
│   └── footer/
│       ├── footer-cta-banner.tsx# Overhead invitation banner
│       ├── footer-nav-links.tsx # Large centered links
│       ├── footer-newsletter.tsx# Underline subscription form
│       ├── footer-bottom-bar.tsx# Socials, copyright, policies
│       └── footer-section.tsx   # Dark ambient footer container
└── types/
    ├── product.ts               # Curated catalog types
    └── community-pieces.ts      # Community items & lookId coordinates
```

---

## Getting Started

Run the development server using **pnpm**:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
