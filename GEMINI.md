# MEGAGIS - Project Master Context & Guidelines v2.0

## 1. Project Identity & Vision

- **Name:** Megagis
- **Core Domain:** Cadastral Services, GIS, Topography, Urban Planning (Romania).
- **The Vibe:** "Digital Topography." It must feel like a precision instrument.
  - ❌ **Avoid:** Generic corporate templates, standard Bootstrap grids, flat white backgrounds, artificial monospaced ID/coordinate labels that feel like AI-generated gimmicks.
  - ✅ **Target:** Asymmetrical layouts (Bento grids), clean & crisp typography, depth (glassmorphism), and motion.
- **Target Audience:**
  - **B2G (Government):** Needs to see stability, large-scale capacity, and modernization.
  - **B2B (Developers):** Needs to see precision, speed, and technical competence.

## 2. Tech Stack

- **Core:** Next.js 16+ (App Router), TypeScript (Strict), Tailwind CSS.
- **UI/Visuals:**
  - `shadcn/ui` (Radix primitives) – _Base only, heavily customized._
  - `framer-motion` – _Mandatory for all page transitions and scroll reveals._
  - `lucide-react` – Icons.
- **Testing:** Playwright (End-to-End Testing).
- **Tools:** Context7 MCP (Context retrieval & Knowledge management).

## 3. Design & Visual Engineering Rules (Swiss Style + GIS)

### A. The "Swiss GIS" Aesthetic

- **Typography (The Anchor):**
  - **Scale:** Use massive, dominant headings (`text-5xl` to `text-7xl`) to create hierarchy.
  - **Alignment:** Text should almost always be **Flush Left, Ragged Right**. Avoid centered text blocks.
  - **Typeface:** Use `Geist` or `Inter` with tight tracking (`tracking-tight`) for headings.
- **The Grid:**
  - **Visible Grids:** Use faint, mathematical background grids (`bg-grid-slate-900/[0.04]`) to expose the underlying structure.
  - **Alignment:** Elements must snap rigorously to the grid lines.
- **Visual Metaphors:**
  - **Layering:** Elements should overlap slightly (z-index manipulation) to simulate map layers.
  - **Clean Structure:** Keep elements sleek, elegant, and professional without cluttering cards with artificial ID badges or coordinate labels.

### B. Layout Strategy

- **Active Whitespace:** Don't fear empty space. Use margins (`my-24`) to separate sections distinctly.
- **Bento Grids:** Prefer asymmetrical grid layouts (`col-span-2`, `row-span-2`) over standard 3-column rows.
- **Sticky Scroll:** Use `position: sticky` for text sections while images change on scroll.

### C. Depth & Motion

- **Glassmorphism:** Use `backdrop-blur-md` with extremely subtle borders (`border-white/10`) to create "glass" cards that float above the grid.
- **Motion (Framer):**
  - **Entrance:** Elements must not just "appear." They should fade up and in (`y: 20 -> 0`, `opacity: 0 -> 1`) with a staggered delay.
  - **Precision:** Animations should be snappy and eased (e.g., `easeOutCirc`), not bouncy.

## 4. Coding Standards

### A. TypeScript & Internationalization (i18n)

- **Strict Typing:** No `any`. Use `interface` for all props and data structures.
- **Dictionary-First:**
  - All text **MUST** come from the `dict` object.
  - Never hardcode strings.
  - **Check:** If creating a component, define the `interface` for the specific dictionary slice it needs.

### B. Playwright Testing Guidelines

- **Requirement:** Every major interactive component (Forms, Nav, Modals) must have a corresponding Playwright test.
- **Selectors:** Do not rely on CSS classes for testing. Use data attributes:
  - ✅ `data-testid="contact-submit-btn"`
  - ❌ `button.bg-green-500`
- **Critical Paths:** Prioritize testing the "Happy Path" for:
  - Lead generation forms (submission success).
  - Language switching (EN <-> RO).

### C. Context7 MCP Usage

- **Before Coding:** ALWAYS use Context7 to scan existing files or documentation to ensure consistency.
  - **Query:** "Check `src/components/ui` for existing button variants before creating a new one."
  - **Query:** "Retrieve the current `dict` structure for 'services' before generating the component."
- **Context Awareness:** Do not hallucinate imports. Verify file paths using the MCP server if unsure.

## 5. Specific Implementation Instructions

- **Terminology (RO/EN)**
  - _Accurate technical terms are non-negotiable._
  - **RO:** Intabulare, Ridicare Topografică, Plan de Situație, UAT, PUG/PUZ/PUD.
  - **EN:** Land Registration, Topographical Survey, Site Plan, Administrative Unit.
- **Tone**
  - **Headline:** Bold, confident, slightly larger than standard.
  - **Body:** Concise, professional.
  - **Microcopy:** Technical and precise (e.g., "Scanning area..." instead of "Loading...").

## 6. Response Format

1.  **Context Check:** Briefly state what context you retrieved via MCP (if applicable).
2.  **Design Brief:** Explain the visual choices (e.g., "Using a Bento Grid layout with glassmorphism to highlight the 3 main services").
3.  **The Code:**
    - Full Component Code (Next.js).
    - Dictionary Interface.
    - (Optional) Playwright Test snippet if the component is interactive.

---

**MASTER PROMPT END**
