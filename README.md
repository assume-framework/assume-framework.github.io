# ASSUME Project Website

This repository contains the source code for the official website of **ASSUME** (Agent-Based Electricity Markets Simulation Toolbox). 

The website serves as the central hub for the ASSUME ecosystem, providing documentation links, introductory material, research highlights, and community resources.

## Technology Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Styling**: Vanilla CSS with customized CSS variables aligning with the ASSUME brand guidelines.
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

To run the website locally for development:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

## Building for Production

To build the static assets for production deployment:

```bash
npm run build
```

This will output the optimized static files into the `dist/` directory.

## Project Structure

- `src/pages/`: Contains the main route views (Home, Toolbox, Research, Roadmap, Community).
- `src/components/layout/`: Global layout components like the `Navbar` and `Footer`.
- `src/components/ui/`: Reusable, styled UI components (e.g., `Button`).
- `brand-assets/`: Contains brand guidelines (`assume_ci_guidelines.md`), sitemaps, and original design assets.
- `public/`: Static assets such as logos and team member profile photos.

## Continuous Integration & Deployment

The website is automatically built and deployed to GitHub Pages via a GitHub Actions workflow (`.github/workflows/deploy-gh-pages.yml`). 

Any push to the `master` branch will trigger the workflow, which dynamically sets the `VITE_BASE` path to ensure assets load correctly depending on whether the site is hosted on a user/organization site or a project site.

## Contributing

When adding new ecosystem projects or modifying the branding, please refer to the `brand-assets/assume_ci_guidelines.md` to ensure the design remains consistent with the "brutalist but premium" aesthetic.
