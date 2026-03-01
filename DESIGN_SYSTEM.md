# Credit Card Comparison Website - Design System

## 🎨 Design Philosophy

**Inspiration**: Apple's design language with minimalist aesthetic, generous whitespace, large typography, and clean blue-and-gray color palette with purple-to-blue gradient accents.

**Core Principles**:
- Tier-1 premium design quality
- Clean, scannable layouts
- High contrast ratios for accessibility
- Generous whitespace for breathing room
- Consistent patterns across all 16 sections

---

## 🎯 Color System

### Primary Colors
```css
/* CTA Gradients (ONLY for Call-to-Action buttons) */
--gradient-primary: linear-gradient(to right, #9333ea, #2563eb); /* purple-600 to blue-600 */
--gradient-primary-hover: linear-gradient(to right, #7e22ce, #1d4ed8); /* purple-700 to blue-700 */

/* Text Colors */
--text-primary: #000000;        /* Black - Headings, important text */
--text-secondary: #4b5563;      /* gray-600 - Body text, descriptions */
--text-tertiary: #6b7280;       /* gray-500 - Less important text */
--text-muted: #9ca3af;          /* gray-400 - Placeholder text */

/* Background Colors */
--bg-white: #ffffff;            /* White - Primary background */
--bg-gray-50: #f9fafb;          /* gray-50 - Alternating sections */
--bg-gray-100: #f3f4f6;         /* gray-100 - Card backgrounds, subtle fills */

/* Border Colors */
--border-gray-200: #e5e7eb;     /* gray-200 - Default borders */
--border-gray-300: #d1d5db;     /* gray-300 - Hover borders */
```

### Semantic Colors
```css
/* Success */
--success-bg: #dcfce7;          /* green-100 */
--success-text: #166534;        /* green-800 */
--success-border: #bbf7d0;      /* green-200 */

/* Warning */
--warning-bg: #fef3c7;          /* yellow-100 */
--warning-text: #92400e;        /* yellow-800 */
--warning-border: #fde68a;      /* yellow-200 */

/* Error */
--error-bg: #fee2e2;            /* red-100 */
--error-text: #991b1b;          /* red-800 */
--error-border: #fecaca;        /* red-200 */

/* Info */
--info-bg: #dbeafe;             /* blue-100 */
--info-text: #1e3a8a;           /* blue-900 */
--info-border: #bfdbfe;         /* blue-200 */
```

### Category Colors (for badges/tags)
```css
/* Dining */
--dining-bg: #ffedd5;           /* orange-50 */
--dining-text: #c2410c;         /* orange-700 */
--dining-border: #fed7aa;       /* orange-200 */
--dining-icon: 🍽️

/* Shopping */
--shopping-bg: #fce7f3;         /* pink-50 */
--shopping-text: #be185d;       /* pink-700 */
--shopping-border: #fbcfe8;     /* pink-200 */
--shopping-icon: 🛍️

/* Travel */
--travel-bg: #dbeafe;           /* blue-50 */
--travel-text: #1d4ed8;         /* blue-700 */
--travel-border: #bfdbfe;       /* blue-200 */
--travel-icon: ✈️

/* Fuel */
--fuel-bg: #dcfce7;             /* green-50 */
--fuel-text: #15803d;           /* green-700 */
--fuel-border: #bbf7d0;         /* green-200 */
--fuel-icon: ⛽

/* Movies */
--movies-bg: #f3e8ff;           /* purple-50 */
--movies-text: #6b21a8;         /* purple-700 */
--movies-border: #e9d5ff;       /* purple-200 */
--movies-icon: 🎬

/* Lounge Pass */
--lounge-bg: #e0e7ff;           /* indigo-50 */
--lounge-text: #4338ca;         /* indigo-700 */
--lounge-border: #c7d2fe;       /* indigo-200 */
--lounge-icon: 🛋️

/* Reward Points */
--reward-bg: #fef3c7;           /* amber-50 */
--reward-text: #b45309;         /* amber-700 */
--reward-border: #fde68a;       /* amber-200 */
--reward-icon: 🎁

/* Cashback */
--cashback-bg: #d1fae5;         /* emerald-50 */
--cashback-text: #047857;       /* emerald-700 */
--cashback-border: #a7f3d0;     /* emerald-200 */
--cashback-icon: 💰
```

---

## 📐 Typography System

### Font Stack
```css
font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
```

### Compact Typography Scale (Responsive)

#### Headings
```css
/* Hero Title - Extra Large */
.text-hero {
  font-size: 2rem;           /* 32px mobile */
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
}
@media (min-width: 640px) {
  .text-hero { font-size: 2.5rem; }  /* 40px tablet */
}
@media (min-width: 768px) {
  .text-hero { font-size: 3rem; }    /* 48px desktop */
}

/* H1 - Section Headings */
.text-h1 {
  font-size: 1.25rem;        /* 20px mobile */
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.025em;
}
@media (min-width: 640px) {
  .text-h1 { font-size: 1.5rem; }    /* 24px tablet */
}
@media (min-width: 768px) {
  .text-h1 { font-size: 1.875rem; }  /* 30px desktop */
}

/* H2 - Subsection Headings */
.text-h2 {
  font-size: 1.125rem;       /* 18px mobile */
  line-height: 1.2;
  font-weight: 600;
}
@media (min-width: 640px) {
  .text-h2 { font-size: 1.25rem; }   /* 20px tablet */
}
@media (min-width: 768px) {
  .text-h2 { font-size: 1.5rem; }    /* 24px desktop */
}

/* H3 - Card Titles */
.text-h3 {
  font-size: 1rem;           /* 16px all screens */
  line-height: 1.3;
  font-weight: 600;
}
```

#### Body Text
```css
/* Large Body - Descriptions */
.text-body-lg {
  font-size: 1rem;           /* 16px all screens */
  line-height: 1.6;
  font-weight: 400;
  color: var(--text-secondary);
}

/* Base Body - Default */
.text-body {
  font-size: 0.875rem;       /* 14px all screens */
  line-height: 1.5;
  font-weight: 400;
  color: var(--text-secondary);
}

/* Small Body - Captions */
.text-body-sm {
  font-size: 0.75rem;        /* 12px all screens */
  line-height: 1.4;
  font-weight: 500;
  color: var(--text-tertiary);
}
```

#### Labels & Buttons
```css
/* Button Text */
.text-button {
  font-size: 0.875rem;       /* 14px */
  line-height: 1;
  font-weight: 600;
}

/* Label Text */
.text-label {
  font-size: 0.75rem;        /* 12px */
  line-height: 1;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

---

## 📏 Spacing System

### Scale (Tailwind v4)
```css
/* Base Unit: 4px (0.25rem) */
gap-1    /* 4px */
gap-2    /* 8px */
gap-3    /* 12px */
gap-4    /* 16px */
gap-5    /* 20px */
gap-6    /* 24px */
gap-8    /* 32px */
gap-10   /* 40px */
gap-12   /* 48px */
gap-16   /* 64px */
gap-20   /* 80px */
gap-24   /* 96px */
```

### Section Padding (Responsive)
```css
/* Mobile */
py-12 px-4    /* 48px vertical, 16px horizontal */

/* Tablet */
py-16 px-6    /* 64px vertical, 24px horizontal */

/* Desktop */
py-20 px-8    /* 80px vertical, 32px horizontal */

/* Large Sections */
py-24         /* 96px vertical */
```

### Component Spacing
```css
/* Cards */
p-6           /* 24px - Mobile card padding */
p-8           /* 32px - Desktop card padding */

/* Buttons */
px-6 py-3     /* 24px horizontal, 12px vertical - Standard */
px-8 py-3     /* 32px horizontal, 12px vertical - Primary CTA */
px-4 py-2     /* 16px horizontal, 8px vertical - Small */

/* Inputs */
px-4 py-2.5   /* 16px horizontal, 10px vertical */
```

---

## 📱 Responsive Breakpoints

### Breakpoint System (Tailwind v4)
```css
/* Mobile First Approach */

/* Small devices (phones, default) */
/* 0px - 639px */
/* No prefix needed */

/* Medium devices (tablets) */
sm: 640px
@media (min-width: 640px) { ... }

/* Large devices (laptops) */
md: 768px
@media (min-width: 768px) { ... }

/* Extra large devices (desktops) */
lg: 1024px
@media (min-width: 1024px) { ... }

/* 2X large devices (large desktops) */
xl: 1280px
@media (min-width: 1280px) { ... }

/* Maximum content width */
2xl: 1536px
@media (min-width: 1536px) { ... }
```

### Container Max-Widths
```css
/* Standard container */
.container {
  max-width: 1280px;        /* 7xl */
  margin: 0 auto;
  padding: 0 1rem;          /* 16px mobile */
}

@media (min-width: 640px) {
  .container { padding: 0 1.5rem; }  /* 24px tablet */
}

@media (min-width: 1024px) {
  .container { padding: 0 2rem; }    /* 32px desktop */
}
```

### Responsive Patterns

#### Grid Layouts
```css
/* Mobile: 1 column */
grid grid-cols-1 gap-4

/* Tablet: 2 columns */
sm:grid-cols-2 sm:gap-6

/* Desktop: 3 columns */
md:grid-cols-3 md:gap-8

/* Large Desktop: 4 columns */
lg:grid-cols-4 lg:gap-10
```

#### Flex Direction
```css
/* Mobile: Stack vertically */
flex flex-col gap-4

/* Desktop: Horizontal */
lg:flex-row lg:gap-8
```

#### Text Alignment
```css
/* Mobile: Center */
text-center

/* Desktop: Left */
lg:text-left
```

---

## 🎴 Credit Card Component System

### Card Orientations

#### Horizontal Cards (Default)
```css
/* Container */
width: 200px;              /* Mobile */
width: 240px;              /* Desktop (sm:) */
aspect-ratio: 16/10;

/* Image */
width: 100%;               /* Full container width */
object-fit: cover;
```

#### Vertical Cards
```css
/* Container */
width: 200px;              /* Mobile (fixed) */
width: 240px;              /* Desktop (sm:) (fixed) */
display: flex;
align-items: center;
justify-content: center;

/* Image */
width: 140px;              /* Mobile */
width: 170px;              /* Desktop (sm:) */
aspect-ratio: 2/3;
object-fit: contain;       /* Prevents cropping */
```

### Card Component Structure
```tsx
<div className="group flex flex-col lg:flex-row lg:items-start gap-6 md:gap-8 lg:gap-10 w-full bg-white hover:bg-white border border-gray-200 hover:border-gray-300 rounded-2xl p-6 md:p-8 transition-all duration-200 hover:shadow-md">
  
  {/* Image Section - Fixed width for alignment */}
  <div className="flex flex-col items-center flex-shrink-0">
    <div className="w-[200px] sm:w-[240px] h-auto rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
      <img />
    </div>
  </div>

  {/* Content Section - Flexible */}
  <div className="flex flex-col gap-5 flex-1 w-full">
    {/* Title, Fees, Benefits, Categories, CTAs */}
  </div>
</div>
```

---

## 🎭 Component Patterns

### Button Styles

#### Primary CTA (Gradient)
```css
className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold text-sm px-8 py-3 rounded-lg transition-colors"
```

#### Secondary Button
```css
className="border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm px-6 py-3 rounded-lg transition-all"
```

#### Icon Button
```css
className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
```

### Card Styles

#### Standard Card
```css
className="bg-white border border-gray-200 hover:border-gray-300 rounded-2xl p-6 md:p-8 transition-all duration-200 hover:shadow-md"
```

#### Feature Card
```css
className="bg-gray-50 border border-gray-200 rounded-xl p-6 transition-all hover:shadow-sm"
```

#### Stat Card
```css
className="bg-white border border-gray-200 rounded-xl p-6 text-center"
```

### Badge Styles

#### Category Badge
```css
className="bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full flex items-center gap-1.5"
```

#### Status Badge
```css
/* Success */
className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800"

/* Warning */
className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800"

/* Error */
className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800"
```

### Input Styles

#### Text Input
```css
className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
```

#### Select Dropdown
```css
className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
```

#### Textarea
```css
className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
```

---

## 🎨 Shadow System

```css
/* NO shadows on cards by default - Clean, flat design */

/* Hover shadows only */
hover:shadow-md          /* 0 4px 6px -1px rgb(0 0 0 / 0.1) */
hover:shadow-lg          /* 0 10px 15px -3px rgb(0 0 0 / 0.1) */

/* Modal/Overlay shadows */
shadow-xl                /* 0 20px 25px -5px rgb(0 0 0 / 0.1) */
shadow-2xl               /* 0 25px 50px -12px rgb(0 0 0 / 0.25) */
```

---

## 🔲 Border System

```css
/* Border Widths */
border          /* 1px */
border-2        /* 2px */

/* Border Radius */
rounded-lg      /* 8px - Buttons, inputs */
rounded-xl      /* 12px - Cards, smaller components */
rounded-2xl     /* 16px - Large cards, main components */
rounded-full    /* 9999px - Pills, badges, avatars */

/* Border Colors */
border-gray-200          /* Default borders */
border-gray-300          /* Hover states */
hover:border-gray-400    /* Active hover */
```

---

## ✨ Animation System (Motion/Framer Motion)

### Installation
```bash
npm install motion
```

### Import
```tsx
import { motion } from 'motion/react';
```

### Hero Section Animations

#### Floating Background Orbs
```tsx
<motion.div
  className="absolute top-20 -left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
  animate={{
    x: [0, 100, 0],
    y: [0, -100, 0],
    scale: [1, 1.1, 1],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>
```

#### Mouse Parallax
```tsx
const handleMouseMove = (e: React.MouseEvent) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  controls.start({ x, y });
};

<motion.div animate={controls} transition={{ type: "spring", stiffness: 50 }}>
  {/* Content */}
</motion.div>
```

#### Entrance Animations
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  {/* Content */}
</motion.div>
```

#### Stagger Children
```tsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map((item, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

#### Button Shine Effect
```tsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="relative overflow-hidden"
>
  <motion.div
    className="absolute inset-0 bg-white opacity-0"
    whileHover={{
      opacity: [0, 0.2, 0],
      x: ['-100%', '100%']
    }}
    transition={{ duration: 0.6 }}
  />
  Button Text
</motion.button>
```

#### Counter Animation
```tsx
<motion.span
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  {count}
</motion.span>
```

### Scroll-Based Animations
```tsx
import { useScroll, useTransform } from 'motion/react';

const { scrollY } = useScroll();
const opacity = useTransform(scrollY, [0, 200], [1, 0]);
const scale = useTransform(scrollY, [0, 200], [1, 0.8]);

<motion.div style={{ opacity, scale }}>
  {/* Content */}
</motion.div>
```

---

## 🎯 Layout Patterns

### Section Layout
```tsx
<section className="bg-white py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mb-4 leading-[1.1] tracking-tight">
        Section Title
      </h2>
      <p className="text-base text-gray-600 max-w-2xl mx-auto">
        Section description
      </p>
    </div>

    {/* Section Content */}
    <div className="...">
      {/* Content here */}
    </div>
  </div>
</section>
```

### Alternating Backgrounds
```tsx
{/* White background */}
<section className="bg-white py-16 md:py-24">...</section>

{/* Gray background */}
<section className="bg-gray-50 py-16 md:py-24">...</section>

{/* Repeat pattern across all 16 sections */}
```

### Grid Pattern
```tsx
{/* 1-2-3-4 column responsive grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
  {items.map(item => (
    <div key={item.id}>
      {/* Card content */}
    </div>
  ))}
</div>
```

### Flex Pattern
```tsx
{/* Responsive flex layout */}
<div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 items-start">
  {/* Left side - Fixed width on desktop */}
  <div className="flex-shrink-0">
    {/* Content */}
  </div>

  {/* Right side - Flexible */}
  <div className="flex-1">
    {/* Content */}
  </div>
</div>
```

---

## 🖼️ Image Handling

### Using Unsplash Tool
```tsx
// Always use unsplash_tool for new images
const imageUrl = unsplash_tool({ query: "credit card finance" });
```

### Using Figma Assets
```tsx
// Raster images (PNG, JPG)
import img from "figma:asset/abc123.png";

// SVGs
import svgPaths from "../imports/svg-wg56ef214f";
```

### ImageWithFallback Component
```tsx
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback
  src={imageUrl}
  alt="Description"
  className="w-full h-auto"
/>
```

---

## 📋 Form Patterns

### Form Layout
```tsx
<div className="space-y-4">
  {/* Form Field */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Field Label *
    </label>
    <input
      type="text"
      placeholder="Placeholder text"
      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>
```

### Two-Column Form
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div>...</div>
  <div>...</div>
</div>
```

---

## 🎪 Navigation Patterns

### Header (Desktop)
```tsx
<header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      {/* Navigation Links */}
      {/* CTA Button */}
    </div>
  </div>
</header>
```

### Header (Mobile)
```tsx
{/* Hamburger Menu */}
<button className="lg:hidden p-2">
  <Menu className="w-6 h-6" />
</button>

{/* Mobile Menu Overlay */}
<div className="fixed inset-0 bg-white z-50 lg:hidden">
  {/* Navigation Items */}
</div>
```

---

## 🔤 Icon System

### Lucide React Icons
```tsx
import { 
  CreditCard, 
  ArrowRight, 
  Check, 
  X,
  Menu,
  Search,
  Bell,
  ChevronDown
} from 'lucide-react';

// Usage
<CreditCard className="w-5 h-5 text-blue-600" />
```

### Icon Sizes
```css
w-4 h-4      /* 16px - Small icons in text */
w-5 h-5      /* 20px - Standard icons */
w-6 h-6      /* 24px - Large icons */
w-8 h-8      /* 32px - Extra large icons */
```

---

## 🎯 Accessibility Guidelines

### Color Contrast
- Minimum ratio: **4.5:1** for normal text
- Minimum ratio: **3:1** for large text (18px+)
- All text on white/gray-50 backgrounds uses gray-600+ for proper contrast

### Focus States
```css
focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
```

### Alt Text
- Always provide descriptive alt text for images
- Use empty alt="" for decorative images

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Tab order follows logical flow
- Skip links for main content

---

## 📊 Data Structure

### Credit Card Data Interface
```typescript
interface CreditCardData {
  id: string;
  image: string;
  title: string;
  joiningFee: string;
  renewalFee: string;
  benefits: string[];
  categories: string[];
  networks?: string[];
  cardOrientation: 'horizontal' | 'vertical';
  bank?: string;
  description?: string;
}
```

---

## 🚀 Performance Guidelines

### Image Optimization
- Use WebP format when possible
- Lazy load images below the fold
- Use appropriate image sizes for different breakpoints

### Animation Performance
- Use `transform` and `opacity` for animations (GPU-accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` sparingly

### Code Splitting
- Lazy load routes with React Router
- Dynamic imports for heavy components

---

## 📝 Naming Conventions

### CSS Classes
- Use Tailwind utility classes
- Avoid custom CSS unless necessary
- Group related utilities: positioning → sizing → styling

### Components
- PascalCase: `CreditCardSection`
- Descriptive names: `AddCardContent`, `DashboardContent`
- Suffix with purpose: `...Page`, `...Section`, `...Modal`

### Files
- kebab-case: `credit-card-section.tsx`
- Match component name: `CreditCardSection.tsx`
- Data files: `creditCardsData.ts`

---

## 🎨 Design Checklist

When creating new components, ensure:

- ✅ White or gray-50 background (alternating sections)
- ✅ Purple-to-blue gradient ONLY on CTA buttons
- ✅ No excessive shadows (hover states only)
- ✅ Clean card designs with proper borders
- ✅ Compact typography (responsive sizing)
- ✅ Generous whitespace and padding
- ✅ Consistent border-radius (rounded-xl, rounded-2xl)
- ✅ Proper contrast ratios (4.5:1 minimum)
- ✅ Mobile-first responsive design
- ✅ Smooth transitions (200-300ms duration)
- ✅ Hover states on interactive elements
- ✅ Focus states for accessibility

---

## 🔄 Responsive Testing Checklist

Test all components at these breakpoints:
- [ ] Mobile (375px - iPhone SE)
- [ ] Mobile Large (414px - iPhone Pro Max)
- [ ] Tablet (768px - iPad)
- [ ] Laptop (1024px)
- [ ] Desktop (1280px)
- [ ] Large Desktop (1920px)

---

## 📚 Additional Resources

### Tailwind CSS v4 Documentation
- https://tailwindcss.com/docs

### Motion (Framer Motion) Documentation
- https://motion.dev/docs

### Lucide Icons
- https://lucide.dev/icons

### React Router Documentation
- https://reactrouter.com/

---

**Last Updated**: March 1, 2026
**Version**: 2.0
**Maintained by**: Development Team
