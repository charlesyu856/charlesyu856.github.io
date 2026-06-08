# Charles Yu — Personal Website

My personal portfolio, live at [charlesyu856.github.io](https://charlesyu856.github.io).

Originally a static HTML/CSS/Bootstrap site, now rebuilt as a modern React single-page app with a light/dark theme, scroll-triggered animations, and a data-driven content layer.

## Tech Stack

- **Vite** — build tool & dev server
- **React 18 + TypeScript**
- **Tailwind CSS** — utility-first styling with a custom indigo/slate palette and `class`-based dark mode
- **Framer Motion** — section reveals, hover motion, floating icon decorations
- **Lucide React** — icon set
- **React Hook Form** — contact form state & validation
- **Formspree** — contact form backend (no server needed)
- **GitHub Pages + Actions** — CI/CD deployment

## Features

- Responsive single-page layout with Hero, About, Experience, Projects, and Contact sections
- Persistent light/dark mode toggle (respects `prefers-color-scheme`, no flash on load)
- Scroll-triggered fade/slide animations on each section
- Ambient floating icons decorating the section margins
- Timeline-style experience layout
- Project cards with hover zoom and external links
- Working contact form (Formspree) with inline validation and status feedback
- Calendly "Book a meeting" CTA
- SEO & Open Graph meta tags, custom SVG favicon

## Project Structure

```
.
├── index.html                  # Vite entry with meta/SEO tags
├── public/
│   ├── favicon.svg
│   ├── images/                 # profile + project images
│   └── *.pdf                   # project write-ups
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css               # Tailwind + global styles
│   ├── types.ts
│   ├── hooks/
│   │   └── useTheme.ts         # dark-mode hook
│   ├── data/                   # content as typed TS (easy to edit)
│   │   ├── about.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   └── socials.ts
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       ├── ThemeToggle.tsx
│       └── ui/
│           ├── Section.tsx
│           ├── FadeIn.tsx
│           └── FloatingIcons.tsx
├── .github/workflows/deploy.yml
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

## Local Development

```bash
npm install
npm run dev       # start dev server at http://localhost:5173
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
```

Requires Node 20+.

## Editing Content

All copy and links live under [src/data/](src/data/) — edit the TypeScript files there, save, and the site updates in dev mode. No need to touch component code to add projects, experiences, or social links.

- Add a project → append to [src/data/projects.ts](src/data/projects.ts)
- Add a job → append to [src/data/experience.ts](src/data/experience.ts)
- Update bio → edit [src/data/about.ts](src/data/about.ts)

## Deployment

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and deploys `dist/` to GitHub Pages via the official Pages actions. Ensure **Settings → Pages → Source** is set to **GitHub Actions**.

## License

Personal project. Content © Charles Yu.
