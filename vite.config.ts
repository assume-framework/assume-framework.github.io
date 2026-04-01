import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  /** Set `VITE_BASE` in CI for GitHub Pages project sites, e.g. `/assume-homepage/`. Default `/` for local preview. */
  base: process.env.VITE_BASE || '/',
});
