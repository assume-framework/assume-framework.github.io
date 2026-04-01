/**
 * Ecosystem projects shown on the home page and /projects.
 * Add `image: { src, alt }` when you place assets under `public/img/` (e.g. `/img/project-gui.png`).
 */
export type ProjectLink = { label: string; href: string } | { label: string; to: string };

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  /** Optional visual; `src` is a URL path under `public/` */
  image?: { src: string; alt: string };
  links: ProjectLink[];
};

/** Links shown on the home ecosystem carousel (prepends entry to the projects page). */
export function linksForHomeCarousel(p: Project): ProjectLink[] {
  return [{ label: 'Overview', to: '/projects' }, ...p.links];
}

export const projects: Project[] = [
  {
    id: 'assume',
    title: 'ASSUME',
    subtitle: 'Core simulation toolbox',
    description:
      'Agent-based simulation toolbox for European electricity markets (focus: German setup), with optional deep reinforcement learning strategies.',
    image: { src: '/img/assume-logo.png', alt: 'ASSUME' },
    links: [
      { label: 'Installation', href: 'https://assume.readthedocs.io/en/latest/installation.html' },
      { label: 'GitHub', href: 'https://github.com/assume-framework/assume' },
      { label: 'Docs', href: 'https://assume.readthedocs.io/en/latest/' },
    ],
  },
  {
    id: 'assume-gui',
    title: 'ASSUME GUI',
    subtitle: 'Configuration web app',
    description:
      'Companion web application to create ASSUME configurations in a browser and run scenarios via a backend service. Complements the core toolbox for scenario setup.',
    // image: { src: '/img/project-assume-gui.png', alt: 'ASSUME GUI screenshot' },
    links: [
      { label: 'GitHub', href: 'https://github.com/assume-framework/assume-gui' },
      { label: 'Demo', href: 'https://assume.idt.fh-aachen.de' },
    ],
  },
  {
    id: 'assume-examples',
    title: 'ASSUME examples',
    subtitle: 'Example scenarios',
    description:
      'Runnable example scenarios and scripts in a separate repository to explore typical workflows quickly, without bloating the main package.',
    // image: { src: '/img/project-examples.png', alt: 'Examples repository' },
    links: [{ label: 'Examples folder', href: 'https://github.com/assume-framework/assume-examples' }],
  },
];
