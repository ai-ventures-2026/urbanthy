# Urbanthy — Urban Living Reimagined

A modern React + Vite + React Router website for Urbanthy, a premium urban lifestyle and real estate brand.

## Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool and dev server
- **React Router v6** — Client-side routing

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / Navbar.css
│   └── Footer.jsx / Footer.css
├── pages/
│   ├── Home.jsx / Home.css
│   ├── About.jsx / About.css
│   ├── Services.jsx / Services.css
│   └── Contact.jsx / Contact.css
├── App.jsx / App.css
├── main.jsx
└── index.css
```

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, featured properties, amenities, neighborhoods, testimonials, CTA |
| `/about` | About | Vision, values, timeline, team, sustainability |
| `/services` | Services | 6 service offerings, process steps, CTA |
| `/contact` | Contact | Contact form, offices, sidebar info |

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Terracotta | `#c45e2e` | Primary brand, CTAs, accents |
| Charcoal | `#2b2b2b` | Text, dark sections |
| Off-white | `#f0ebe3` | Page backgrounds |
| Warm Brown | `#8a7360` | Secondary text, supporting UI |
| White | `#ffffff` | Cards, forms |

## Design Notes

- No external images — all visuals use CSS gradients
- Responsive down to mobile (320px)
- Smooth navbar transitions on scroll
- Google Fonts: Playfair Display (display) + Inter (body)
- Accessible: semantic HTML, ARIA labels on interactive elements
