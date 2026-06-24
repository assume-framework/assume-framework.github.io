# ASSUME Project Corporate Identity (CI) Design System

## 1. Brand Identity & Vibe
**ASSUME** (Agent-Based Electricity Markets Simulation Toolbox) stands at the intersection of advanced research (AI/Deep Reinforcement Learning) and critical infrastructure (energy markets, electricity grids). 
The CI must communicate **technical authority, academic rigor, and cutting-edge innovation**, while remaining approachable and clear.

**Core Keywords:**
- Adaptive & Intelligent
- Interconnected (Networks/Grids)
- Modern & Accessible
- Trustworthy & Robust

---

## 2. Color Schema

The color palette breaks away from standard, sterile "tech blue" and embraces a vibrant, modern pastel aesthetic. 

### Core Brand Colors
- **Vibrant Coral (Primary CTA):** `#EC6F56`
  - *Usage:* Primary buttons, active navigation states, critical alerts, and focal points. Represents energy and action.
- **Sky Blue (Secondary Accent):** `#85CBD6`
  - *Usage:* Secondary buttons, hover states, subtle card backgrounds, diagrams. Represents technology and clarity.
- **Sunny Yellow (Highlight):** `#EDE576`
  - *Usage:* Accents, badges, warning states, and data visualizations. Represents electricity and innovation.
- **Soft Red/Pink (Tertiary):** `#E96D6D`
  - *Usage:* Data visualizations, destructive actions (with care), and illustrative elements.

### Base/Neutral Colors (Light Mode)
- **Background Primary:** `#FFFFFF` (Clean crisp white)
- **Background Secondary:** `#F8FAFC` (Very soft slate for contrast sections)
- **Text Primary (Charcoal):** `#0F172A` (Strong contrast, highly readable)
- **Text Secondary:** `#475569` (Muted for descriptions and metadata)
- **Borders/Dividers:** `#E2E8F0`

### Base/Neutral Colors (Dark Mode)
- **Background Primary:** `#0F1115` (Deep space/charcoal, not pure black)
- **Background Secondary:** `#1A1D24` (Slightly lighter for surface elevation)
- **Text Primary:** `#F8FAFC`
- **Text Secondary:** `#CBD5E1`
- *Note:* In dark mode, the vibrant brand colors (#EC6F56 and #85CBD6) serve as glowing, neon-like accents.

---

## 3. Typography

The typography leverages modern sans-serif fonts to ensure legibility on complex dashboards while maintaining a premium aesthetic.

- **Headings & Display (Font: `Outfit`)**
  - *Weights:* 500 (Medium), 600 (SemiBold), 700 (Bold)
  - *Characteristics:* Geometric, modern, friendly but authoritative. Excellent for large titles (h1, h2, h3).
- **Body & UI Elements (Font: `Inter`)**
  - *Weights:* 300 (Light), 400 (Regular), 500 (Medium)
  - *Characteristics:* Highly legible, structured, perfect for dense data, paragraphs, and UI components like buttons and nav links.

---

## 4. UI Language & Aesthetics

- **Shapes & Corners:** 
  - Standard UI elements (cards, buttons) use rounded corners (e.g., `12px` for cards, full-pill shape `9999px` for primary buttons) to appear approachable and modern.
- **Elevation & Depth:**
  - Avoid flat, generic UI. Use subtle, layered drop shadows in Light Mode (`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1)`).
  - Use colored glow effects (`box-shadow: 0 0 20px rgba(236, 111, 86, 0.2)`) on primary active elements (like the Coral button) to give a "premium tech" feel.
- **Gradients:**
  - Avoid large, overused gradient blobs. 
  - Use controlled, subtle linear gradients (e.g., `#EC6F56` to `#E96D6D`) sparingly for hero section text highlights or special badges.

---

## 5. Logo Usage Guidelines

The ASSUME logo features a connected network graphic (representing nodes in an energy grid or agents in an RL model).

- **Minimum Clear Space:** The logo must have a breathing room (padding) equal to the height of the letter "A" in ASSUME on all sides.
- **Color Variations:**
  - *Full Color:* Used on white or very light gray backgrounds.
  - *Monochrome White:* Used when placed over dark backgrounds or imagery.
  - *Monochrome Charcoal:* Used in high-contrast print or minimalist monochrome settings.
- **Do NOT:**
  - Stretch or distort the aspect ratio.
  - Change the core node colors of the network graphic.
  - Add drop shadows to the logo mark itself.
