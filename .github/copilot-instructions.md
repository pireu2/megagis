# MEGAGIS - Project Context & Coding Guidelines

## 1. Project Overview

**Name:** Megagis
**Industry:** Cadastral Services, Land Surveying, GIS, Topography (Romania).
**Goal:** A high-performance, authoritative marketing website to generate leads and establish trust.
**Target Audience:**

1.  **Private Sector:** Property owners, real estate developers, construction firms.
2.  **Public Sector (Government):** Town halls (Primării), County Councils (Consilii Județene), Mayors, and Public Administration officials looking for GIS/Cadastral partners.
    **Key Values:** Precision, Legal Compliance, Modernity, Efficiency.

## 2. Tech Stack

- **Framework:** Next.js 16+ (App Router).
- **Language:** TypeScript (Strict mode).
- **Styling:** Tailwind CSS.
- **UI Library:** shadcn/ui (Radix UI primitives).
- **Internationalization:** Custom JSON-based dictionaries (Middleware based routing).
- **Icons:** Lucide React.
- **Forms:** React Hook Form + Zod (Validation).
- **Email:** Resend / NodeMailer (via Server Actions).

## 3. Design & UX Guidelines

- **Style:** Professional, Modern, Sleek.
- **Vibe:** "Engineering Precision meets Corporate Cleanliness". Avoid cluttered layouts.
- **Readability:** High contrast, legible typography use a sans-serif font like Geist and a serif font for accents and different headings like Lora.
- **Accessibility:** The site must be clear and usable for _any_ user, from a tech-savvy developer to an elderly property owner or a busy mayor.
- **Color Palette:** Trustworthy colors (Green, Slates, Whites) with high-visibility accents (e.g., Orange or Teal) for Call-to-Actions, the main color of the business is green that is also present in the logo.

## 4. Coding Principles & Best Practices

### A. Internationalization (i18n) - ZERO RAW STRINGS

- **Strict Rule:** Never hardcode text inside components.
- **Routing:** Assume dynamic route structure: `app/[lang]/...`.
- **Implementation:** - All text must come from a JSON object/dictionary.
  - Components should accept a `dict` prop typed to the specific section of content they render.
  - Use `Link` components that automatically prepend the current locale (or helper functions).
- **Example:**
  - ❌ _BAD:_ `<h1>Servicii</h1>`
  - ✅ _GOOD:_ `<h1>{dict.services.title}</h1>`

### B. TypeScript Rules

- **No `any` types.**
- Use `interface` for object definitions.
- Props should be destructured in the function signature.
- **Type the Dictionaries:** Create a TypeScript interface that mirrors the JSON translation file structure so `dict` props are fully typed.

### C. Next.js App Router Structure

- **Server Components:** Default. Use for fetching data (dictionaries) and rendering static content.
- **Client Components:** Use `'use client'` _only_ for interactive islands (Forms, Mobile Menu, Carousels).
- **Server Actions:** Use Next.js Server Actions for form mutations (e.g., sending the contact email) instead of API routes.

### D. Component Usage (shadcn/ui)

- Use standard shadcn components (`Card`, `Button`, `Sheet`, `Accordion`) but style them to look "Sleek and Modern" via Tailwind utility classes.
- Ensure buttons have clear states (hover, active, disabled).

### E. Assets & Performance

- **Images:** ALWAYS use `next/image` with proper `width`, `height`, and `alt` text. Never use standard `<img>` tags.
- **Fonts:** Use `next/font` for optimized font loading.

## 5. Specific Content Instructions

- **Terminology:** Use correct terms for both English and Romanian.
  - _RO:_ Intabulare, Ridicare Topografică, Plan de Situație, UAT, PUG/PUZ/PUD.
  - _EN:_ Land Registration, Topographical Survey, Site Plan, Territorial Administrative Unit, Urban Plans.
- **Tone for Government:** When addressing public sector topics, the tone should be formal, respectful, and focused on "efficiency" and "digitalization of public administration".

## 6. Response Format

- When asked to create a component, provide the **full code block**.
- Include the **interface** for the expected JSON dictionary part for that specific component.
- Explain the code brief before the code block.

---

**MASTER PROMPT END**
