## ASSUME homepage (Vite + React + TypeScript)

Small multi-page site for **ASSUME** using:

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [React Router](https://reactrouter.com/) for routes
- Shared **header** and **footer** via `src/layouts/SiteLayout.tsx` and `src/components/`

### Theming (light / dark)

The UI follows the **browser / OS color scheme** automatically using CSS `prefers-color-scheme` (no duplicate light/dark stylesheets and no manual theme toggle). `index.html` includes `<meta name="color-scheme" content="light dark" />` so form controls match the active scheme.

### Development

```bash
npm install
npm run dev
```

Open the URL printed by Vite (typically `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

### Upstream project

- [`assume-framework/assume`](https://github.com/assume-framework/assume)

### Logos

Static assets live under `public/img/` (e.g. `assume-logo.png`, `assume-only-logo.png`).
